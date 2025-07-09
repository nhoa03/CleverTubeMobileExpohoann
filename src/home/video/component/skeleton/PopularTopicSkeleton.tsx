import { HStack, Skeleton, Stack } from 'native-base';
import React from 'react';

const PopularTopicSkeleton = () => {
  return (
    <Stack space={3} px={'16px'} safeArea={4}>
      <Skeleton width={'40%'} borderRadius={'12px'} height={'20px'} />
      <HStack space={3} alignItems={'center'} justifyContent={'space-between'}>
        <Skeleton width={'48%'} height={'80px'} borderRadius={'12px'} />
        <Skeleton width={'48%'} height={'80px'} borderRadius={'12px'} />
      </HStack>
      <HStack space={3} alignItems={'center'} justifyContent={'space-between'}>
        <Skeleton width={'48%'} height={'80px'} borderRadius={'12px'} />
        <Skeleton width={'48%'} height={'80px'} borderRadius={'12px'} />
      </HStack>
    </Stack>
  );
};

export default PopularTopicSkeleton;
