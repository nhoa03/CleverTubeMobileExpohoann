import { HStack, Skeleton, Stack } from 'native-base';
import React from 'react';

const ServiceSkeleton = () => {
  return (
    <Stack
      px={'16px'}
      mt={'8px'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}>
      <HStack
        alignItems={'center'}
        justifyContent={'space-evenly'}
        flexWrap={'nowrap'}
        width={'100%'}>
        {Array.from(Array(5), (e, i) => {
          return (
            <Stack
              key={i}
              justifyContent={'center'}
              alignItems={'center'}
              width={'76px'}
              height={'76px'}
              space={4}>
              <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'200px'}
                width={'60px'}
                height={'60px'}>
                <Skeleton borderRadius={100} width={'100%'} height={'100%'} />
              </Stack>
              <Skeleton width={'70%'} height={'14px'} borderRadius={'12px'} />
            </Stack>
          );
        })}
      </HStack>
    </Stack>
  );
};

export default ServiceSkeleton;
