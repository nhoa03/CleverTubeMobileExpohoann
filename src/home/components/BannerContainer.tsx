import { Image } from 'native-base';
import React, { useRef, useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { ISectionBannerResponse } from '../common/interface';
// import { useNavigation } from '@react-navigation/native';
// import { UPDATE_ACCOUNT } from '@clvtube/common/constants/route.constants';
// import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import ModalWarningLogin from '@/common/components/modal/ModalWarningLogin';

const BannerContainer = ({ data }: { data: ISectionBannerResponse }) => { 
  console.log('banner ch', data)
  const ref = useRef(null);
  const [showModalWarningLogin, setShowModalWarningLogin] = useState(false);
  const width = Dimensions.get('window').width;
  const RATIO_BANNER = 343 / 178;
  const QUANTITY_ITEM_RENDER_IN_NEED = 10;
  const isAutoPlay = true;
  const image = data?.data?.map(item => item?.image);
  // const navigator = useNavigation();
  // const { isLoggedIn } = useAppSelector(state => state.authReducer);
  const handleNavigateBanner = () => {
    // if (isLoggedIn) {
    //   navigator.navigate(UPDATE_ACCOUNT as never);
    // } else {
    //   setShowModalWarningLogin(true);
    // }
  };
  console.log([...image]);
  return (
    <>
      <View style={{ flex: 1 }}>
        <Carousel
          ref={ref}
          width={width}
          height={width / RATIO_BANNER}
          windowSize={QUANTITY_ITEM_RENDER_IN_NEED}
          autoPlay={isAutoPlay}
          pagingEnabled={true}
          loop={image?.length > 1}
          snapEnabled={true}
          scrollAnimationDuration={300}
          autoPlayInterval={3000}
          // mode="parallax"
          // modeConfig={{
          //   parallaxScrollingScale: 0.96,
          //   parallaxScrollingOffset: 18,
          // }}
          data={[...image]}
          // data={banners?.data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={handleNavigateBanner} key={item}>
                <Image
                  source={{ uri: `${item}?${new Date()}`, cache: 'reload' }}
                  width={width}
                  height={'100%'}
                  resizeMode={'cover'}
                  alt={'image'}
                />
              </TouchableOpacity>
            );
          }}></Carousel>
      </View>
      {showModalWarningLogin && (
        <ModalWarningLogin
          showModalUnlock={showModalWarningLogin}
          setShowModalUnlock={() => setShowModalWarningLogin(false)}
          message={'Bạn cần đăng nhập để trải nghiệm gói Premium!'}
        />
      )}
    </>
  );
};

export default React.memo(BannerContainer);
