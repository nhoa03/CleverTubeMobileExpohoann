// // // eslint-disable-next-line multiline-ternary
// // import React, { useEffect } from 'react';
// // import { ScrollView, VStack } from 'native-base';

// // import SearchHeader from '@clvtube/common/components/searchHeader/index';
// // import ListVideoNew from './component/ListVideoNew';
// // // import MaybeYouLikeVideo from './component/MaybeYouLikeVideo';
// // import PopularTopic from './component/PopularTopic';
// // import PupolarVideo from './component/PupolarVideo';
// // import VideoSave from '@clvtube/video-save';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import AdaptiveBanner from '@clvtube/common/components/ads/AdaptiveBanner';
// // import { useGetInfoUser } from '@clvtube/account/hooks/useAccount';
// // import { SearchType } from '@clvtube/search-page/interface';
// // import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
// // import { setTopicsPicking } from './slice';
// // import { useScrollToTop } from '@react-navigation/native';

// // const VideoList = () => {
// //   const ref = React.useRef(null);
// //   const { data } = useGetInfoUser();
// //   const dispatch = useAppDispatch();
// //   useEffect(() => {
// //     return () => {
// //       dispatch(setTopicsPicking('All'));
// //     };
// //   }, []);

// //   useScrollToTop(ref);

// //   return (
// //     <SafeAreaView style={{ backgroundColor: '#FFFFFF' }} edges={['top']}>
// //       <ScrollView ref={ref} showsVerticalScrollIndicator={false}>
// //         <VStack space={4}>
// //           <VStack safeAreaTop={5} bgColor={'neural.1'}>
// //             <SearchHeader searchType={SearchType.VIDEO} />
// //             <PopularTopic />
// //           </VStack>
// //           <PupolarVideo />

// //           {
// //             // eslint-disable-next-line multiline-ternary
// //             data?.data?.client?.clientPlan?.plan?.type === 'PREMIUM' ? (
// //               <></>
// //             ) : (
// //               <AdaptiveBanner />
// //             )
// //           }

// //           {
// //             // eslint-disable-next-line multiline-ternary
// //             data?.data?.client && <VideoSave />
// //           }
// //           <ListVideoNew />
// //           {/* <MaybeYouLikeVideo /> */}
// //         </VStack>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // export default VideoList;

// import React, { Suspense, lazy, useEffect } from 'react';
// import { ScrollView, VStack } from 'native-base';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import SearchHeader from '@clvtube/common/components/searchHeader/index';
// import { useGetInfoUser } from '@clvtube/account/hooks/useAccount';
// import { SearchType } from '@clvtube/search-page/interface';
// import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
// import { setTopicsPicking } from './slice';
// import { useScrollToTop } from '@react-navigation/native';
// import AdaptiveBanner from '@clvtube/common/components/ads/AdaptiveBanner';
// import LoadingIndicator from './component/LoadingIndicator';

// const ListVideoNew = lazy(() => import('./component/ListVideoNew'));
// const PopularTopic = lazy(() => import('./component/PopularTopic'));
// const PupolarVideo = lazy(() => import('./component/PupolarVideo'));
// const VideoSave = lazy(() => import('@clvtube/video-save'));

// const VideoList = () => {
//   const ref = React.useRef(null);
//   const { data } = useGetInfoUser();
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     return () => {
//       dispatch(setTopicsPicking('All'));
//     };
//   }, [dispatch]);

//   useScrollToTop(ref);

//   const isPremium = data?.data?.client?.clientPlan?.plan?.type === 'PREMIUM';

//   return (
//     <SafeAreaView style={{ backgroundColor: '#FFFFFF' }} edges={['top']}>
//       <ScrollView ref={ref} showsVerticalScrollIndicator={false}>
//         <VStack space={4}>
//           <VStack safeAreaTop={5} bgColor={'neural.1'}>
//             <SearchHeader searchType={SearchType.VIDEO} />
//             <Suspense fallback={<LoadingIndicator />}>
//               <PopularTopic />
//             </Suspense>
//           </VStack>
//           <Suspense fallback={<LoadingIndicator />}>
//             <PupolarVideo />
//           </Suspense>

//           {!isPremium && (
//             <Suspense fallback={<LoadingIndicator />}>
//               <AdaptiveBanner />
//             </Suspense>
//           )}

//           {data?.data?.client && (
//             <Suspense fallback={<LoadingIndicator />}>
//               <VideoSave />
//             </Suspense>
//           )}
//           <Suspense fallback={<LoadingIndicator />}>
//             <ListVideoNew />
//           </Suspense>
//         </VStack>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default VideoList;
