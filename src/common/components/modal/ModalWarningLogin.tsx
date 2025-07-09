import { Center, Image, Modal, Text, VStack, View } from 'native-base';
import React from 'react';
import { imagePath } from '../../constants/imagePath';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AUTH } from '../../constants/route.constants';

type Props = {
  showModalUnlock: boolean;
  setShowModalUnlock: React.Dispatch<React.SetStateAction<boolean>>;
  message?: string;
  isGoBack?: boolean;
};

const ModalWarningLogin = ({
  showModalUnlock,
  setShowModalUnlock,
  isGoBack,
  message,
}: Props) => {
  const navigation = useNavigation();

  return (
    <Modal
      isOpen={showModalUnlock}
      onClose={() => {
        setShowModalUnlock(false);
      }}
      avoidKeyboard
      size="lg">
      <Modal.Content>
        <Modal.Body>
          <View>
            <VStack width={'full'} px={3}>
              <Center>
                <Image
                  source={imagePath.NOT_LOGIN}
                  width={130}
                  height={130 / (3 / 4)}
                  alt=""
                />
              </Center>
              <Center mb={3}>
                <Text color={'#070707'} fontSize={'14px'} textAlign={'center'}>
                  {message || 'Vui lòng đăng nhập để sử dụng tính năng này!'}
                </Text>
              </Center>
              <Center mb={5}>
                <TouchableOpacity
                  onPress={() => {
                    setShowModalUnlock(false);
                    if (isGoBack) {
                      // @ts-ignore
                      navigation.navigate(AUTH, { isGoBack: true });
                    } else {
                      // @ts-ignore
                      navigation.navigate(AUTH, {});
                    }
                  }}>
                  <Center
                    bgColor={'#216BCD'}
                    px={6}
                    py={3}
                    borderRadius={8}
                    minWidth={'200px'}>
                    Đăng nhập
                  </Center>
                </TouchableOpacity>
              </Center>
            </VStack>
          </View>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ModalWarningLogin;
