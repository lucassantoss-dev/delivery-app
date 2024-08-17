import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
export default function App() {
    const [isFontsLoaded] = useFonts({
        'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
        'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
        'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
    })

    if (!isFontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <StatusBar style='dark' />
            <Routes />
        </NavigationContainer>
    );
}
