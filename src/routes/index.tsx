import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/welcome';
import Login from '../pages/login';
import Main from '../pages/main';
import { ClerkProvider, useAuth, useSignIn, useUser } from '@clerk/clerk-expo';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { tokenCache } from '../utils/tokenCache';
import { ActivityIndicator } from 'react-native';

export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Main: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env
    .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

function Layout() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { isSignedIn, isLoaded } = useAuth();

    useEffect(() => {
        const checkAuth = async () => {
            const token = await tokenCache.getToken('__clerk_client_jwt');
            if (token) {
                navigation.navigate("Main");
            } else {
                navigation.navigate("Welcome");
            }
        };
        if (isLoaded) {
            checkAuth();
        }
    }, [isLoaded, navigation]);

    if (!isLoaded) {
        return <ActivityIndicator />;
    }

    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
export default function Routes() {
    return (
        <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
            <Layout />
        </ClerkProvider>
    );
}
