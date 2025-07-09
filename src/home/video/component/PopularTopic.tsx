// import { PopularTopics } from '@/common/components/trendingTopic/index';
// import { imagePodcast } from '@/common/constants/imagePath';
// import { HStack, Heading, Text, VStack } from 'native-base';
// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import {
//   LIST_TOPIC_ROUTE,
//   VIDEO_ROUTE,
// } from '../../../common/constants/route.constants';
// import { useGetPopularTopics } from '@clvtube/common/hooks/useGetPopularTopics';
// import PopularTopicSkeleton from './skeleton/PopularTopicSkeleton';
// import { TouchableOpacity } from 'react-native';

// const PopularTopic = () => {
//   const navigation = useNavigation();
//   const {
//     data: dataPopularTopic,
//     isLoading,
//     isError,
//   } = useGetPopularTopics({ mediaType: 'video', amount: 4 });
//   if (isLoading || isError) return <PopularTopicSkeleton />;

//   return (
//     <VStack safeArea={4} space={3}>
//       <HStack justifyContent={'space-between'} alignItems={'center'}>
//         <Heading
//           fontStyle={'normal'}
//           fontSize={'18px'}
//           fontWeight={500}
//           lineHeight={'25px'}
//           color={'#000000'}>
//           Chủ đề phổ biến
//         </Heading>
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate(LIST_TOPIC_ROUTE as never, { type: 'video' })
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
//       <VStack flexWrap={'wrap'} space={4}>
//         <HStack justifyContent={'space-between'}>
//           {dataPopularTopic?.data?.map((item, index) => {
//             if (index === 0 || index === 1) {
//               return (
//                 <PopularTopics
//                   key={index}
//                   item={item}
//                   contentTopic={item?.topicTranslations[0]?.name}
//                   imageSrc={imagePodcast.TOPIC_BG}
//                   onPress={(item: any) => {
//                     navigation.navigate(
//                       VIDEO_ROUTE?.VIDEO_LIST as never,
//                       {
//                         item: {
//                           key: item?.key,
//                           name: item?.topicTranslations[0]?.name,
//                         },
//                       } as never,
//                     );
//                   }}
//                 />
//               );
//             }
//             return null;
//           })}
//         </HStack>
//         <HStack justifyContent={'space-between'}>
//           {dataPopularTopic?.data?.map((item, index) => {
//             if (index === 2 || index === 3) {
//               return (
//                 <PopularTopics
//                   key={index}
//                   item={item}
//                   contentTopic={item?.topicTranslations[0]?.name}
//                   imageSrc={imagePodcast.TOPIC_BG}
//                   onPress={(item: any) => {
//                     navigation.navigate(
//                       VIDEO_ROUTE.VIDEO_LIST as never,
//                       { item } as never,
//                     );
//                   }}
//                 />
//               );
//             }
//             return null;
//           })}
//         </HStack>
//       </VStack>
//     </VStack>
//   );
// };
// export default PopularTopic;
