import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api/axios";
import { UserForm } from "./UserForm";
import { BaseModal, BaseButton } from "../../UI";
import { useRef } from "react";
import { notifications } from "@mantine/notifications";
import { useTranslation } from "react-i18next";

import type { UserItem } from "../../entities/user/types/types";
import type { UserFormValues } from "../../entities/user/types/user.form.types";

interface Props {
  opened: boolean;
  onClose: () => void;
  userId: number | null;
}

export const UserEditModal: React.FC<Props> = ({
  opened,
  onClose,
  userId,
}) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const formRef = useRef<HTMLFormElement>(null);

  const { data } = useQuery<UserItem>({
    queryKey: ["user", userId],
    queryFn: async () => {
      const res = await api.get(`/api/v1/users/${userId}`);
      return res.data;
    },
    enabled: Boolean(userId),
  });

  const mutation = useMutation<void, Error, UserFormValues>({
    mutationFn: async (values) => {
      await api.put(`/api/v1/users/${userId}`, values);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      notifications.show({
        title: t("notifications.success"),
        message: t("notifications.updated"),
        color: "green",
      });

      onClose();
    },

    onError: () => {
      notifications.show({
        title: t("notifications.error"),
        message: t("notifications.somethingWrong"),
        color: "red",
      });
    },
  });

  const handleSubmit = (values: UserFormValues) => {
    mutation.mutate(values);
  };

  return (
    <BaseModal opened={opened} onClose={onClose}>
      {data && (
        <UserForm
          ref={formRef}
          defaultValues={{
            username: data.username,
            name: data.name,
            surname: data.surname,
            patronymic: data.patronymic,
            phone: data.phone,
            email: data.email,
            photo: data.photo,
            dateOfBirth: data.dateOfBirth,
            ministryId: data.ministry?.id ?? 0,
            divisionId: data.division?.id ?? 0,
            roleIds: data.roles.map((r) => r.id),
            positionId: data.position?.id ?? 0,
          }}
          onSubmit={handleSubmit}
        />
      )}

      <BaseButton
        loading={mutation.isPending}
        onClick={() => formRef.current?.requestSubmit()}
      >
        {t("userModal.buttons.confirm")}
      </BaseButton>
    </BaseModal>
  );
};