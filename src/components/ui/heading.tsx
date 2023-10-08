import {forwardRef} from 'react';
import {Text} from 'react-native';
import {cva, type VariantProps} from 'class-variance-authority';

import type {ElementRef, ComponentPropsWithoutRef} from 'react';
import {cn} from '@/utils/cn';

const headingVariants = cva('', {
  variants: {
    size: {
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    weight: {
      thin: 'font-MontserratThin',
      light: 'font-MontserratLight',
      extralight: 'font-MontserratExtraLight',
      normal: 'font-MontserratRegular',
      medium: 'font-MontserratMedium',
      semibold: 'font-MontserratSemiBold',
      bold: 'font-MontserratBold',
      extrabold: 'font-MontserratExtraBold',
    },
    color: {
      black: 'text-black',
      muted: 'text-gray-400',
    },
  },
  defaultVariants: {
    size: 'lg',
    color: 'black',
    weight: 'normal',
  },
});

export interface HeadingProps
  extends ComponentPropsWithoutRef<typeof Text>,
    VariantProps<typeof headingVariants> {}

const Heading = forwardRef<ElementRef<typeof Text>, HeadingProps>(
  ({size, color, weight, ...props}, ref) => {
    return (
      <Text
        ref={ref}
        className={cn(headingVariants({color, size, weight}))}
        {...props}
      />
    );
  },
);

export {Heading};
