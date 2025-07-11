import { useGetInfoUser } from '@/account/hooks/useAccount';
import { updateAccountUser } from '@/account/slice';
import { accountImage } from '@/common/constants/imagePath';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';
import { ScrollView, Skeleton, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';

import BannerContainer from '@/home/components/BannerContainer';
import HeaderContainer from '@/home/components/HomeHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import ServiceContainer from '@/home/components/service';
import FeatureVideoContainer from '@/home/components/FeatureVideoContainer';
import HorizontalPodcastSection from '@/home/components/HorizontalPodcastSection';
import LatestVideo from '@/home/components/LatestVideo';
import { useGetHomeClient } from '@/home/hooks/useGetHomeClient';
import { SectionType } from '@/home/common/constants';
import {
  ISectionAudio,
  ISectionBannerResponse,
  ISectionService,
  ISectionVideo,
} from '@/home/common/interface';
import LatestPodcast from '@/home/components/LatestPodcast';
// import HomeSkeleton from '@clvtube/home/components/HomeSkeleton';
import AdaptiveBanner from '@/common/components/ads/AdaptiveBanner';
import { Dimensions, RefreshControl } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import StorageService from '@/common/AsyncStorage';
import ServiceSkeleton from './loadding/serviceLoading';

const HomePage = () => {
  const width = Dimensions.get('window').width;
  const RATIO_BANNER = 343 / 178;
  const dispatch = useAppDispatch();
  const { data } = useGetInfoUser();
  const ref = React.useRef(null);

  // variable
  const [cacheDataBanner, setCacheDataBanner] = useState<ISectionBannerResponse | null>(null);
  const [cacheDataService, setCacheDataService] = useState<ISectionService | null>(null);
  const [cacheDataVideo, setCacheDataVideo] = useState<ISectionVideo | null>(null);
  const [cacheDataLatestVideo, setCacheDataLatestVideo] = useState<ISectionVideo | null>(null);
  const [cacheDataLatestPodcast, setCacheDataLatestPodcast] = useState<ISectionAudio | null>(null);
  const [cacheDataAudio, setCacheDataAudio] = useState<ISectionAudio | null>(null);

  useScrollToTop(ref);
  // data client
  const clientInfo = data?.data;
  // data for home
  const { data: dataHome, isLoading, refetch } = useGetHomeClient();
  // const configHomeInfo = dataHome?.sections;

  // load data from cache
  useEffect(() => {
    (async () => {
      const cachedBanner = await StorageService.getData<ISectionBannerResponse>('bannerHome');
      if (cachedBanner) setCacheDataBanner(cachedBanner);
      // service
      const cachedService = await StorageService.getData<ISectionService>('serviceHome');
      if (cachedService) setCacheDataService(cachedService);
      // service
      const cachedVideo = await StorageService.getData<ISectionVideo>('videoHome');
      if (cachedVideo) setCacheDataVideo(cachedVideo);
      // cached latest video
      const cachedlatestVideo = await StorageService.getData<ISectionVideo>('latestVideoHome');
      if (cachedlatestVideo) setCacheDataLatestVideo(cachedlatestVideo);
      // cached latest Podcast
      const cachedlatestPodcast = await StorageService.getData<ISectionAudio>('latestPodcastHome');
      if (cachedlatestPodcast) setCacheDataLatestPodcast(cachedlatestPodcast);
      // cachedAudio
      const cachedAudio = await StorageService.getData<ISectionAudio>('audioHome');
      if (cachedAudio) setCacheDataAudio(cachedAudio);
    })();
  }, []);

  useEffect(() => {
    if (data?.data) {
      dispatch(
        updateAccountUser({
          avatar: clientInfo?.avatar
            ? clientInfo?.avatar?.url
            : accountImage?.NO_AVATAR,
          avatarId: clientInfo?.avatar ? clientInfo?.avatar?.id : NaN,
          fullname: clientInfo?.client?.fullname,
          phone: clientInfo?.client?.phone,
          email: clientInfo?.client?.email,
          level: clientInfo?.levelKey ? clientInfo?.levelKey : '',
          point: clientInfo?.client?.clientPlan?.client,
          plan: clientInfo?.client?.clientPlan?.plan?.type,
          planId: clientInfo?.client?.clientPlan?.planId,
          totalDiamonds: clientInfo?.userDiamond?.totalDiamonds,
        }),
      );
    }
  }, [data?.data]);

  useEffect(() => {
    if (dataHome?.sections) {
      // const banner = dataHome.sections.find(item => item?.type === SectionType.BANNER);
      // banner
      const banner = dataHome.sections.find(item => item?.type === SectionType.BANNER) as unknown as ISectionBannerResponse;
      if (banner) {
        const bannerData = banner as ISectionBannerResponse;
        console.log('check', bannerData);
        setCacheDataBanner(bannerData);
        StorageService.saveData<ISectionBannerResponse>('bannerHome', bannerData);
      }
      // service
      const service = dataHome.sections.find(item => item?.type === SectionType.SERVICE) as unknown as ISectionService;
      if (service) {
        const serviceData = service as ISectionService;
        console.log('serviceData', serviceData);
        setCacheDataService(serviceData);
        StorageService.saveData<ISectionService>('serviceHome', serviceData);
      }
      // data Latest Podcast
      const podcast = dataHome.sections.find(item => item?.type === SectionType.NEWEST_AUDIO) as unknown as ISectionAudio;
      if (podcast) {
        const podcastData = podcast as ISectionAudio;
        console.log('podcastData', podcastData);
        setCacheDataLatestPodcast(podcastData);
        StorageService.saveData<ISectionAudio>('latestPodcastHome', podcastData);
      }
      // dataFeatureAudio
      const featureAudio = dataHome.sections.find(item => item?.type === SectionType.FEATURED_AUDIO) as unknown as ISectionAudio;
      if (featureAudio) {
        const featureAudioData = featureAudio as ISectionAudio;
        console.log('podcastData', featureAudioData);
        setCacheDataAudio(featureAudioData);
        StorageService.saveData<ISectionAudio>('audioHome', featureAudioData);
      }
      // DataLatestVideoSection
      const LatestVideo = dataHome.sections.find(item => item?.type === SectionType.NEWEST_VIDEO) as unknown as ISectionVideo;
      if (LatestVideo) {
        const LatestVideoData = LatestVideo as ISectionVideo;
        console.log('LatestVideoData', LatestVideoData);
        setCacheDataLatestVideo(LatestVideoData);
        StorageService.saveData<ISectionVideo>('latestVideoHome', LatestVideoData);
      }
      // dataFeatureVideo
      const featureVideo = dataHome.sections.find(item => item?.type === SectionType.FEATURED_VIDEO) as unknown as ISectionVideo;
      if (featureVideo) {
        const featureVideoData = featureVideo as ISectionVideo;
        console.log('featureVideoData', featureVideoData);
        setCacheDataVideo(featureVideoData);
        StorageService.saveData<ISectionVideo>('videoHome', featureVideoData);
      }
    }
  }, [dataHome]);

  // const DataLatestPodcast = (dataHome?.sections?.filter(
  //   item => item?.type === SectionType.NEWEST_AUDIO,
  // )[0] || {}) as ISectionAudio;
  // console.log('test DataLatestPodcast', DataLatestPodcast);

  // const dataFeatureAudio = (dataHome?.sections?.filter(
  //   item => item?.type === SectionType.FEATURED_AUDIO,
  // )[0] || {}) as ISectionAudio;
  // console.log('test dataFeatureAudio', dataFeatureAudio);

  // const DataLatestVideoSection = (dataHome?.sections?.filter(
  //   item => item?.type === SectionType.NEWEST_VIDEO,
  // )[0] || {}) as ISectionVideo;
  // console.log('test DataLatestVideoSection', DataLatestVideoSection);

  // const dataBanner = (dataHome?.sections?.filter(
  //   item => item?.type === SectionType.BANNER,
  // )[0] || {}) as ISectionBannerResponse;

  // if (dataBanner) {
  //   StorageService.saveData<ISectionBannerResponse>('bannerHome', dataBanner);
  // }

  // const dataService = (dataHome?.sections?.filter(
  //   item => item?.type === SectionType.SERVICE,
  // )[0] || {}) as ISectionService;

  // if (dataService) {
  //   StorageService.saveData<ISectionService>('serviceHome', dataService);
  // }

  // const dataFeatureVideo = (dataHome?.sections?.filter(
  //   item => item?.type === SectionType.FEATURED_VIDEO,
  // )[0] || {}) as ISectionVideo;

  // if (dataFeatureVideo) {
  //   StorageService.saveData<ISectionVideo>('FeatureHome', dataFeatureVideo);
  // }

  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }} edges={['top']}>
      <ScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        // bounces={false}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={() => refetch()} />
        }>
          <VStack space={'20px'} pb={'50px'}>
            <VStack bgColor={'white'}>
              <HeaderContainer />
            </VStack>
            {!cacheDataBanner || (cacheDataBanner && (!cacheDataBanner.data || cacheDataBanner.data.length === 0)) ? (
              <Skeleton width={width} height={width / RATIO_BANNER} />
            ) : (
              <BannerContainer data={cacheDataBanner} />
            )}

            {/* Service */}
            {!cacheDataService || (cacheDataService && (!cacheDataService.data || cacheDataService.data.length === 0)) ? (
              <ServiceSkeleton/>
            ) : (
              <ServiceContainer data={cacheDataService} />
            )}

            {/* FeatureVideoContainer */}

            {!cacheDataVideo || (cacheDataVideo && (!cacheDataVideo.data || cacheDataVideo.data.length === 0)) ? (
              <Skeleton width={width} height={width / RATIO_BANNER} />
            ) : (
              <FeatureVideoContainer data={cacheDataVideo} />
            )}
            {/* dataFeatureAudio */}

            {!cacheDataAudio || (cacheDataAudio && (!cacheDataAudio.data || cacheDataAudio.data.length === 0)) ? (
              <Skeleton width={width} height={width / RATIO_BANNER} />
            ) : (
              <>
                <HorizontalPodcastSection dataSection={cacheDataAudio} />
                {data?.data?.client?.clientPlan?.plan?.type === 'PREMIUM' ? (
                  <></>
                ) : (
                  <AdaptiveBanner />
                )}
              </>
            )}
            {/* DataLatestVideoSection */}
            {!cacheDataLatestVideo || (cacheDataLatestVideo && (!cacheDataLatestVideo.data || cacheDataLatestVideo.data.length === 0)) ? (
              <Skeleton width={width} height={width / RATIO_BANNER} />
            ) : (
              <LatestVideo dataLatestSection={cacheDataLatestVideo} />
            )}
            {/* DataLatestPodcast */}
            {!cacheDataLatestPodcast || (cacheDataLatestPodcast && (!cacheDataLatestPodcast.data || cacheDataLatestPodcast.data.length === 0)) ? (
              <Skeleton width={width} height={width / RATIO_BANNER} />
            ) : (
              <LatestPodcast dataSection={cacheDataLatestPodcast} />
            )}
          </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
