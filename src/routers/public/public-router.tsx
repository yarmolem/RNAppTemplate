import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '@/screens/auth/sign-in.screen';
import SignUpScreen from '@/screens/auth/sign-up.screen';
import OnboardingScreen from '@/screens/auth/onboarding.screen';
import type {PublicStackParamList} from './public-router.types';

const AuthStack = createNativeStackNavigator<PublicStackParamList>();

const AuthRouter = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthRouter;
