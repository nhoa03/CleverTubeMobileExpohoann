/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Badge,
  Box,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from 'native-base';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Language from '@/account/component/Language';
import DarkMode from '@/account/component/DarkMode';
import Popup from '@/common/components';
import AdaptiveBanner from '@/common/components/ads/AdaptiveBanner';

import { accountImage, imageNotify } from '@/common/constants/imagePath';
import {
  ACCOUNT_ROUTE,
  DIAMOND_SCREEN,
  USER_SAVE_MEDIA,
} from '@/common/constants/route.constants';

import { useGetInfoUser } from '@/account/hooks/useAccount';

const Account = () => {
  const { t } = useTranslation();
  const navigate = useNavigation();
  const { top: insetTop } = useSafeAreaInsets();

  const { data: userInfo } = useGetInfoUser();

  const [avatarUser, setAvatarUser] = useState(accountImage.NO_AVATAR);
  const [showModalLanguage, setShowModalLanguage] = useState(false);
  const [showModalDarkMode, setShowModalDarkMode] = useState(false);
  const [showModalLogout, setShowModalLogout] = useState(false);

  useEffect(() => {
    if (userInfo?.data?.avatar) {
      setAvatarUser({ uri: userInfo.data.avatar.url });
    } else {
      setAvatarUser(accountImage.NO_AVATAR);
    }
  }, [userInfo]);

  const handleLogoutApp = async () => {
    // Logout logic
  };

  return (
    <ScrollView bgColor="#F5F5F5" bounces={false}>
      <VStack paddingTop={insetTop} width="100%" bgColor="#3550E9" px={5} py={5} space={3} alignItems="center">
        <VStack w="100%" backgroundColor="#FFF" borderRadius="12px" shadow="2" space={5} p={3}>
          <HStack space={1} alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              borderColor="#FFF"
              borderWidth="2.325px"
              borderStyle="solid"
            >
              <Image source={avatarUser} width="100px" height="100px" alt="avatar" />
            </Box>
            <VStack space={1}>
              <Text width={180} fontSize="20px" fontWeight={600} color="#4D4D4D">
                {userInfo?.data?.client?.fullname || t('account.newUser')}
              </Text>
              <Badge
                w="50%"
                bgColor="#b5d8f1d7"
                borderRadius="10px"
                _text={{ color: '#3D9BE0', fontWeight: 400 }}
              >
                {userInfo?.data?.client?.clientPlan?.plan?.type || t('plan.beginner')}
              </Badge>
            </VStack>
          </HStack>

          <View style={{ borderStyle: 'dashed', borderWidth: 1, borderColor: '#DEDEDE' }} />

          <HStack w="full" justifyContent="space-between" alignItems="center">
            <HStack alignItems="center" space={2}>
              <Image source={accountImage.ICON_DIAMOND} alt="icon_diamon" w="24px" h="24px" />
              <Text fontSize="16px" fontWeight={600} color="#0757A2">
                {userInfo?.data?.userDiamond?.totalDiamonds || '0'}
              </Text>
            </HStack>
            <TouchableOpacity onPress={() => navigate.navigate(DIAMOND_SCREEN as never)}>
              <HStack alignItems="center" space={2}>
                <Text color="#444444" fontSize="12px" fontWeight={400}>
                  {t('account.huntDiamonds')}
                </Text>
                <SimpleLineIcons name="arrow-right" size={15} color="black" />
              </HStack>
            </TouchableOpacity>
          </HStack>
        </VStack>

        <HStack w="100%" backgroundColor="#3988F0" p={3} borderRadius="12px" shadow="2" space={3}>
          <Image source={accountImage.ICON_PLUS} alt="icon plus" w="47px" />
          <TouchableOpacity>
            {userInfo?.data?.client?.clientPlan?.plan?.type === 'PREMIUM' ? (
              <VStack>
                <Text fontSize="16px" fontWeight={600} color="#FFF">
                  {t('account.myPlus')}
                </Text>
                <Text fontSize="12px" fontWeight={400} color="#EBF8FE">
                  {t('account.viewInfo')}
                </Text>
              </VStack>
            ) : (
              <VStack>
                <Text fontSize="16px" fontWeight={600} color="#FFF">
                  {t('account.subscribePlus')}
                </Text>
                <Text fontSize="12px" fontWeight={400} color="#EBF8FE">
                  {t('account.unlimitedLearning')}
                </Text>
              </VStack>
            )}
          </TouchableOpacity>
        </HStack>
      </VStack>

      <VStack backgroundColor="white">
        <VStack mt={3}>
          <TouchableOpacity onPress={() => navigate.navigate(ACCOUNT_ROUTE.EDIT_ACCOUNT as never)}>
            <Box height="53px" borderRadius="13px" borderBottomWidth="1px" px={5} borderColor="#F1F1F1">
              <HStack height="100%" justifyContent="space-between" alignItems="center">
                <HStack space={4} alignItems="center">
                  <Feather name="user" size={23} color="#292D32" />
                  <Text color="#000" fontSize="14px" fontWeight={400}>
                    {t('account.accountInfo')}
                  </Text>
                </HStack>
                <SimpleLineIcons name="arrow-right" size={15} color="#999999" />
              </HStack>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate.navigate(USER_SAVE_MEDIA as never)}>
            <Box height="53px" borderRadius="13px" borderBottomWidth="1px" px={5} borderColor="#F1F1F1">
              <HStack height="100%" justifyContent="space-between" alignItems="center">
                <HStack space={4} alignItems="center">
                  <Icon as={Entypo} name="heart-outlined" size={23} color="#292D32" />
                  <Text color="#000" fontSize="14px" fontWeight={400}>
                    {t('account.collection')}
                  </Text>
                </HStack>
                <SimpleLineIcons name="arrow-right" size={15} color="#999999" />
              </HStack>
            </Box>
          </TouchableOpacity>

          {showModalLanguage && (
            <Language showModal={showModalLanguage} setShowModal={setShowModalLanguage} />
          )}

          <Box w="full" backgroundColor="gray.200">
            <Box width="full" backgroundColor="#F4F4F4">
              <AdaptiveBanner />
            </Box>
          </Box>

          {showModalDarkMode && (
            <DarkMode showModal={showModalDarkMode} setShowModal={setShowModalDarkMode} />
          )}

          {showModalLogout && (
            <Popup
              showModal={showModalLogout}
              setShowModal={setShowModalLogout}
              isSuccess={false}
              title={t('logout')}
              description={t('confirmLogout')}
              textButton={t('logout')}
              colorButton="popup.warning"
              textClose={t('cancel')}
              icon={imageNotify.WARNING}
              onPress={handleLogoutApp}
            />
          )}

          <Box px={5}>
            <TouchableOpacity onPress={() => setShowModalLogout(true)}>
              <Box height="57px">
                <HStack height="100%" alignItems="center" space={4}>
                  <Image source={accountImage.ICON_LOGOUT} alt="logout-icon" size={5} />
                  <Text color="#DC3545" fontSize="14px" fontWeight={400}>
                    {t('logout')}
                  </Text>
                </HStack>
              </Box>
            </TouchableOpacity>
          </Box>
        </VStack>

        <HStack justifyContent="center" background="#F5F5F5" py={5}>
          <Text color="#B1B4B6">{t('version', { version: '1.0.0' })}</Text>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default Account;
