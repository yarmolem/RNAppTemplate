import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../root-router.types';

export type PublicStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Onboarding: undefined;
};

export type OnboardingScreenProps = CompositeScreenProps<
  NativeStackScreenProps<PublicStackParamList, 'Onboarding'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type SignInScreenProps = CompositeScreenProps<
  NativeStackScreenProps<PublicStackParamList, 'SignIn'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type SignUpScreenProps = CompositeScreenProps<
  NativeStackScreenProps<PublicStackParamList, 'SignUp'>,
  NativeStackScreenProps<RootStackParamList>
>;
