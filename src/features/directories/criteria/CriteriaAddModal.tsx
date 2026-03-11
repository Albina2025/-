import { Stack, Box, Group, Title, useMantineColorScheme } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { BaseModal, BaseButton } from "../../../UI";
import { CriteriaForm } from "./CriteriaForm";
import { api } from "../../../api/axios";
import { useTranslation } from "react-i18next";

import type { CriteriaFormValues } from "../../../types/criteria/criteria.form.types";

interface Props {
  opened: boolean;
  onClose: () => void;
}

export const CriteriaAddModal: React.FC<Props> = ({ opened, onClose }) => {
  const { t } = useTranslation();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const handleSubmit = async (values: CriteriaFormValues) => {
    try {
      await api.post("/api/v1/criteria", values);

      notifications.show({
        title: t("notifications.success"),
        message: t("notifications.created"),
        color: "green",
      });

      onClose();
    } catch {
      notifications.show({
        title: t("notifications.error"),
        message: t("notifications.somethingWrong"),
        color: "red",
      });
    }
  };

  return (
    <BaseModal
      opened={opened}
      onClose={onClose}
      centered
      size={800}
      withCloseButton={false}
    >
      <Stack>
        <Box
          p="md"
          style={{
            border: `1px solid ${isDark ? "#303d43" : "#d9d9d9"}`,
            borderRadius: 8,
          }}
        >
          <Title order={5} ta="center" mb="md">
            {t("criteriaModal.title")}
          </Title>

          <CriteriaForm onSubmit={handleSubmit} />

          <Group justify="center" mt="md">
            <BaseButton variantType="secondary" onClick={onClose}>
              {t("criteriaModal.buttons.cancel")}
            </BaseButton>

            <BaseButton
              variantType="primary"
              onClick={() =>
                document
                  .querySelector("form")
                  ?.dispatchEvent(
                    new Event("submit", { cancelable: true, bubbles: true })
                  )
              }
            >
              {t("criteriaModal.buttons.confirm")}
            </BaseButton>
          </Group>
        </Box>
      </Stack>
    </BaseModal>
  );
};