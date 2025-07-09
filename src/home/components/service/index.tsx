import { FlatList, Stack } from 'native-base';
import React from 'react';
import ServiceItem from './components/ServiceItem';
import { ISectionService } from '@clvtube/home/common/interface';

const ServiceContainer = ({ data }: { data: ISectionService }) => {
  return (
    <Stack
      mt={'8px'}
      ml={'16px'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data?.data}
        renderItem={({ item, index }) => {
          return (
            <ServiceItem key={index} icon={item.icon} title={item.name} link={item?.link} />
          );
        }}
      />
    </Stack>
  );
};

export default React.memo(ServiceContainer);
