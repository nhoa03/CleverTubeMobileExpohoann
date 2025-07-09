import { Box, FlatList, HStack, Image, Stack, Text } from 'native-base';
import React from 'react';
import HeaderSection from './common/HeaderSection';
import { Dimensions, TouchableOpacity } from 'react-native';
import { ISectionVideo } from '../common/interface';
import {
  BOTTOM_TAB_VIDEO_LIST,
  TAB_BOTTOM,
  VIDEO_ROUTE,
} from '@clvtube/common/constants/route.constants';
import { useNavigation } from '@react-navigation/native';

const FeatureVideoContainer = ({ data }: { data: ISectionVideo }) => {
  const width = Dimensions.get('window').width - 32;
  const RATIO_BANNER = 343 / 178;
  const navigation = useNavigation();
  return (
    <Stack space={'20px'} width={'100%'}>
      <HeaderSection
        handleNavigate={() => {
          // @ts-ignore
          navigation.navigate(TAB_BOTTOM as never, {
            screen: BOTTOM_TAB_VIDEO_LIST,
            params: { screen: VIDEO_ROUTE.INDEX },
          });
        }}
        title={data?.title}
      />
      <Stack width={'100%'} space={'12px'}>
        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={() =>
            navigation.navigate(
              VIDEO_ROUTE.VIDEO_PLAYING as never,
              {
                id: data?.data[0]?.id,
              } as never,
            )
          }>
          <Stack width={'100%'} space={'12px'}>
            <Box width={'100%'} px={'16px'}>
              <Box
                width={width}
                height={width / RATIO_BANNER}
                overflow={'hidden'}
                borderTopLeftRadius={8}
                borderTopRightRadius={8}>
                <Image
                  alt="feature-image"
                  width={'100%'}
                  height={'100%'}
                  resizeMode="cover"
                  source={{
                    uri: data?.data[0]?.thumbnails?.high?.url,
                  }}
                  key={data?.data[0]?.thumbnails?.high?.url}
                />
              </Box>
            </Box>
            <HStack
              width={'100%'}
              px={'16px'}
              space={'16px'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <Stack width={'100%'}>
                <Text
                  color={'#000'}
                  fontWeight={600}
                  isTruncated
                  fontSize={'16px'}>
                  {data?.data[0]?.name}
                </Text>
                <Text
                  color={'#999999'}
                  isTruncated
                  fontSize={'12px'}
                  width={'80%'}>
                  {data?.data[0]?.desc}
                </Text>
              </Stack>
            </HStack>
          </Stack>
        </TouchableOpacity>
        {data?.data?.length >= 1 && (
          <HStack width={'100%'} overflowY={'auto'} mt={'4px'}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data?.data?.filter((item, index) => index > 0)}
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
                    <Stack width={'254px'} maxWidth={'254px'} space={'12px'}>
                      <Box width={'100%'} px={'16px'}>
                        <Box
                          width={240}
                          height={240 / (4 / 3)}
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
                            fontSize={'16px'}>
                            {item?.name}
                          </Text>
                          <Text color={'#999999'} isTruncated fontSize={'12px'}>
                            {item?.desc}
                          </Text>
                        </Stack>
                      </HStack>
                    </Stack>
                  </TouchableOpacity>
                );
              }}
            />
          </HStack>
        )}
      </Stack>
    </Stack>
  );
};

export default React.memo(FeatureVideoContainer);
