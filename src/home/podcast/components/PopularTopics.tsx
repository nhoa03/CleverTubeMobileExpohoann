// import { PopularTopics } from '@/common/components/trendingTopic/index';
// import { imagePodcast } from '@/common/constants/imagePath';
// import {
//   LIST_TOPIC_ROUTE,
//   PODCAST_LIST_WITH_TOPIC,
// } from '@/common/constants/route.constants';
// import { useAppDispatch } from '@/common/hooks/useAppDispatch';
// import { useGetPopularTopics } from '@/common/hooks/useGetPopularTopics';
// import { Box, Flex, HStack, Heading, Text } from 'native-base';
// import React from 'react';
// import { PodcastListProps } from '../interfaces';
// import { receiveTopicKeySelected } from '../reducer/podcastList';
// // import { useTranslation } from 'react-i18next';
// import { TouchableOpacity } from 'react-native';

// const PopularTopicsPodcast = ({ navigation }: PodcastListProps) => {
//   const dispatch = useAppDispatch();
//   const { data } = useGetPopularTopics({ mediaType: 'audio', amount: 4 });
//   const popularTopics = data?.data || [];

//   return (
//     <Box>
//       <Box margin="16px">
//         <HStack justifyContent={'space-between'} alignItems={'center'}>
//           <Heading
//             mb={4}
//             fontSize={'18px'}
//             fontStyle={'normal'}
//             fontWeight={500}
//             lineHeight={'25px'}
//             color={'#222B45'}>
//             Chủ đề phổ biến
//           </Heading>
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate(LIST_TOPIC_ROUTE as never, { type: 'audio' })
//             }>
//             <Text
//               fontStyle={'normal'}
//               fontSize={'12px'}
//               fontWeight={400}
//               color={'#216BCD'}>
//               Xem tất cả 
//             </Text>
//           </TouchableOpacity>
//         </HStack>
//         <Flex
//           direction="row"
//           flexWrap="wrap"
//           justifyContent="space-between"
//           bgColor="#FFFFFF">
//           {popularTopics?.map((topic: any, index: number) => (
//             <PopularTopics
//               onPress={() => {
//                 dispatch(
//                   receiveTopicKeySelected(topic?.key || 'Untitled Topic'),
//                 );
//                 navigation.navigate(PODCAST_LIST_WITH_TOPIC, {
//                   item: {
//                     name: topic?.topicTranslations[0]?.name,
//                     key: topic?.key,
//                   },
//                 });
//               }}
//               mb={4}
//               contentTopic={topic?.topicTranslations[0]?.name}
//               imageSrc={topic?.image || imagePodcast.TOPIC_BG}
//             />
//           ))}
//         </Flex>
//       </Box>
//     </Box>
//   );
// };
// export default PopularTopicsPodcast;
