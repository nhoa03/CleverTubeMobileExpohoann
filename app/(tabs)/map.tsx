import { View, Text, Pressable } from 'react-native';
// import { Href, useRouter } from 'expo-router';

export default function Home() {
  // const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold mb-4">Trang chính</Text>

      <Pressable
//   onPress={() => router.navigate('/map' as Href)}
  className="bg-blue-500 px-4 py-2 rounded-xl mb-2"
>
  <Text className="text-white">Đi tới Bản đồ</Text>
</Pressable>

<Pressable
//   onPress={() => router.push('/profile' as Href)}
  className="bg-green-500 px-4 py-2 rounded-xl"
>
  <Text className="text-white">Đi tới Hồ sơ</Text>
</Pressable>

    </View>
  );
}
