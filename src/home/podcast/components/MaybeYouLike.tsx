import { Box, Button, Flex, HStack, Heading, Image, Text } from 'native-base';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { imagePodcast } from '@/common/constants/imagePath';

const itemData = [
  {
    id: 1,
    image: imagePodcast.MAYBE_YOU_LIKE,
    title: 'helloo world123',
  },
  {
    id: 2,
    image: imagePodcast.MAYBE_YOU_LIKE,
    title: 'lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    image: imagePodcast.MAYBE_YOU_LIKE,
    title: 'lorem ipsum',
  },
  {
    id: 4,
    image: imagePodcast.MAYBE_YOU_LIKE,
    title: '1234',
  },
  {
    id: 5,
    image: imagePodcast.MAYBE_YOU_LIKE,
    title: '1234',
  },
  {
    id: 6,
    image: imagePodcast.MAYBE_YOU_LIKE,
    title: '1234',
  },
];
const topicCarousel = [
  {
    id: 1,
    title: 'lorem ipsum',
  },
  {
    id: 2,
    title: 'lorem ipsum',
  },
  {
    id: 3,
    title: 'lorem ipsum',
  },
];

const Item = ({ backgroundColor, onPress, color, item }: any) => {
  return (
    <Button
      marginTop="20px"
      marginLeft="16px"
      borderColor="#3D9BE0"
      bgColor={backgroundColor}
      color={color}
      onPress={onPress}
      variant="outline">
      <Text color={color}>{item.title}</Text>
    </Button>
  );
};

export const MaybeYouLike = () => {
  const renderItem = ({ item }: any) => {
    const handlePress = () => console.log('pressed');
    return (
      <Item
        color="#FFFFFF"
        backgroundColor="#3D9BE0"
        onPress={handlePress}
        item={item}
      />
    );
  };
  const dataWithOddId = itemData.filter(item => item.id % 2 === 1);
  const dataWithEvenId = itemData.filter(item => item.id % 2 === 0);
  return (
    <Box bgColor="#FFFFFF" marginTop="16px">
      <Box margin="16px">
        <HStack
          alignItems="center"
          justifyContent="space-between"
          marginTop="12px">
          <Heading color="text.100">Có thể bạn thích</Heading>
          <Text
            style={{ color: '#216BCD' }}
            onPress={() => console.log('See All')}>
            Xem tất cả 
          </Text>
        </HStack>
        <Box margin="auto">
          <FlatList
            data={topicCarousel}
            renderItem={renderItem}
            horizontal={true}
          />
          <Flex
            direction="row"
            // width="360px"
            marginTop="20px"
            justifyContent="space-between">
            <Box>
              {dataWithOddId.map(item => {
                return (
                  <TouchableOpacity
                    key={item?.id}
                    onPress={() => console.log('hello')}>
                    <Box height="195px" width="162px" textAlign={'center'}>
                      <Image source={item.image} alt="image" />
                      <Box bgColor="#5AC8FA1A" padding="10px">
                        <Text color={'text.100'} fontWeight={400}>
                          {item.title}
                        </Text>
                      </Box>
                    </Box>
                  </TouchableOpacity>
                );
              })}
            </Box>
            <Box>
              {dataWithEvenId.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => console.log('hello')}
                    key={item.id}>
                    <Box height="195px" width="162px">
                      <Image source={item.image} alt="image" />
                      <Box bgColor="#5AC8FA1A" padding="10px">
                        <Text color={'text.100'} fontWeight={400}>
                          {item.title}
                        </Text>
                      </Box>
                    </Box>
                  </TouchableOpacity>
                );
              })}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
