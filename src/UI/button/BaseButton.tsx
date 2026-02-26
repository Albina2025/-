// // import { Button, useMantineColorScheme } from '@mantine/core';
// // import type { ButtonProps } from '@mantine/core';

// // interface BaseButtonProps extends ButtonProps {
// //   variantType?: 'primary' | 'secondary';
// // }

// // export const BaseButton: React.FC<BaseButtonProps> = ({
// //   variantType = 'primary',
// //   ...props
// // }) => {
// //   const { colorScheme } = useMantineColorScheme();
// //   const isDark = colorScheme === 'dark';

// //   const primaryBg = isDark ? '#ffffff' : '#000000';
// //   const primaryText = isDark ? '#000000' : '#ffffff';

// //   const secondaryBg = isDark ? '#000000' : '#ffffff';
// //   const secondaryText = isDark ? '#ffffff' : '#000000';

// //   const bg = variantType === 'primary' ? primaryBg : secondaryBg;
// //   const color = variantType === 'primary' ? primaryText : secondaryText;

// //   return (
// //     <Button
// //       {...props}
// //       styles={{
// //         root: {
// //           backgroundColor: bg,
// //           color: color,
// //           border: '1px solid transparent',
// //           borderRadius: 8,
// //           transition: '0.2s ease',
// //         },
// //       }}
// //     />
// //   );
// // };

// import { Button, useMantineColorScheme } from '@mantine/core';
// import type { ComponentPropsWithoutRef } from 'react';

// type BaseButtonProps = ComponentPropsWithoutRef<typeof Button> & {
//   variantType?: 'primary' | 'secondary';
// };

// export const BaseButton = ({
//   variantType = 'primary',
//   ...props
// }: BaseButtonProps) => {
//   const { colorScheme } = useMantineColorScheme();
//   const isDark = colorScheme === 'dark';

//   const bg =
//     variantType === 'primary'
//       ? isDark
//         ? '#ffffff'
//         : '#000000'
//       : isDark
//       ? '#000000'
//       : '#ffffff';

//   const color =
//     variantType === 'primary'
//       ? isDark
//         ? '#000000'
//         : '#ffffff'
//       : isDark
//       ? '#ffffff'
//       : '#000000';

//   return (
//     <Button
//       {...props}
//       styles={{
//         root: {
//           backgroundColor: bg,
//           color,
//           borderRadius: 8,
//         },
//       }}
//     />
//   );
// };

import { Button, useMantineColorScheme } from '@mantine/core';

type BaseButtonProps = {
  variantType?: 'primary' | 'secondary';
} & React.ComponentProps<typeof Button>;

export function BaseButton({
  variantType = 'primary',
  ...props
}: BaseButtonProps) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const bg =
    variantType === 'primary'
      ? isDark
        ? '#ffffff'
        : '#161d21'
      : isDark
      ? '#161d21'
      : '#ffffff';

  const color =
    variantType === 'primary'
      ? isDark
        ? '#000000'
        : '#ffffff'
      : isDark
      ? '#ffffff'
      : '#000000';

  const borderColor = isDark ? '#303d43' : '#d9d9d9';

  return (
    <Button
      {...props}
      styles={{
        root: {
          backgroundColor: bg,
          color,
          borderRadius: 8,
          border: `1px solid ${borderColor}`,
          transition: '0.2s ease',
        },
      }}
    />
  );
}