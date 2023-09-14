import * as Font from 'expo-font';

export default useFonts = async () =>
    await Font.loadAsync({
        regular: require('../assets/fonts/Lato-Regular.ttf'),
        bold: require('../assets/fonts/Lato-BoldItalic.ttf'),
    });