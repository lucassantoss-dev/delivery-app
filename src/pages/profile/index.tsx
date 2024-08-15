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

export default function Profile() {
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
                    <FontAwesome name="pencil-square-o" size={28} color="#fff" />
                </Animatable.View>

            </ProfileHeader>
            <Text size={14} color="#9b9898" style={{ marginBottom: 12, marginLeft: 4 }}>Configurações</Text>
            <ProfileContent>
                <SettingsButton onPress={() => { /* Handle navigation */ }}>
                    <IconWrapper>
                        <ImageConfiguration source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' }} />
                    </IconWrapper>
                    <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Minha Conta</Text>
                    <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                </SettingsButton>
                <SettingsButton onPress={() => { /* Handle navigation */ }}>
                    <IconWrapper>
                        <ImageConfiguration source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5218/5218542.png' }} />
                    </IconWrapper>
                    <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Meus pedidos</Text>
                    <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                </SettingsButton>
                <SettingsButton onPress={() => { /* Handle navigation */ }}>
                    <IconWrapper>
                        <ImageConfiguration source={{ uri: 'https://cdn.icon-icons.com/icons2/2741/PNG/512/cloud_security_icon_175839.png' }} />
                    </IconWrapper>
                    <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Segurança e Senhas</Text>
                    <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                </SettingsButton>
                <SettingsButton onPress={() => { /* Handle navigation */ }}>
                    <IconWrapper>
                        <ImageConfiguration source={{ uri: 'https://w7.pngwing.com/pngs/332/994/png-transparent-door-entrance-exit-leave-logout-out-quit-basic-user-interface-icon-thumbnail.png' }} />
                    </IconWrapper>
                    <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Sair</Text>
                    <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                </SettingsButton>
            </ProfileContent>
            <Text size={14} color="#9b9898" style={{ marginTop: 8, marginBottom: 12, marginLeft: 4 }}>Mais</Text>
            <ProfileFooter>
                <SettingsButton onPress={() => { /* Handle navigation */ }}>
                    <IconWrapper>
                        <ImageConfiguration source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2306021-line-male-customer-support-icon-help-center-symbol-isolated-for-web-and-mobile-app-gratis-vetor.jpg' }} />
                    </IconWrapper>
                    <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Ajuda e Suporte</Text>
                    <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                </SettingsButton>
                <SettingsButton onPress={() => { /* Handle navigation */ }}>
                    <IconWrapper>
                        <ImageConfiguration source={{ uri: 'https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-vector-heart-icon-png-image_1576615.jpg' }} />
                    </IconWrapper>
                    <Text size={16} style={{ flex: 1, marginLeft: 12 }}>Sobre o App</Text>
                    <Entypo name="chevron-small-right" size={28} color="#c3c3c3" />
                </SettingsButton>
            </ProfileFooter>
        </ProfileContainer>
    );
}
