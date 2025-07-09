import { Box, HStack, ScrollView, Skeleton, Stack } from 'native-base';
import React from 'react';

const ListVideoSkeleton = () => {
  return (
    <Stack px={'16px'} space={3}>
      <Stack space={3} mt={3}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Skeleton width={'40%'} borderRadius={'12px'} height={'20px'} />
          <Skeleton width={'20%'} borderRadius={'12px'} height={'20px'} />
        </HStack>
        <HStack width={'100%'} overflowY={'auto'} mt={'4px'}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Array.from(Array(4), (e, i) => {
              return (
                <Stack
                  maxWidth={'254px'}
                  space={'12px'}
                  key={`key skeleton: ${i}`}>
                  <Box width={'100%'}>
                    <Box
                      width={186}
                      height={186 / (16 / 9)}
                      overflow={'hidden'}
                      borderRadius={8}>
                      <Skeleton
                        width={'100%'}
                        height={'100%'}
                        borderRadius={'8px'}
                      />
                    </Box>
                  </Box>
                  <HStack
                    width={'100%'}
                    px={'16px'}
                    space={'16px'}
                    alignItems={'center'}
                    justifyContent={'space-between'}>
                    <Stack width={'85%'} space={2}>
                      <Skeleton
                        width={'100%'}
                        height={'16px'}
                        borderRadius={'12px'}
                      />
                      <Skeleton
                        width={'100%'}
                        height={'14px'}
                        borderRadius={'12px'}
                      />
                    </Stack>
                  </HStack>
                </Stack>
              );
            })}
          </ScrollView>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default ListVideoSkeleton;
