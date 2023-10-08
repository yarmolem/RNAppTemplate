import clsx from 'clsx';
import {forwardRef} from 'react';
import {Pressable, Text} from 'react-native';

import type {ElementRef, ComponentPropsWithoutRef} from 'react';

type BaseProps = Omit<ComponentPropsWithoutRef<typeof Pressable>, 'children'>;

export interface ButtonProps extends BaseProps {
  text?: string;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
}

const variants = {
  'solid-primary': {
    view: 'bg-black active:bg-[#545454]',
    text: 'text-white',
  },
  'outline-primary': {
    view: 'border border-[#E2E2E2] active:border-black',
    text: 'text-black',
  },
  'ghost-primary': {
    view: 'border-transparent active:bg-gray-100',
    text: 'text-black',
  },
};

const sizes = {
  sm: {
    view: 'px-3 py-1 rounded-xl gap-x-2',
    text: 'text-sm font-RubikBold',
  },
  md: {
    view: 'px-4 py-2 rounded-xl gap-x-2',
    text: 'text-base font-RubikBold',
  },
  lg: {
    view: 'px-4 py-3 rounded-xl gap-x-2',
    text: 'text-base font-RubikBold',
  },
  xl: {
    view: 'px-6 py-4 rounded-xl gap-x-2',
    text: 'text-base font-RubikBold',
  },
};

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
  ({text, size = 'xl', variant = 'solid-primary', ...props}, ref) => {
    const _size = sizes[size];
    const _variant = variants[variant];

    return (
      <Pressable
        ref={ref}
        className={clsx(
          'border flex-row items-center',
          _size.view,
          props.disabled ? 'bg-[#E2E2E2]' : _variant.view,
        )}
        {...props}>
        <Text
          selectable={false}
          className={clsx(
            '',
            _size.text,
            props.disabled ? 'text-[#757575]' : _variant.text,
          )}>
          {text}
        </Text>
      </Pressable>
    );
  },
);
Button.displayName = 'Button';

export {Button};
