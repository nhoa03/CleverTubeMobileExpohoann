// import SearchingHeader from '@/common/components/searchHeader/index';
// import { StatusBar, VStack } from 'native-base';
// import React, { useEffect } from 'react';
// import { SafeAreaView, ScrollView } from 'react-native';
// // import { MaybeYouLike } from './MaybeYouLike';
// // import { OutStandingPodcast } from './OutstandingPodcast';
// import { PodcastList } from './PodcastList';
// import PopularTopics from './PopularTopics';
// // import { Speak } from './Speak';
// import { PodcastListProps } from '../interfaces';
// import PodcastSave from '@/podcast-save';
// import AdaptiveBanner from '../../../common/components/ads/AdaptiveBanner';
// import PodcastListFeature from './PodcastListFeature';
// import { SearchType } from '@/search-page/interface';
// import { useGetInfoUser } from '../../../account/hooks/useAccount';
// import { useAppDispatch } from '@/common/hooks/useAppDispatch';
// import { setTopicsPickingPodcast } from '@/podcast-list-with-topic/podcastListWithTopic.slice';
// import { useScrollToTop } from '@react-navigation/native';

// const Podcast = ({ navigation, route }: PodcastListProps) => {
//   const { data } = useGetInfoUser();
//   const dispatch = useAppDispatch();
//   const ref = React.useRef(null);

//   useEffect(() => {
//     dispatch(setTopicsPickingPodcast('All'));
//     return () => {
//       dispatch(setTopicsPickingPodcast('All'));
//     };
//   }, []);

//   useScrollToTop(ref);

//   return (
//     // <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
//     <>
//       <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
//         <ScrollView ref={ref} showsVerticalScrollIndicator={false}>
//           <VStack space={2}>
//             <VStack safeAreaTop={5} bgColor={'white'}>
//               <SearchingHeader searchType={SearchType.PODCAST} />
//               <PopularTopics navigation={navigation} route={route} />
//             </VStack>
//             <PodcastListFeature />
//             {data?.data?.client && (
//               <VStack space={4}>
//                 <PodcastSave navigation={navigation} route={route} />
//               </VStack>
//             )}
//             {/* <OutStandingPodcast /> */}
//             {data?.data?.client?.clientPlan?.plan?.type === 'PREMIUM' ? (
//               <></>
//             ) : (
//               <AdaptiveBanner />
//             )}
//             <PodcastList navigation={navigation} route={route} />
//             {/* <MaybeYouLike /> */}
//             {/* <Speak /> */}
//           </VStack>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// export default Podcast;
