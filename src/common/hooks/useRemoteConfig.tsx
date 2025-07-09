import remoteConfig from '@react-native-firebase/remote-config';
import _ from 'lodash';
import { useEffect } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { AppEmitterEvents, KeyRemoteConfig } from '../constants/remoteConfig';

// Need to setup the default value if needed for the remote config feature.
// https://rnfirebase.io/remote-config/usage#default-values
// NOTE: Careful cause remote config need time to get from firebase, need to check status,
// event set defaults value need time to setup, if we using value immediately we will receive empty data.
export const useRemoteConfig = () => {
  useEffect(() => {
    // await remoteConfig().setConfigSettings({
    //   minimumFetchIntervalMillis: 30000,
    // });

    const remoteConfigListenerUnsubscriber = remoteConfig().onConfigUpdated(
      (event, error) => {
        if (error !== undefined) {
          console.log(`Remote Config listener Err ${JSON.stringify(error)}`);
        } else {
          remoteConfig().activate();
        }
      },
    );

    remoteConfig()
      .setDefaults({
        [KeyRemoteConfig.keyFeature]: 'Default Value',
      })
      .then(() => {
        remoteConfig().fetchAndActivate();
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((fetchedRemotely: any) => {
        // Send event that the fetch are done
        DeviceEventEmitter.emit(AppEmitterEvents.FETCHED_REMOTE_CONFIG);

        // if (fetchedRemotely) {
        //   console.log('Configs were retrieved from the backend and activated.');
        // } else {
        //   console.log(
        //     'No configs were fetched from the backend, and the local configs were already activated',
        //   );
        // }
      });

    return () => {
      remoteConfigListenerUnsubscriber();
    };
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const abmobAdUnitStr = remoteConfig()
  //       .getValue(KeyRemoteConfig.abmobAdUnit)
  //       .asString();
  //     const abmobAdUnit: IAdmobAdUnit = safeParseJson(abmobAdUnitStr);

  //     console.log('abmobAdUnit data', abmobAdUnit.appOpenAds);
  //   }, 2000);
  // }, []);
};
