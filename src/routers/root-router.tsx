import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PublicRouter from './public/public-router';
import PrivatedRouter from './privated/privated-router';

import {navigationRef} from '@/utils/navigate';
import {useAuthStore} from '@/stores/auth.store';

import type {RootStackParamList} from './root-router.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRouter = () => {
  const {isAuth, isSignout} = useAuthStore(state => ({
    isSignout: state.isSignout,
    isAuth: state.user !== null,
  }));

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isAuth ? (
          <Stack.Screen
            name="Public"
            component={PublicRouter}
            options={{
              animationTypeForReplace: isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          <Stack.Screen name="Privated" component={PrivatedRouter} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
