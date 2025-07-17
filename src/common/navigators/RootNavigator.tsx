import analytics from '@react-native-firebase/analytics';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React, { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { PersistGate } from 'redux-persist/integration/react';
// import { RatingModal } from '../../rating';
import { useRemoteConfig } from '../hooks/useRemoteConfig';
// import { persistor } from '../redux/store';
// import RootStack from './RootStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: undefined;
VideoDetails: { videoId: string };
Podcast: { podcastId: string };
PODCAST_DETAIL: { id: string };
};

const RootNavigator = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();
  const queryClient = new QueryClient();

  useRemoteConfig();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={async () => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()?.name;

        const trackScreenView = async (routeName: string) => {
          await analytics().logScreenView({
            screen_name: routeName,
            screen_class: routeName,
          });
        };

        if (previousRouteName !== currentRouteName && currentRouteName) {
          routeNameRef.current = currentRouteName;
          await trackScreenView(currentRouteName);
        }
      }}>
      <QueryClientProvider client={queryClient}>
        {/* <PersistGate loading={null} persistor={persistor}>
          <RootStack />
          <RatingModal />
        </PersistGate> */}
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default RootNavigator;
