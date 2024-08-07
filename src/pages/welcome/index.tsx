import React from "react";
import { Text } from "../../components/Text";
import * as Animatable from 'react-native-animatable';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ViewContainer, ViewContainerForm, ViewContainerLogo } from "./styles";
import { Button } from "../../components/Button";
import { RootStackParamList } from "../../routes";

export default function Welcome() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <ViewContainer>
            <ViewContainerLogo>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/images/logo1.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </ViewContainerLogo>
            <ViewContainerForm>
                <Animatable.View delay={600} animation="fadeInUp">
                    <Text size={24} weight="600" style={{ marginBottom: 12, marginTop: 28 }}>Faça pedidos e monitore enquanto são preparados e entregues</Text>
                    <Text color="#a1a1a1" style={{ marginBottom: 35 }}>Faça login para começar</Text>
                    <Button onPress={() => navigation.navigate('Login')}>
                        Acessar
                    </Button>
                </Animatable.View>
            </ViewContainerForm>
        </ViewContainer>
    );
}
