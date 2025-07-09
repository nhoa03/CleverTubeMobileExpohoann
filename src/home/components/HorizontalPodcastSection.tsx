import { Box, FlatList, HStack, Image, Stack, Text } from 'native-base';
import React from 'react';
import HeaderSection from './common/HeaderSection';
import { IHorizontalSectionProps } from '../common/interface';
import { useNavigation } from '@react-navigation/native';
import {
  BOTTOM_TAB_PODCAST_LIST,
  PODCAST_DETAIL,
  TAB_BOTTOM,
} from '@clvtube/common/constants/route.constants';
import { TouchableOpacity } from 'react-native';

const HorizontalPodcastSection = ({ dataSection }: IHorizontalSectionProps) => {
  const width = 200;
  const RATIO = 3 / 4;
  const navigation = useNavigation();
  return (
    <Stack space={'20px'} width={'100%'}>
      <HeaderSection
        handleNavigate={() => {
          navigation.navigate(
            TAB_BOTTOM as never,
            {
              screen: BOTTOM_TAB_PODCAST_LIST,
            } as never,
          );
        }}
        title={dataSection?.title}
      />
      <Stack width={'100%'}>
        <HStack width={'100%'} overflowY={'auto'}>
          {dataSection?.data && (
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={dataSection?.data}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(
                        PODCAST_DETAIL as never,
                        { id: item.id } as never,
                      );
                    }}>
                    <Stack
                      maxWidth={width}
                      width={width / RATIO}
                      space={'12px'}
                      maxHeight={'200px'}>
                      <Box width={'100%'} px={'16px'} maxHeight={'106px'}>
                        <Box
                          width={'100%'}
                          overflow={'hidden'}
                          borderRadius={8}>
                          <Image
                            alt="feature-image"
                            width={'100%'}
                            height={'100%'}
                            resizeMode="cover"
                            source={{
                              uri: item?.image?.url,
                            }}
                            key={`${item?.image?.url} + ${item?.id}`}
                          />
                        </Box>
                      </Box>
                      <HStack
                        width={'100%'}
                        px={'16px'}
                        space={'16px'}
                        alignItems={'center'}
                        justifyContent={'space-between'}>
                        <Stack width={'90%'}>
                          <Text
                            color={'#000'}
                            fontWeight={600}
                            isTruncated
                            numberOfLines={2}>
                            {item?.title}
                          </Text>
                          {/* <Text color={'#999999'} isTruncated numberOfLines={2}>
                            {item?.desc}
                          </Text> */}
                        </Stack>
                      </HStack>
                    </Stack>
                  </TouchableOpacity>
                );
              }}
            />
          )}
        </HStack>
      </Stack>
    </Stack>
  );
};

export default React.memo(HorizontalPodcastSection);
