import React from "react";
import { Text } from "../../components/Text";
import {
    ProfileContainer,
    ProfileHeader,
    ImageProfile,
    ProfileContent,
    BoxProfile
} from "./styles";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Profile() {
    return (
        <ProfileContainer>
            <Text size={22} weight="600" style={{marginTop: 12, marginBottom: 12, marginLeft: 4}}>Perfil</Text>
            <ProfileHeader>
                <BoxProfile>
                    <ImageProfile source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' }} />
                    <Text size={18} weight="600" color="#fff">Lucas Santos</Text>
                </BoxProfile>
                <FontAwesome name="pencil-square-o" size={28} color="#fff" />
            </ProfileHeader>
            <ProfileContent>
                <Text>Configurações</Text>
            </ProfileContent>
        </ProfileContainer>
    );
}
