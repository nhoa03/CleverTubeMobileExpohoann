import { Box, HStack, Image, Stack, Text } from 'native-base';
import React from 'react';
import HeaderSection from './common/HeaderSection';
import { IHorizontalSectionProps } from '../common/interface';
import { ICON_ASSETS } from '@clvtube/common/constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import {
  BOTTOM_TAB_PODCAST_LIST,
  PODCAST_DETAIL,
  TAB_BOTTOM,
} from '@clvtube/common/constants/route.constants';

const LatestPodcast = ({ dataSection }: IHorizontalSectionProps) => {
  const width = 131;
  const RATIO = 4 / 3;
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
      <Stack px={'16px'} width={'100%'} space="20px">
        {dataSection?.data?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate(
                  PODCAST_DETAIL as never,
                  { id: item.id } as never,
                );
              }}>
              <HStack
                padding={'12px'}
                width={'100%'}
                borderRadius={'12px'}
                borderColor={'#E9E7E2'}
                space={'40px'}
                borderWidth={'1px'}>
                <Box width={'30%'} height={'100%'}>
                  <Box
                    width={width}
                    height={width / RATIO}
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
                <HStack width={'70%'} px={'16px'} space={'16px'}>
                  <Stack width={'85%'} space={'8px'}>
                    <Text
                      color={'#000'}
                      fontWeight={600}
                      isTruncated
                      numberOfLines={3}>
                      {item?.title}
                    </Text>
                    <HStack alignItems={'center'} space={'8px'}>
                      <Image
                        alt="icon headphone"
                        source={ICON_ASSETS.HEADPHONE}
                      />
                      <Text color={'#216BCD'}>
                        {item?.level?.translations?.length > 0
                          ? item?.level?.translations[0]?.name
                          : item?.level?.key}
                      </Text>
                    </HStack>
                  </Stack>
                </HStack>
              </HStack>
            </TouchableOpacity>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default React.memo(LatestPodcast);
