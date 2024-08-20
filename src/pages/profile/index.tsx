import React from "react";
import { Text } from "../../components/Text";
import {
    ProfileContainer,
    ProfileHeader,
    ImageProfile,
    ProfileContent,
    BoxProfile,
    ProfileFooter,
    SettingsButton,
    IconWrapper,
    ImageConfiguration,
    DescriptionProfile
} from "./styles";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Entypo from '@expo/vector-icons/Entypo';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes";
import { TouchableOpacity } from "react-native";
import { Button } from "../../components/Button";

export default function Profile() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <ProfileContainer>
            <Text size={22} weight="600" style={{ marginTop: 12, marginBottom: 12, marginLeft: 4 }}>Perfil</Text>
            <ProfileHeader>
                <Animatable.View animation="fadeInLeft" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <BoxProfile>
                        <ImageProfile source={{ uri: 'https://s3-sa-east-1.amazonaws.com/media.severinoapp.com/users/61704ee1265e9c3b2a844aed/71be276e-3444-4eaf-ba4c-b73ec1a2bf80.jpg' }} />
                        <DescriptionProfile>
                            <Text size={18} weight="600" color="#fff">Lucas Santos</Text>
                            <Text size={11} color="#fff">lucassantossdev@gmail.com</Text>
                        </DescriptionProfile>
                    </BoxProfile>
                    <TouchableOpacity onPress={() => { navigation.navigate("Conta") }}>
                        <FontAwesome name="pencil-square-o" size={28} color="#fff" />
                    </TouchableOpacity>
                </Animatable.View>

            </ProfileHeader>
            <Animatable.View animation="fadeInLeft" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Text size={14} color="#9b9898" style={{ marginBottom: 12, marginLeft: 4 }}>Configurações</Text>
            </Animatable.View>
            <ProfileContent>
                <SettingsButton onPress={() => { navigation.navigate("Cupons de Desconto") }}>
                    <Animatable.View animation="fadeInLeft" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <IconWrapper>
                            <ImageConfiguration source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/23642809-cupom-icone-isolado-em-branco-fundo-vetor.jpg' }} />
                        </IconWrapper>
                        <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Meus cupons</Text>
                        <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                    </Animatable.View>
                </SettingsButton>
                <SettingsButton onPress={() => { /* Handle navigation */ }}>
                    <Animatable.View animation="fadeInLeft" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <IconWrapper>
                            <ImageConfiguration source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5218/5218542.png' }} />
                        </IconWrapper>
                        <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Meus pedidos</Text>
                        <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                    </Animatable.View>

                </SettingsButton>
                <SettingsButton onPress={() => { /* Handle navigation */ }}>
                    <Animatable.View animation="fadeInLeft" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <IconWrapper>
                            <ImageConfiguration source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/7165323-cartoes-de-credito-cartao-de-credito-icone-isolado-em-fundo-branco-cartao-de-credito-icone-design-ilustracao-cartao-de-credito-sinal-simples-gratis-vetor.jpg' }} />
                        </IconWrapper>
                        <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Pagamentos</Text>
                        <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                    </Animatable.View>

                </SettingsButton>
                <SettingsButton onPress={() => { /* Handle navigation */ }}>
                    <Animatable.View animation="fadeInLeft" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <IconWrapper>
                            <ImageConfiguration source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/26633604-documento-icone-simbolo-projeto-ilustracao-vetor.jpg' }} />
                        </IconWrapper>
                        <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Assinaturas</Text>
                        <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                    </Animatable.View>

                </SettingsButton>
            </ProfileContent>
            <Animatable.View animation="fadeInLeft" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Text size={14} color="#9b9898" style={{ marginTop: 8, marginBottom: 12, marginLeft: 4 }}>Mais</Text>
            </Animatable.View>
            <ProfileFooter>
                <SettingsButton onPress={() => { /* Handle navigation */ }}>
                    <Animatable.View animation="fadeInLeft" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <IconWrapper>
                            <ImageConfiguration source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2306021-line-male-customer-support-icon-help-center-symbol-isolated-for-web-and-mobile-app-gratis-vetor.jpg' }} />
                        </IconWrapper>
                        <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Ajuda e Suporte</Text>
                        <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                    </Animatable.View>

                </SettingsButton>
                <SettingsButton onPress={() => { /* Handle navigation */ }}>
                    <Animatable.View animation="fadeInLeft" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <IconWrapper>
                            <ImageConfiguration source={{ uri: 'https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-vector-heart-icon-png-image_1576615.jpg' }} />
                        </IconWrapper>
                        <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Sobre o App</Text>
                        <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                    </Animatable.View>
                </SettingsButton>
            </ProfileFooter>

            <Button onPress={() => { }}>
                Desconectar
            </Button>
        </ProfileContainer>
    );
}
