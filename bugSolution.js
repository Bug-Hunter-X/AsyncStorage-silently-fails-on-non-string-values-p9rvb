import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@my_key', jsonValue);
  } catch (e) {
    console.error('Failed to store the data:', e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@my_key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.error('Failed to get the data:', e);
  }
};

//Correct Usage
const myObject = { name: 'John Doe', age: 30 };
storeData(myObject);

getData().then(retrievedObject => console.log('Retrieved object:', retrievedObject));
