import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../pages/welcome';
import Login from '../pages/login';
import Main from '../pages/main';
import Orders from '../pages/orders';
import ProviderOrders from '../pages/provider-orders';
import Search from '../pages/search';
import Account from '../pages/profile/components/changeProfile';
import Coupons from '../pages/profile/components/discountCoupons';
import { ClerkProvider, useAuth, useSignIn, useUser } from '@clerk/clerk-expo';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { tokenCache } from '../utils/tokenCache';
import { ActivityIndicator, View } from 'react-native';
import Profile from '../pages/profile';
import { Entypo } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Text } from '../components/Text';
import Ionicons from '@expo/vector-icons/Ionicons';

export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Main: undefined;
    Perfil: undefined;
    Inicio: undefined;
    Notificações: undefined;
    Buscar: undefined;
    Novo: undefined;
    Conta: undefined;
    'Cupons de Desconto': undefined;
    Profile: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env
    .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        backgroud: "#fff"
    }
}

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Perfil"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Conta"
                component={Account}
                options={{ headerTitle: 'Conta' }}
            />
            <Stack.Screen
                name="Cupons de Desconto"
                component={Coupons}
                options={{
                    headerTitle: 'Cupons de Desconto',
                    headerStyle: {
                        backgroundColor: '#fff',
                    }
                }}
            />
        </Stack.Navigator>
    );
}

function MainTabs() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Inicio"
                component={Main}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Entypo name='home' size={24} color={focused ? "#D73035" : "#111"} />
                                <Text size={14} color={focused ? "#D73035" : "#111"}>Início</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Buscar"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Feather name='search' size={24} color={focused ? "#D73035" : "#111"} />
                                <Text size={14} color={focused ? "#D73035" : "#111"}>Busca</Text>
                            </View>
                        )
                    }
                }}
            />
            {/* <Tab.Screen
                name="Novo"
                component={Main}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Entypo name='home' size={24} color={focused ? "#D73035" : "#111"} />
                                <Text size={14} color={focused ? "#D73035" : "#111"}>Início</Text>
                            </View>
                        )
                    }
                }}
            /> */}
            <Tab.Screen
                name="Notificações"
                component={ProviderOrders}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <AntDesign name="profile" size={24} color={focused ? "#D73035" : "#111"} />
                                <Text size={14} color={focused ? "#D73035" : "#111"}>Pedidos</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Ionicons name="person" size={24} color={focused ? "#D73035" : "#111"} />
                                <Text size={14} color={focused ? "#D73035" : "#111"}>Perfil</Text>
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
}

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
                component={MainTabs}
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
