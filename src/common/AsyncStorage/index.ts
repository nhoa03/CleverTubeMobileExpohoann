import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  // Phương thức để lưu trữ dữ liệu
  static async saveData<T>(key: string, data: T): Promise<void> {
    try {
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonData);
      console.log(`Data saved successfully under key: ${key}`);
    } catch (error) {
      console.error(`Error saving data under key: ${key}`, error);
    }
  }

  // Phương thức để lấy dữ liệu
  static async getData<T>(key: string): Promise<T | null> {
    try {
      const jsonData = await AsyncStorage.getItem(key);
      return jsonData != null ? JSON.parse(jsonData) as T : null;
    } catch (error) {
      console.error(`Error retrieving data under key: ${key}`, error);
      return null;
    }
  }

  // Phương thức để xóa dữ liệu
  static async removeData(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`Data removed successfully under key: ${key}`);
    } catch (error) {
      console.error(`Error removing data under key: ${key}`, error);
    }
  }

  // Phương thức để xóa toàn bộ dữ liệu
  static async clearAll(): Promise<void> {
    try {
      await AsyncStorage.clear();
      console.log('All data cleared successfully');
    } catch (error) {
      console.error('Error clearing all data', error);
    }
  }
}

export default StorageService;
