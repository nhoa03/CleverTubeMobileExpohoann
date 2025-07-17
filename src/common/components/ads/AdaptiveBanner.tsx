import { envData } from '@/common/constants/envData';
import { View } from 'native-base';
import React from 'react';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : envData.adsUnitIdBanner;

const AdaptiveBanner = () => {
  return (
    <View py={3}>
      <BannerAd
        unitId={adUnitId as string}

        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </View>
  );
};

export default AdaptiveBanner;
