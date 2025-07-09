import React from 'react';

import { HStack, Image, Text } from 'native-base';
import { ICON_ASSETS, imageLogo } from '@clvtube/common/constants/imagePath';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { AUTH, NOTIFICATION } from '@clvtube/common/constants/route.constants';

const HeaderContainer = () => {
  const navigator = useNavigation();
  const { isLoggedIn } = useAppSelector(state => state.authReducer);
  const handleNavigateNotification = () => {
    if (isLoggedIn) {
      navigator.navigate(NOTIFICATION as never);
    } else {
      navigator.navigate(AUTH as never);
    }
  };
  return (
    <HStack
      px={'16px'}
      pt={'12px'}
      alignItems={'center'}
      justifyContent={'space-between'}
      bgColor={'white'}>
      <HStack alignItems={'center'} space={2}>
        <Image
          source={imageLogo.LOGO_MINI}
          width={'32px'}
          height={'32px'}
          resizeMode={'contain'}
          alt={'image'}
        />
        <Text
          fontSize={'20px'}
          fontWeight={700}
          color={'#084FC7'}
          lineHeight={'42px'}>
          Clever
          <Text
            fontSize={'20px'}
            fontWeight={400}
            color={'#216BCD'}
            lineHeight={'42px'}>
            Tube
          </Text>
        </Text>
      </HStack>
      {/* <TouchableOpacity onPress={handleNavigateNotification}>
        <Image source={ICON_ASSETS.NOTIFICATION} />
      </TouchableOpacity> */}
    </HStack>
  );
};

export default HeaderContainer;
