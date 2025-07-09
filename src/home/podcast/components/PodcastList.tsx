// /* eslint-disable multiline-ternary */
// import { useAppDispatch } from '@/common/hooks/useAppDispatch';
// import { useAppSelector } from '@/common/hooks/useAppSelector';
// import {
//   Alert,
//   Box,
//   Button,
//   Center,
//   FlatList,
//   HStack,
//   Heading,
//   Icon,
//   Image,
//   Skeleton,
//   Spinner,
//   Stack,
//   Text,
//   VStack,
// } from 'native-base';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import React, { useEffect } from 'react';
// import { TouchableOpacity } from 'react-native';
// import { PodcastListProps } from '../interfaces';
// import { useTranslation } from 'react-i18next';
// import {
//   PODCAST_DETAIL,
//   PODCAST_LIST_WITH_TOPIC,
// } from '@/common/constants/route.constants';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getRecentVideoAndPodcast } from '@/home/index/redux/homePage';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { useNavigation } from '@react-navigation/native';
// import { formatTimePlayer } from '../../../common/lib/common.lib';
// import { useGetInfiniteTopics } from '@/common/hooks/useGetInfiniteTopic';
// import { useGetInfinitePodcast } from '@/common/hooks/useGetInfinitePodcast';
// import FooterLoadMore from '@/common/components/FooterLoadMore';
// import { setTopicsPickingPodcast } from '@/podcast-list-with-topic/podcastListWithTopic.slice';

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

// export const PodcastList = ({ navigation }: PodcastListProps) => {
//   const { t } = useTranslation();
//   const navigate = useNavigation();
//   const podcastTopics = useAppSelector(
//     state => state.podcastListWithTopicReducer.topicPicking,
//   );
//   const dispatch = useAppDispatch();
//   const {
//     data: topicsData,
//     hasNextPage: hasNextPageTopics,
//     isFetchingNextPage: isFetchingNextPageTopics,
//     fetchNextPage: fetchNextPageTopics,
//   } = useGetInfiniteTopics({
//     page: 1,
//     limit: 5,
//     mediaType: 'audio',
//   });
//   const {
//     data: podcastData,
//     isLoading: isLoadingPodcast,
//     isError: isErrorPodcast,
//     isFetchingNextPage,
//     fetchNextPage,
//     hasNextPage,
//   } = useGetInfinitePodcast({
//     topicKey: podcastTopics !== 'All' ? [podcastTopics] : [''],
//     page: 1,
//     limit: 5,
//   });

//   const handlePickingTopic = (key: string) => {
//     dispatch(setTopicsPickingPodcast(key));
//   };

//   const handleLoadMore = () => {
//     if (hasNextPage) fetchNextPage();
//   };

//   const handleLoadMoreTopics = () => {
//     if (hasNextPageTopics) fetchNextPageTopics();
//   };

//   const arrPodcast =
//     podcastData?.pages?.flatMap(item => item?.data?.items) || [];
//   const arrTopics = topicsData?.pages?.flatMap(item => item?.data?.items) || [];

//   useEffect(() => {
//     return () => {
//       dispatch(setTopicsPickingPodcast('All'));
//     };
//   }, []);

