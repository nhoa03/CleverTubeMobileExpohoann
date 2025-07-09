import { Box, FlatList, HStack, Image, Stack, Text } from 'native-base';
import React from 'react';
import HeaderSection from './common/HeaderSection';
import { ILatestVideoProps } from '../common/interface';
import {
  BOTTOM_TAB_VIDEO_LIST,
  TAB_BOTTOM,
  VIDEO_ROUTE,
} from '@clvtube/common/constants/route.constants';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const LatestVideo = ({ dataLatestSection }: ILatestVideoProps) => {
  const width = 254;
  const RATIO_IMAGE = 4 / 3;
  const navigation = useNavigation();
  return (
    <Stack space={'20px'} width={'100%'}>
      <HeaderSection
        handleNavigate={() => {
          // @ts-ignore
          navigation.navigate(TAB_BOTTOM, {
            screen: BOTTOM_TAB_VIDEO_LIST,
            params: { screen: VIDEO_ROUTE.INDEX },
          });
        }}
        title={dataLatestSection?.title}
      />
      <HStack width={'100%'} overflowY={'auto'}>
        {dataLatestSection?.data && (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dataLatestSection?.data}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(
                      VIDEO_ROUTE.VIDEO_PLAYING as never,
                      {
                        id: item.id,
                      } as never,
                    )
                  }>
                  <Stack maxWidth={270} space={'12px'}>
                    <Box px={'16px'}>
                      <Box
                        width={width}
                        height={width / RATIO_IMAGE}
                        overflow={'hidden'}
                        borderRadius={8}>
                        <Image
                          alt="feature-image"
                          width={'100%'}
                          height={'100%'}
                          resizeMode="cover"
                          source={{
                            uri: item?.thumbnails?.high?.url,
                          }}
                          key={`${item?.thumbnails?.high?.url} + ${item?.id}`}
                        />
                      </Box>
                    </Box>
                    <HStack
                      width={'100%'}
                      px={'16px'}
                      space={'16px'}
                      alignItems={'center'}
                      justifyContent={'space-between'}>
                      <Stack width={'85%'}>
                        <Text
                          color={'#000'}
                          fontWeight={600}
                          isTruncated
                          maxWidth={width}>
                          {item?.name}
                        </Text>
                        <Text color={'#999999'} isTruncated maxWidth={width}>
                          {item?.desc}
                        </Text>
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
  );
};

export default React.memo(LatestVideo);
