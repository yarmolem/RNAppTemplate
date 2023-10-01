import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../root-router.types';

export type PrivatedStackParamList = {
  User: undefined;
  Plans: undefined;
  Search: undefined;
  Heart: undefined;
  Chat: undefined;
};

export type ChatScreenProps = CompositeScreenProps<
  BottomTabScreenProps<PrivatedStackParamList, 'Chat'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type UserScreenProps = CompositeScreenProps<
  BottomTabScreenProps<PrivatedStackParamList, 'User'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type PlansScreenProps = CompositeScreenProps<
  BottomTabScreenProps<PrivatedStackParamList, 'Plans'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type HeartScreenProps = CompositeScreenProps<
  BottomTabScreenProps<PrivatedStackParamList, 'Heart'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type SearchScreenProps = CompositeScreenProps<
  BottomTabScreenProps<PrivatedStackParamList, 'Search'>,
  NativeStackScreenProps<RootStackParamList>
>;
