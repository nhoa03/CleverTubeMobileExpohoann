import { HStack, Skeleton, Stack } from 'native-base';
import React from 'react';

const PopularVideoSkeleton = () => {
  return (
    <Stack safeAreaTop={4} px={'16px'} space={3}>
      <Stack space={3}>
        <Skeleton width={'40%'} borderRadius={'12px'} height={'20px'} />
        <Stack space={2}>
          <Skeleton width={'100%'} height={'200px'} borderRadius={'12px'} />
          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <Skeleton
              width={'50px'}
              height={'50px'}
              borderRadius={'100px'}
              ml={'16px'}
            />
            <Stack width={'70%'} space={3}>
              <Skeleton width={'100%'} height={'16px'} borderRadius={'12px'} />
              <Skeleton width={'100%'} height={'16px'} borderRadius={'12px'} />
            </Stack>
          </HStack>
        </Stack>
      </Stack>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Stack width={'48%'} space={3}>
          <Skeleton width={'100%'} height={'150px'} borderRadius={'12px'} />
          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <Stack width={'100%'} space={1}>
              <Skeleton width={'100%'} height={'16px'} borderRadius={'12px'} />
              <Skeleton width={'100%'} height={'16px'} borderRadius={'12px'} />
            </Stack>
          </HStack>
        </Stack>
        <Stack width={'48%'} space={3}>
          <Skeleton width={'100%'} height={'150px'} borderRadius={'12px'} />
          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <Stack width={'100%'} space={1}>
              <Skeleton width={'100%'} height={'16px'} borderRadius={'12px'} />
              <Skeleton width={'100%'} height={'16px'} borderRadius={'12px'} />
            </Stack>
          </HStack>
        </Stack>
      </HStack>
    </Stack>
  );
};

export default PopularVideoSkeleton;
