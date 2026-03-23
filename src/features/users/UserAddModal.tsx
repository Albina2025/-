import { BaseModal, BaseButton } from "../../UI";
import { UserForm } from "./UserForm";
import { api } from "../../api/axios";
import { notifications } from "@mantine/notifications";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import type { UserFormValues } from "../../entities/user/types/user.form.types";

interface Props {
  opened: boolean;
  onClose: () => void;
}

export const UserAddModal: React.FC<Props> = ({ opened, onClose }) => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (values: UserFormValues) => {
    try {
      await api.post("/api/v1/users", values);

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
    <BaseModal opened={opened} onClose={onClose}>
      <UserForm ref={formRef} onSubmit={handleSubmit} />

      <BaseButton onClick={() => formRef.current?.requestSubmit()}>
        {t("userModal.buttons.confirm")}
      </BaseButton>
    </BaseModal>
  );
};