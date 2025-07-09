// import { VIDEO_ROUTE } from '@/common/constants/route.constants';
// import { useNavigation } from '@react-navigation/native';
// import { Box, Flex, HStack, Heading, Image, Text, VStack } from 'native-base';
// import React from 'react';
// import { Dimensions, TouchableOpacity } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import { formatTimePlayer } from '@/common/lib/common.lib';
// import { minHeightOfLargeDevices } from '@/common/constants/common.constants';
// import PopularVideoSkeleton from './skeleton/PopularVideoSkeleton';
// // import { useGetAllVideosV2 } from '@/common/hooks/useVideos';

// const heightOfDevice = Dimensions.get('window').height;

// const PupolarVideo = () => {
//   const navigation = useNavigation();
//   const {
//     data: videosFeature,
//     isError,
//     isLoading,
//   } = useGetAllVideosV2({
//     page: 1,
//     limit: 5,
//     isFeatured: true,
//     sortBy: '-created-at',
//   });

//   if (isLoading || isError) return <PopularVideoSkeleton />;

//   return (
//     <VStack bgColor={'white'} safeArea={4} space={3}>
//       <Heading
//         fontStyle={'normal'}
//         fontSize={'18px'}
//         fontWeight={500}
//         lineHeight={'25px'}
//         color={'#000000'}>
//         Video nổi bật
//       </Heading>
//       <VStack space={3}>
//         {videosFeature?.data?.items?.map((item, index) => {
//           if (index === 0) {
//             return (
//               <TouchableOpacity
//                 key={`key main video: ${item?.id} + ${index}`}
//                 onPress={() => {
//                   navigation.navigate(VIDEO_ROUTE.VIDEO_PLAYING, {
//                     id: item?.id,
//                   });
//                 }}>
//                 <Image
//                   source={{ uri: item?.thumbnails?.maxres?.url }}
//                   style={{
//                     width: '100%',
//                     height:
//                       heightOfDevice > minHeightOfLargeDevices ? 350 : 160,
//                     marginBottom: 10,
//                   }}
//                   borderTopRadius={'12px'}
//                   resizeMode={'cover'}
//                   alt="image"
//                 />
//                 <HStack
//                   width={'100%'}
//                   justifyContent={'space-between'}
//                   alignItems={'center'}>
//                   <Flex direction="row" alignItems="center">
//                     <AntDesign name="playcircleo" size={40} color={'#0E3C9E'} />
//                     <VStack width="210px" ml={'10px'}>
//                       <Text
//                         fontStyle={'normal'}
//                         fontSize={'14px'}
//                         fontWeight={400}
//                         lineHeight={'19px'}
//                         color={'#1A1A1A'}>
//                         {item?.name}
//                       </Text>
//                       <Text
//                         fontStyle={'normal'}
//                         fontSize={'12px'}
//                         fontWeight={400}
//                         // textAlign={'center'}
//                         lineHeight={'16px'}
//                         numberOfLines={1.5}
//                         color={'#999999'}>
//                         {item?.desc}
//                       </Text>
//                     </VStack>
//                   </Flex>
//                   <HStack space={0.5} alignItems={'center'}>
//                     <MaterialCommunityIcons
//                       name="clock-time-three-outline"
//                       size={15}
//                       color={'#3D9BE0'}
//                     />
//                     <Text
//                       fontStyle={'normal'}
//                       fontSize={'12px'}
//                       fontWeight={400}
//                       color={'#666666'}>
//                       {formatTimePlayer(item?.length)}
//                     </Text>
//                   </HStack>
//                 </HStack>
//               </TouchableOpacity>
//             );
//           }
//         })}
//       </VStack>
//       <HStack justifyContent={'space-between'} alignItems={'center'}>
//         {videosFeature?.data?.items?.map((item, index) => {
//           if (index === 1 || index === 2) {
//             return (
//               <Box
//                 key={`key popular ${index}`}
//                 width={'47%'}
//                 borderRadius={'12px'}
//                 height={'100%'}
//                 backgroundColor={'rgba(90, 200, 250, 0.1)'}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     navigation.navigate(
//                       VIDEO_ROUTE.VIDEO_PLAYING as never,
//                       {
//                         id: item.id,
//                       } as never,
//                     );
//                   }}>
//                   <VStack space={2}>
//                     <Image
//                       source={{ uri: item?.thumbnails?.maxres?.url }}
//                       style={{
//                         width: '100%',
//                         height:
//                           heightOfDevice > minHeightOfLargeDevices ? 206 : 126,
//                         resizeMode: 'cover',
//                         borderTopLeftRadius: 12,
//                         borderTopRightRadius: 12,
//                       }}
//                       alt="thumbnail"
//                     />
//                     <VStack safeAreaX={2} safeAreaBottom={3} space={2}>
//                       <Text
//                         fontStyle={'normal'}
//                         fontSize={'12px'}
//                         fontWeight={400}
//                         textAlign={'center'}
//                         lineHeight={'16px'}
//                         numberOfLines={4}
//                         color={'#181818'}>
//                         {item.name}
//                       </Text>
//                     </VStack>
//                   </VStack>
//                 </TouchableOpacity>
//               </Box>
//             );
//           }
//         })}
//       </HStack>
//     </VStack>
//   );
// };

// export default PupolarVideo;
