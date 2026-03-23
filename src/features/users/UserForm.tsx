import { forwardRef, useEffect, useState } from "react";
import { Grid, Button, Box, Stack, Title, Divider, useMantineColorScheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { userSchema } from "../../schemas/users.shema";
import { FloatingInput } from "../../UI/input/FloatingInput";
import type { UserFormValues } from "../../entities/user/types/user.form.types";
import { useTranslation } from "react-i18next";

interface Props {
  defaultValues?: Partial<UserFormValues>;
  onSubmit: (values: UserFormValues) => void;
}

export const UserForm = forwardRef<HTMLFormElement, Props>(
  ({ defaultValues, onSubmit }, ref) => {
    const [image, setImage] = useState<string | null>(null);
    const { t } = useTranslation();
    const { colorScheme } = useMantineColorScheme();
    const isDark = colorScheme === "dark";

    const form = useForm<UserFormValues>({
      initialValues: {
        username: "",
        password: "",
        name: "",
        surname: "",
        patronymic: "",
        phone: "",
        email: "",
        photo: "",
        dateOfBirth: "",
        ministryId: 0,
        divisionId: 0,
        roleIds: [],
        positionId: 0,
      },
      validate: zodResolver(userSchema),
    });

    // ✅ CriteriaForm сыяктуу, бирок ТУУРА
    useEffect(() => {
      if (defaultValues) {
        form.setValues({
          username: defaultValues.username ?? "",
          password: "",
          name: defaultValues.name ?? "",
          surname: defaultValues.surname ?? "",
          patronymic: defaultValues.patronymic ?? "",
          phone: defaultValues.phone ?? "",
          email: defaultValues.email ?? "",
          photo: defaultValues.photo ?? "",
          dateOfBirth: defaultValues.dateOfBirth ?? "",
          ministryId: defaultValues.ministryId ?? 0,
          divisionId: defaultValues.divisionId ?? 0,
          roleIds: defaultValues.roleIds ?? [],
          positionId: defaultValues.positionId ?? 0,
        });

        setImage(defaultValues.photo ?? null);
      }
    }, [defaultValues]);

    const handleUpload = (file: File) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImage(base64);
        form.setFieldValue("photo", base64);
      };
      reader.readAsDataURL(file);
    };

    const handleClear = () => {
      setImage(null);
      form.setFieldValue("photo", "");
    };

    return (

      <Stack>
        <Box
          p="md"
          style={{
            border: `1px solid ${isDark ? "#303d43" : "#d9d9d9"}`,
            borderRadius: 8,
          }}
        >
        <Title ta="center" size={20} mb="md">
          {t("userModal.title")}
        </Title>
        <Divider mb="md" />
      <form ref={ref} onSubmit={form.onSubmit(onSubmit)}>
        <Grid>

          {/* IMAGE */}
          <Grid.Col span={4}>
            <Box>
              {image ? (
                <>
                  <img src={image} width={120} height={120} />
                  <Button mt="sm" onClick={handleClear}>
                    Очистить
                  </Button>
                </>
              ) : (
                <Button component="label">
                  Загрузить изображение
                  <input
                    hidden
                    type="file"
                    onChange={(e) =>
                      e.target.files && handleUpload(e.target.files[0])
                    }
                  />
                </Button>
              )}
            </Box>
          </Grid.Col>

          {/* FIELDS */}
          <Grid.Col span={8}>
            <FloatingInput
              required
              labelText="Логин"
              {...form.getInputProps("username")}
            />

            <FloatingInput
              labelText="Пароль"
              {...form.getInputProps("password")}
            />

            <FloatingInput
              required
              labelText="Имя"
              {...form.getInputProps("name")}
            />

            <FloatingInput
              required
              labelText="Фамилия"
              {...form.getInputProps("surname")}
            />

            <FloatingInput
              labelText="Отчество"
              {...form.getInputProps("patronymic")}
            />

            <FloatingInput
              labelText="Телефон"
              {...form.getInputProps("phone")}
            />

            <FloatingInput
              labelText="Email"
              {...form.getInputProps("email")}
            />
          </Grid.Col>
        </Grid>

        <button type="submit" style={{ display: "none" }} />
      </form>
      </Box>
      </Stack>
    );
  }
);

UserForm.displayName = "UserForm";