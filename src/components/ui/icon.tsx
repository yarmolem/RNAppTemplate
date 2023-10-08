import {Suspense} from 'react';
import {View} from 'react-native';

import {icons} from '@/icons';
import type {SvgProps} from 'react-native-svg';

export type IconName = keyof typeof icons;

export type IconProps = SvgProps & {
  name: IconName;
  size?: number;
};

const Icon: React.FC<IconProps> = ({
  width,
  height,
  size = 24,
  name = 'mask-solid',
  ...props
}) => {
  const IconComponent = icons?.[name];

  return (
    <Suspense fallback={<View />}>
      <IconComponent width={width ?? size} height={height ?? size} {...props} />
    </Suspense>
  );
};

export {Icon};
