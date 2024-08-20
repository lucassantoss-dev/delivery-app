import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ActiveCoupons from './components/ActiveCoupons';
import ExpiredCoupons from './components/ExpiredCoupons';

const Tab = createMaterialTopTabNavigator();

export default function Coupons() {
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
                    },
                }}
            >
                <Tab.Screen name="Ativos" component={ActiveCoupons} />
                <Tab.Screen name="Expirados" component={ExpiredCoupons} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
