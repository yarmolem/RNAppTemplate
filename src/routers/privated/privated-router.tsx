import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import type {PrivatedStackParamList} from './privated-router.types';

const PrivatedStack = createBottomTabNavigator<PrivatedStackParamList>();

const ExampleScreen = (props: {route: {name: string}}) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>{props.route.name}</Text>
    </View>
  );
};

const PrivatedRouter = () => {
  return (
    <PrivatedStack.Navigator detachInactiveScreens initialRouteName="Search">
      <PrivatedStack.Screen name="User" component={ExampleScreen} />
      <PrivatedStack.Screen name="Chat" component={ExampleScreen} />
      <PrivatedStack.Screen name="Plans" component={ExampleScreen} />
      <PrivatedStack.Screen name="Heart" component={ExampleScreen} />
      <PrivatedStack.Screen name="Search" component={ExampleScreen} />
    </PrivatedStack.Navigator>
  );
};

export default PrivatedRouter;
