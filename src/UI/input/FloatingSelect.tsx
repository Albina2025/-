// import { Select } from '@mantine/core';
// import type { SelectProps } from '@mantine/core';
// import { useState } from 'react';

// interface FloatingSelectProps extends SelectProps {
//   labelText: string;
// }

// export const FloatingSelect: React.FC<FloatingSelectProps> = ({
//   labelText,
//   value,
//   onChange,
//   ...props
// }) => {
//   const [focused, setFocused] = useState(false);

//   const hasValue = value !== null && value !== undefined && value !== '';

//   return (
//     <Select
//       {...props}
//       value={value}
//       onChange={onChange}
//       autoFocus={false}
//       label={focused || hasValue ? labelText : undefined}
//       placeholder={!focused && !hasValue ? labelText : ''}
//       onFocus={() => setFocused(true)}
//       onBlur={() => setFocused(false)}
//     />
//   );
// };

import { Select } from '@mantine/core';
import type { SelectProps } from '@mantine/core';
import { useState } from 'react';

interface FloatingSelectProps extends SelectProps {
  labelText: string;
}

export const FloatingSelect: React.FC<FloatingSelectProps> = ({
  labelText,
  value,
  onChange,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const hasValue = !!value;

  return (
    <Select
      {...props}
      value={value}
      onChange={onChange}
      label={labelText}
      placeholder={focused || hasValue ? '' : labelText}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      styles={{
        label: {
          opacity: focused || hasValue ? 1 : 0,
          transition: 'all 0.2s ease',
        },
      }}
    />
  );
};