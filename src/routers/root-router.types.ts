import type {NavigatorScreenParams} from '@react-navigation/native';

import type {PublicStackParamList} from './public/public-router.types';
import type {PrivatedStackParamList} from './privated/privated-router.types';

export type RootStackParamList = {
  Public: NavigatorScreenParams<PublicStackParamList>;
  Privated: NavigatorScreenParams<PrivatedStackParamList>;
};
