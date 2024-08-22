import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ActivedOrders from "./components/ActiveOrders";
import FinishedOrders from "./components/FinishedOrders";
import { RootStackParamList } from "../../types/OrderProvider";

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export default function ProviderOrders() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#D73035',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIndicatorStyle: { backgroundColor: '#D73035' },
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        borderTopColor: '#fff',
                        shadowColor: 'transparent',
                        marginTop: 32,
                    },
                }}
            >
                <Tab.Screen name="Ativos" component={ActivedOrders} />
                <Tab.Screen name="Finalizados" component={FinishedOrders} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
