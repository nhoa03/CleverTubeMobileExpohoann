// import { useNavigation } from '@react-navigation/native';
// import {
//   Box,
//   HStack,
//   Heading,
//   Icon,
//   Image,
//   ScrollView,
//   Skeleton,
//   Stack,
//   Text,
//   VStack,
// } from 'native-base';
// import React from 'react';
// import { TouchableOpacity } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { useGetListPodcastFeature } from '../../hooks/useGetListPodcastFeature';

// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '@/common/navigators/RootNavigator';

// type NavigationProp = StackNavigationProp<RootStackParamList, 'PODCAST_DETAIL'>;

// const navigation = useNavigation<NavigationProp>();


// const PodcastListFeature = () => {
//   const navigate = useNavigation();
//   const width = 200;
//   const RATIO = 3 / 4;
//   const defaultParam = {
//     page: 1,
//     limit: 8,
//     isFeatured: true,
//   };

//   const { data, isLoading } = useGetListPodcastFeature(defaultParam);

//   const dataPodcastFeature = data?.data?.items || [];

//   return (
//     <VStack space={2} bgColor={'white'}>
//       <VStack alignItems={'flex-start'} space={5}>
//         <Heading
//           ml={4}
//           fontStyle={'normal'}
//           fontSize={'18px'}
//           fontWeight={500}
//           lineHeight={'25px'}
//           color={'#000000'}>
//           Podcast phổ biến
//         </Heading>

//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {isLoading &&
//             Array.from(Array(5)).map((_, index) => (
//               <VStack p={5} space={5} key={index}>
//                 <Skeleton
//                   width={width * 0.8}
//                   height={width * 0.8}
//                   rounded={'8px'}
//                 />
//                 <VStack space={2}>
//                   <Skeleton w="80px" height={'10px'} />
//                   <Skeleton w="60px" height={'10px'} />
//                 </VStack>
//               </VStack>
//             ))}
//           {dataPodcastFeature?.map((item: any, index: number) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => {
//                 navigation.navigate('PODCAST_DETAIL', { id: item.id });
//               }}>
//               <Stack
//                 maxWidth={width}
//                 width={width / RATIO}
//                 space={'12px'}
//                 maxHeight={'200px'}>
//                 <Box width={'100%'} px={'16px'} maxHeight={'106px'}>
//                   <Box
//                     width={'100%'}
//                     overflow={'hidden'}
//                     borderRadius={8}
//                     position={'relative'}>
//                     <Image
//                       alt="feature-image"
//                       width={'100%'}
//                       height={'100%'}
//                       resizeMode="cover"
//                       source={{
//                         uri: item?.image?.url,
//                       }}
//                       key={`${item?.image?.url} + ${item?.id}`}
//                     />
//                     {item?.isUnlocked && (
//                       <Icon
//                         as={AntDesign}
//                         name="checkcircle"
//                         size={3}
//                         top={2}
//                         right={2}
//                         position={'absolute'}
//                         color="green.300"
//                       />
//                     )}
//                   </Box>
//                 </Box>
//                 <HStack
//                   width={'100%'}
//                   px={'16px'}
//                   space={'16px'}
//                   alignItems={'center'}
//                   justifyContent={'space-between'}>
//                   <Stack width={'90%'}>
//                     <Text
//                       color={'#000'}
//                       fontWeight={600}
//                       isTruncated
//                       numberOfLines={2}>
//                       {item?.title}
//                     </Text>
//                     {/* <Text color={'#999999'} isTruncated>
//                       {item?.desc}
//                     </Text> */}
//                   </Stack>
//                 </HStack>
//               </Stack>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//         {/* <Text
//             fontStyle={'normal'}
//             fontSize={'12px'}
//             fontWeight={400}
//             color={'#216BCD'}>
//             {t('viewAll')}
//           </Text> */}
//       </VStack>
//     </VStack>
//   );
// };

// export default PodcastListFeature;
