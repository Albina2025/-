import { Button, Group, Stack, Switch } from '@mantine/core';
import { useState } from 'react';
import { FloatingInput } from '../../../UI/input/FloatingInput';
import { IconCheck, IconX } from '@tabler/icons-react';
import { BaseModal } from '../../../UI/modal/BaseModal';

interface PrivateSectorFilterProps {
  opened: boolean;
  onClose: () => void;
}

export const PrivateSectorFilterModal: React.FC<PrivateSectorFilterProps> = ({
  opened,
  onClose,
}) => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [exclude, setExclude] = useState<string>('');
  const [useAPI, setUseAPI] = useState(false);
  const [audited, setAudited] = useState(false);

  const handleReset = () => {
    setName('');
    setAddress('');
    setExclude('');
    setUseAPI(false);
    setAudited(false);
  };

  const handleApply = () => {
    console.log({
      name,
      address,
      exclude,
      useAPI,
      audited,
    });

    onClose();
  };

  return (
    <BaseModal
      opened={opened}
      onClose={onClose}
      centered
      size={1000}
      withCloseButton={false}
      radius={15}
    >
      <Stack gap={8}>

        <FloatingInput
          labelText="Наименование"
          value={name}
          onChange={(event) =>
            setName(event.currentTarget.value)
          }
          radius={10}
        />

        <FloatingInput
          labelText="Адрес"
          value={address}
          onChange={(event) =>
            setAddress(event.currentTarget.value)
          }
          radius={10}
        />


        <Switch
            label="forms.enabled"
            checked={useAPI}
            onChange={(event) =>
                setUseAPI(event.currentTarget.checked)
            }
            color={useAPI ? "green" : "red"}
            thumbIcon={
                useAPI ? (
                <IconCheck size={12} color="green" />
                ) : (
                <IconX size={12} color="red" />
                )
            }
            styles={{
                track: {
                backgroundColor: useAPI ? '#12b886' : '#fa5252',
                },
                thumb: {
                backgroundColor: 'white',
                },
            }}
        />

 
        <FloatingInput
          labelText="forms.exclude"
          value={exclude}
          onChange={(event) =>
            setExclude(event.currentTarget.value)
          }
          radius={10}
        />


        <Switch
            label="forms.quditeMinistries"
            checked={audited}
            onChange={(event) =>
                setAudited(event.currentTarget.checked)
            }
            color={audited ? "green" : "red"}
            thumbIcon={
                audited ? (
                <IconCheck size={12} color="green" />
                ) : (
                <IconX size={12} color="red" />
                )
            }
            styles={{
                track: {
                backgroundColor: audited ? '#12b886' : '#fa5252',
                },
                thumb: {
                backgroundColor: 'white',
                },
            }}
        />

        <Group mt="md" grow>
          <Button color="black" radius={10} onClick={handleReset}>
            Сбросить
          </Button>

          <Button onClick={handleApply} radius={10} color="black">
            Применить фильтры
          </Button>
        </Group>

      </Stack>
    </BaseModal>
  );
};