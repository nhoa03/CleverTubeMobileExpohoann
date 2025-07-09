// import React from 'react';
// import { FlatList, TouchableOpacity } from 'react-native';
// import {
//   Alert,
//   Box,
//   Button,
//   Center,
//   HStack,
//   Heading,
//   Spinner,
//   Stack,
//   Text,
//   VStack,
// } from 'native-base';
// import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
// import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
// import { useGetInfinityVideos } from '@clvtube/common/hooks/useVideos';
// import { useNavigation } from '@react-navigation/native';
// import { setTopicsPicking } from '../slice';
// import VideoItem from '../../../common/components/video-item/index';
// import { VIDEO_ROUTE } from '../../../common/constants/route.constants';
// import ListVideoSkeleton from './skeleton/ListVideoSkeleton';
// import { useGetInfiniteTopics } from '@clvtube/common/hooks/useGetInfiniteTopic';

// // eslint-disable-next-line react/display-name
// const FooterLoadMore = React.memo(
//   ({ isFetchingNextPage }: { isFetchingNextPage: boolean }) => {
//     return (
//       <>
//         {
//           // eslint-disable-next-line multiline-ternary
//           isFetchingNextPage ? (
//             <Stack alignItems={'center'} justifyContent={'center'}>
//               <Spinner mt="40px" />
//               <Box width="150px"></Box>
//             </Stack>
//           ) : (
//             <Box height="20px" width={'20px'}></Box>
//           )
//         }
//       </>
//     );
//   },
// );
// // eslint-disable-next-line react/display-name
// const FooterLoadMoreTopic = React.memo(
//   ({ isFetchingNextPage }: { isFetchingNextPage: boolean }) => {
//     return (
//       <>
//         {
//           // eslint-disable-next-line multiline-ternary
//           isFetchingNextPage ? (
//             <Stack alignItems={'center'} justifyContent={'center'} px={'30px'}>
//               <Spinner />
//             </Stack>
//           ) : (
//             <Box height="20px" width={'20px'}></Box>
//           )
//         }
//       </>
//     );
//   },
// );

// const ListVideoNew = () => {
//   const dispatch = useAppDispatch();
//   const navigator = useNavigation();

//   const { topicPicking } = useAppSelector(state => state.videoReducer);

//   const {
//     data: topicsData,
//     hasNextPage: hasNextPageTopics,
//     isFetchingNextPage: isFetchingNextPageTopics,
//     fetchNextPage: fetchNextPageTopics,
//   } = useGetInfiniteTopics({
//     page: 1,
//     limit: 5,
//     mediaType: 'video',
//   });
//   const {
//     data: videosData,
//     isLoading,
//     isError,
//     hasNextPage,
//     isFetchingNextPage,
//     fetchNextPage,
//   } = useGetInfinityVideos({
//     topicKeys: topicPicking !== 'All' ? [topicPicking] : [''],
//     page: 1,
//     limit: 10,
//   });

//   const handleLoadMore = () => {
//     if (hasNextPage) fetchNextPage();
//   };
//   const handleLoadMoreTopics = () => {
//     if (hasNextPageTopics) fetchNextPageTopics();
//   };

//   const handlePickingTopic = (key: string) => {
//     dispatch(setTopicsPicking(key));
//   };

//   const arrVideos = videosData?.pages?.flatMap(item => item?.data?.items) || [];
//   const arrTopics = topicsData?.pages?.flatMap(item => item?.data?.items) || [];

//   return (
//     <VStack bgColor={'white'} safeAreaY={4} space={4}>
//       <HStack
//         safeAreaX={4}
//         justifyContent={'space-between'}
//         alignItems={'center'}>
//         <Heading
//           fontStyle={'normal'}
//           fontSize={'18px'}
//           fontWeight={600}
//           color={'#000000'}>
//           Danh sách video
//         </Heading>
//         <TouchableOpacity
//           onPress={() =>
//             // @ts-ignore
//             navigator.navigate(VIDEO_ROUTE.VIDEO_LIST as never, {
//               item: {
//                 key: topicPicking !== 'All' ? topicPicking : '',
//                 name: topicPicking,
//               },
//             })
//           }>
//           <Text
//             fontStyle={'normal'}
//             fontSize={'12px'}
//             fontWeight={400}
//             color={'#216BCD'}>
//             Xem tất cả 
//           </Text>
//         </TouchableOpacity>
//       </HStack>
//       <FlatList
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         data={arrTopics}
//         renderItem={({ item }) => (
//           <Button
//             height={'27px'}
//             lineHeight={'27px'}
//             px={2}
//             marginLeft={4}
//             variant="outline"
//             borderColor="#3D9BE0"
//             bgColor={item?.key === topicPicking ? 'primary.11' : 'neural.1'}
//             onPress={() => {
//               handlePickingTopic(item?.key);
//             }}
//             _pressed={{
//               bgColor: '#3D9BE033',
//             }}
//             _text={{
//               color: item?.key === topicPicking ? 'neural.1' : 'primary.11',
//               fontStyle: 'normal',
//               height: '20px',
//               fontWeight: 400,
//             }}>
//             {item?.description}
//           </Button>
//         )}
//         onEndReached={handleLoadMoreTopics}
//         onEndReachedThreshold={0.1}
//         ListFooterComponent={
//           <FooterLoadMoreTopic isFetchingNextPage={isFetchingNextPageTopics} />
//         }
//       />
//       <Stack
//         minHeight={
//           videosData?.pages?.length === 0 && !isLoading && !isError
//             ? '100px'
//             : '250px'
//         }
//         alignItems={'center'}>
//         {isLoading || isError ? <ListVideoSkeleton /> : <></>}
//         {videosData && arrVideos?.length > 0 && !isLoading && !isError && (
//           <FlatList
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             data={arrVideos}
//             renderItem={({ item }) => {
//               return <VideoItem item={item} />;
//             }}
//             onEndReached={handleLoadMore}
//             onEndReachedThreshold={0.1}
//             ListFooterComponent={
//               <FooterLoadMore isFetchingNextPage={isFetchingNextPage} />
//             }
//           />
//         )}
//         {arrVideos?.length === 0 && !isLoading && !isError && (
//           <Center>
//             <Alert w="90%" maxW="400" status="info" colorScheme="info">
//               <VStack space={2} flexShrink={1} w="100%">
//                 <HStack
//                   flexShrink={1}
//                   space={2}
//                   alignItems="center"
//                   justifyContent="space-between">
//                   <HStack flexShrink={1} space={2} alignItems="center">
//                     <Alert.Icon />
//                     <Text
//                       fontSize="md"
//                       fontWeight="medium"
//                       color="coolGray.800">
//                       Topic hiện chưa có video để học tập
//                     </Text>
//                   </HStack>
//                 </HStack>
//               </VStack>
//             </Alert>
//           </Center>
//         )}
//       </Stack>
//     </VStack>
//   );
// };

// export default ListVideoNew;