//   return (
//     <VStack space={2} safeAreaY={2} bgColor={'white'}>
//       <VStack bgColor={'white'} safeAreaY={2} space={4}>
//         <HStack
//           safeAreaX={4}
//           justifyContent={'space-between'}
//           alignItems={'center'}>
//           <Heading
//             fontStyle={'normal'}
//             fontSize={'18px'}
//             fontWeight={600}
//             color={'#000000'}>
//             Podcast
//           </Heading>
//           <TouchableOpacity
//             onPress={() => {
//               // @ts-ignore
//               navigate.navigate(PODCAST_LIST_WITH_TOPIC, {
//                 item: {
//                   key: podcastTopics !== 'All' ? podcastTopics : '',
//                   name: podcastTopics,
//                 },
//               });
//             }}>
//             <Text
//               fontStyle={'normal'}
//               fontSize={'12px'}
//               fontWeight={400}
//               color={'#216BCD'}>
//               {t('viewAll')}
//             </Text>
//           </TouchableOpacity>
//         </HStack>
//         <FlatList
//           horizontal={true}
//           nestedScrollEnabled={true}
//           showsHorizontalScrollIndicator={false}
//           data={arrTopics}
//           renderItem={({ item }) => (
//             <Button
//               height={'27px'}
//               lineHeight={'27px'}
//               px={2}
//               marginLeft={4}
//               variant="outline"
//               borderColor="#3D9BE0"
//               bgColor={item?.key === podcastTopics ? 'primary.11' : 'neural.1'}
//               onPress={() => handlePickingTopic(item?.key)}
//               _pressed={{
//                 bgColor: '#3D9BE033',
//               }}
//               _text={{
//                 color: item?.key === podcastTopics ? 'neural.1' : 'primary.11',
//                 fontStyle: 'normal',
//                 height: '20px',
//                 fontWeight: 400,
//               }}>
//               {item?.description}
//             </Button>
//           )}
//           onEndReached={handleLoadMoreTopics}
//           onEndReachedThreshold={0.1}
//           ListFooterComponent={
//             <FooterLoadMoreTopic
//               isFetchingNextPage={isFetchingNextPageTopics}
//             />
//           }
//         />
//       </VStack>
//       <VStack safeAreaX={4} space={5}>
//         {isLoadingPodcast || isErrorPodcast ? (
//           Array.from(Array(5)).map((_, index) => (
//             <>
//               <HStack
//                 key={index}
//                 p={3}
//                 w="full"
//                 space={3}
//                 borderColor="#E6E6E6"
//                 borderWidth={'1px'}
//                 alignItems={'center'}
//                 borderRadius={'12px'}>
//                 <Skeleton width={'35%'} h="120px" rounded={'5px'} />
//                 <VStack space={3} width="63%">
//                   <Skeleton width="50%" h="15px" />
//                   <Skeleton width="30%" h="15px" />
//                   <Skeleton width="60%" h="15px" />
//                 </VStack>
//               </HStack>
//             </>
//           ))
//         ) : (
//           <></>
//         )}
//         {arrPodcast?.length === 0 && !isLoadingPodcast && !isErrorPodcast && (
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
//                       Topic hiện chưa có podcast để học tập
//                     </Text>
//                   </HStack>
//                 </HStack>
//               </VStack>
//             </Alert>
//           </Center>
//         )}
//         {podcastData &&
//           arrPodcast?.length > 0 &&
//           !isLoadingPodcast &&
//           !isErrorPodcast && (
//             <FlatList
//               nestedScrollEnabled={true}
//               maxHeight={'500px'}
//               showsVerticalScrollIndicator={false}
//               data={arrPodcast}
//               renderItem={({ item, index }) => {
//                 const audio = {
//                   item,
//                   type: 'audio',
//                 };
//                 return (
//                   <TouchableOpacity
//                     key={index}
//                     onPress={() => {
//                       navigation.navigate(PODCAST_DETAIL, { id: item.id });
//                       dispatch(getRecentVideoAndPodcast(audio));
//                     }}>
//                     <Box
//                       borderColor="#E6E6E6"
//                       borderWidth={'1px'}
//                       borderRadius={'12px'}
//                       mt={3}
//                       p={3}>
//                       <HStack
//                         space={4}
//                         alignItems={'center'}
//                         position={'relative'}>
//                         <Image
//                           source={{ uri: item?.image?.url }}
//                           width={'101px'}
//                           height={'100px'}
//                           borderRadius={'10px'}
//                           alt="image"
//                         />
//                         <VStack space={1.5} width={'60%'}>
//                           <Heading
//                             fontStyle={'normal'}
//                             fontSize={'16px'}
//                             fontWeight={400}
//                             lineHeight={'22px'}
//                             color={'#161719'}>
//                             {item.title}
//                           </Heading>
//                           <Text
//                             fontStyle={'normal'}
//                             fontSize={'14px'}
//                             fontWeight={400}
//                             lineHeight={'19px'}
//                             noOfLines={2}
//                             color={'#999999'}>
//                             {item.desc}
//                           </Text>
//                           <HStack
//                             justifyContent={'space-between'}
//                             alignItems={'center'}>
//                             <Text
//                               fontStyle={'normal'}
//                               fontSize={'10px'}
//                               fontWeight={400}
//                               color={'#999999'}>
//                               {item?.level?.translations?.length
//                                 ? item?.level?.translations[0]?.name
//                                 : item?.level?.key}
//                             </Text>
//                             <HStack space={0.5} alignItems={'center'}>
//                               <MaterialCommunityIcons
//                                 name="clock-time-three-outline"
//                                 size={15}
//                                 color={'#3D9BE0'}
//                               />
//                               <Text
//                                 fontStyle={'normal'}
//                                 fontSize={'10px'}
//                                 fontWeight={400}
//                                 color={'#666666'}>
//                                 {formatTimePlayer(item?.duration)}
//                               </Text>
//                             </HStack>
//                           </HStack>
//                         </VStack>
//                         {item?.isUnlocked && (
//                           <Icon
//                             as={AntDesign}
//                             name="checkcircle"
//                             size={3}
//                             top={1}
//                             right={1}
//                             position={'absolute'}
//                             color="green.300"
//                           />
//                         )}
//                       </HStack>
//                     </Box>
//                   </TouchableOpacity>
//                 );
//               }}
//               onEndReached={handleLoadMore}
//               onEndReachedThreshold={0.1}
//               ListFooterComponent={
//                 <FooterLoadMore isFetchingNextPage={isFetchingNextPage} />
//               }
//             />
//             // eslint-disable-next-line indent
//           )}
//       </VStack>
//     </VStack>
//   );
// };
