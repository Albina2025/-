import { TextInput } from '@mantine/core';
import type { TextInputProps } from '@mantine/core';
import { useState } from 'react';

interface FloatingInputProps extends TextInputProps {
  labelText: string;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({
  labelText,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      {...props}
      label={labelText}        
      placeholder={focused ? '' : labelText}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.value) {
          setFocused(false);
        }
      }}
      styles={{
        label: {
          opacity: focused ? 1 : 0,   
          transform: focused ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.2s ease',
        },
      }}
    />
  );
};