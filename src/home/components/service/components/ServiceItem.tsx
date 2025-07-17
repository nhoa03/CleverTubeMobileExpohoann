import ModalWarningLogin from '@/common/components/modal/ModalWarningLogin';
import {
  GAME_LIST_SCREEN,
  SAVED_WORD_LIST,
} from '@/common/constants/route.constants';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import { Image, Stack, Text } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

interface IServiceItemProps {
  title: string;
  icon: any;
  link: string;
}

const Service = ({ icon, title, link }: IServiceItemProps) => {
  const navigator = useNavigation();
  const [showModalWarningLogin, setShowModalWarningLogin] = useState(false);
  const handleNavigateService = () => {
    if (
      !isLoggedIn &&
      (link === GAME_LIST_SCREEN ||
        link === 'GatherGemScreen' ||
        link === SAVED_WORD_LIST)
    ) {
      setShowModalWarningLogin(true);
      return;
    }
    // @ts-ignore
    navigator.navigate(link as never, {} as never);
  };
  const { isLoggedIn } = useAppSelector(state => state.authReducer);
  let message = '';
  switch (link) {
    case GAME_LIST_SCREEN:
      message = 'Bạn cần đăng nhập để có thể sử dụng tính năng chơi game!';
      break;
    case 'GatherGemScreen':
      message = 'Bạn cần đăng nhập để có thể sử dụng tính năng săn kim cương!';
      break;
    case SAVED_WORD_LIST:
      message =
        'Bạn cần đăng nhập để có thể truy cập vào kho từ vựng của mình!';
      break;
    default:
      break;
  }
  return (
    <>
      <TouchableOpacity
        onPress={handleNavigateService}
        style={{ marginRight: 30 }}>
        <Stack justifyContent={'center'} alignItems={'center'} space={1}>
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'200px'}
            width={'60px'}
            height={'60px'}>
            <Image
              source={{ uri: icon }}
              alt="icon"
              width={'100%'}
              height={'100%'}
            />
          </Stack>
          <Text
            fontWeight={400}
            fontSize={'12px'}
            color={'#000'}
            lineHeight={'16px'}
            bgColor={'red'}
            isTruncated>
            {title}
          </Text>
        </Stack>
      </TouchableOpacity>
      {showModalWarningLogin && (
        <ModalWarningLogin
          showModalUnlock={showModalWarningLogin}
          setShowModalUnlock={() => setShowModalWarningLogin(false)}
          message={message}
        />
      )}
    </>
  );
};

export default Service;
