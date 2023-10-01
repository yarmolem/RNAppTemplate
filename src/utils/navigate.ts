import {RootStackParamList} from '@/routers/root-router.types';
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = navigationRef.navigate;
