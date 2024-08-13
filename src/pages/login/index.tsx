import { Alert, TextInput, TouchableOpacity } from 'react-native';
import { Text } from '../../components/Text';
import {
    LoginContainer,
    Icon,
    IconImage,
    ModalForm,
    Input,
    ContainerView,
    ViewContainerLogo,
    ViewContainerForm
} from './styles';
import { Button } from '../../components/Button';
import * as Animatable from 'react-native-animatable';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../routes';
import React, { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';
import * as Liking from 'expo-linking'

WebBrowser.maybeCompleteAuthSession()

export default function Login() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const phoneOauth = useOAuth({
        strategy: "oauth_google"
    })
    const googleOauth = useOAuth({
        strategy: "oauth_google"
    })
    const facebookOauth = useOAuth({
        strategy: "oauth_facebook"
    })
    useEffect(() => {
        WebBrowser.warmUpAsync()

        return () => {
            WebBrowser.coolDownAsync()
        }
    }, [])

    async function handlePhoneLogin() {
        try {
            setIsLoading(true);
            const redirectUrl = Liking.createURL("Main");
            const oAuthFlow = await phoneOauth.startOAuthFlow({ redirectUrl: redirectUrl });

            if (oAuthFlow.authSessionResult?.type === 'success') {
                if (oAuthFlow.setActive) {
                    await oAuthFlow.setActive({
                        session: oAuthFlow.createdSessionId
                    });
                    navigation.navigate("Main");
                }
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            console.log('error', error);
            setIsLoading(false);
        }
    }

    async function handleGoogleLogin() {
        try {
            setIsLoading(true);
            const redirectUrl = Liking.createURL("Main");
            const oAuthFlow = await googleOauth.startOAuthFlow({ redirectUrl: redirectUrl });

            if (oAuthFlow.authSessionResult?.type === 'success') {
                if (oAuthFlow.setActive) {
                    await oAuthFlow.setActive({
                        session: oAuthFlow.createdSessionId
                    });
                    navigation.navigate("Main");
                }
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            console.log('error', error);
            setIsLoading(false);
        }
    }

    async function handleFacebookLogin() {
        try {
            setIsLoading(true);
            const redirectUrl = Liking.createURL("Main");
            const oAuthFlow = await facebookOauth.startOAuthFlow({ redirectUrl: redirectUrl });

            if (oAuthFlow.authSessionResult?.type === 'success') {
                if (oAuthFlow.setActive) {
                    await oAuthFlow.setActive({
                        session: oAuthFlow.createdSessionId
                    });
                    navigation.navigate("Main");
                }
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            console.log('error', error);
            setIsLoading(false);
        }
    }

    async function handleLogin() {
        try {
            const authLogin = await api.post('/user/login', login);
            console.log('authLogin', authLogin.data)
            navigation.navigate("Main")
        } catch (error) {
            console.log('erro ao fazer login', error);
        }
    }

    return (
        <ContainerView>
            <ViewContainerLogo>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/images/logo1.png')}
                    style={{ width: '100%', height: '70%', alignItems: 'flex-start', justifyContent: 'flex-start' }}
                    resizeMode="contain" />
                <Animatable.View animation="fadeInLeft" style={{ marginTop: '8%', marginBottom: '3%', paddingStart: '5%' }}>
                    <Text size={28} weight="600" color="#fff">Bem-vindo(a)</Text>
                </Animatable.View>
            </ViewContainerLogo>
            <ViewContainerForm>
                <Animatable.View delay={200} animation="fadeInUp">
                    <LoginContainer>
                        <Icon>
                            <TouchableOpacity onPress={handlePhoneLogin}>
                                <IconImage source={require('../../assets/images/phone.png')} />
                            </TouchableOpacity>
                        </Icon>
                        <Icon>
                            <TouchableOpacity onPress={handleGoogleLogin}>
                                <IconImage source={require('../../assets/images/google.png')} />
                            </TouchableOpacity>
                        </Icon>
                        <Icon>
                            <TouchableOpacity onPress={handleFacebookLogin}>
                                <IconImage source={require('../../assets/images/facebook.png')} />
                            </TouchableOpacity>
                        </Icon>
                    </LoginContainer >
                </Animatable.View>
                <Animatable.View delay={200} animation="fadeInUp" style={{ alignItems: 'center', flex: 1 }}>
                    <Text size={14} weight="600">Login com</Text>
                    <Text size={14}>ou</Text>
                    <ModalForm>
                        <TextInput
                            placeholder="E-mail"
                            placeholderTextColor="#666"
                            style={{ borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 20 }}
                            onChangeText={(text) => setLogin({ ...login, email: text })}
                            value={login.email}
                        />
                        <TextInput
                            placeholder="Senha"
                            placeholderTextColor="#666"
                            secureTextEntry={true}
                            style={{ borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 20 }}
                            onChangeText={(text) => setLogin({ ...login, password: text })}
                            value={login.password}
                        />

                        <Button onPress={handleLogin}>
                            Entrar
                        </Button>
                        <TouchableOpacity style={{ marginTop: 14, alignSelf: 'center' }}>
                            <Text size={14} color="#a1a1a1">Não possui uma conta? Cadastre-se</Text>
                        </TouchableOpacity>
                    </ModalForm>
                </Animatable.View>
            </ViewContainerForm>
        </ContainerView>
    )
}
