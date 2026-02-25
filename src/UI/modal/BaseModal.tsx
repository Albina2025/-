import { Modal, useMantineColorScheme } from '@mantine/core';
import type { ModalProps } from '@mantine/core';

interface BaseModalProps extends ModalProps {
  children: React.ReactNode;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  children,
  ...props
}) => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const bg = isDark ? '#161d21' : '#fdfdfd';
  const textColor = isDark ?  '#ffffff': '#000000';

  return (
    <Modal
      {...props}
      radius={15}
      centered
      withCloseButton={false}
      styles={{
        content: {
          backgroundColor: bg,
        },
        header: {
          backgroundColor: bg,
        },
        body: {
          backgroundColor: bg,
          color: textColor,
        },
      }}
    >
      {children}
    </Modal>
  );
};