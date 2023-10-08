import {forwardRef} from 'react';
import {Text} from 'react-native';
import {cva, type VariantProps} from 'class-variance-authority';

import {cn} from '@/utils/cn';

import type {ElementRef, ComponentPropsWithoutRef} from 'react';

const paragraphVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      thin: 'font-RubikThin',
      light: 'font-RubikLight',
      extralight: 'font-RubikExtraLight',
      normal: 'font-RubikRegular',
      medium: 'font-RubikMedium',
      semibold: 'font-RubikSemiBold',
      bold: 'font-RubikBold',
      extrabold: 'font-RubikExtraBold',
    },
    color: {
      black: 'text-black',
      muted: 'text-slate-400',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'black',
    weight: 'normal',
  },
});

export interface ParagraphProps
  extends ComponentPropsWithoutRef<typeof Text>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<ElementRef<typeof Text>, ParagraphProps>(
  ({size, color, weight, ...props}, ref) => {
    return (
      <Text
        ref={ref}
        className={cn(paragraphVariants({color, size, weight}))}
        {...props}
      />
    );
  },
);

export {Paragraph};
