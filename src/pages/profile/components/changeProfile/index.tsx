import React, { useState } from "react";
import { Text } from "../../../../components/Text";
import * as ImagePicker from 'expo-image-picker';
import {
    MyAccountContainer,
    ImageContainer,
    Image,
    MyProfileContent,
    Profile,
    Title,
    Separator,
    Actions
} from "./styles";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Account() {
    const [isEditing, setIsEditing] = useState(false);
    const [profileImage, setProfileImage] = useState('https://s3-sa-east-1.amazonaws.com/media.severinoapp.com/users/61704ee1265e9c3b2a844aed/71be276e-3444-4eaf-ba4c-b73ec1a2bf80.jpg');
    const [name, setName] = useState('Lucas Santos');
    const [email, setEmail] = useState('lucassantossdev@gmail.com');
    const [phone, setPhone] = useState('(85) 9 8239 3325');
    const [password, setPassword] = useState('9204Spfc!');
    const [showPassword, setShowPassword] = useState(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        } else {
            Alert.alert("Nenhuma imagem foi selecionada.");
        }
    };
    return (
        <MyAccountContainer>
            <ImageContainer>
                <View style={{ position: 'relative' }}>
                    <Image source={{ uri: profileImage }} />
                    <TouchableOpacity
                        onPress={pickImage}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            backgroundColor: '#D73035',
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            padding: 6,
                        }}
                    >
                        <EvilIcons name="camera" size={38} color="#fff" />
                    </TouchableOpacity>
                </View>
            </ImageContainer>
            <MyProfileContent>
                <Profile>
                    <Separator>
                        <Ionicons name="person-sharp" size={24} color="black" />
                        <Title>
                            <Text size={13} weight="600">Nome</Text>
                            {isEditing ? (
                                <TextInput
                                    style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}
                                    value={name}
                                    onChangeText={setName}
                                />
                            ) : (
                                <Text>{name}</Text>
                            )}
                        </Title>
                    </Separator>
                    <Separator>
                        <Fontisto name="email" size={24} color="black" />
                        <Title>
                            <Text size={13} weight="600">E-mail</Text>
                            {isEditing ? (
                                <TextInput
                                    style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            ) : (
                                <Text>{email}</Text>
                            )}
                        </Title>
                    </Separator>
                    <Separator>
                        <FontAwesome name="phone" size={24} color="black" />
                        <Title>
                            <Text size={13} weight="600">Telefone</Text>
                            {isEditing ? (
                                <TextInput
                                    style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}
                                    value={phone}
                                    onChangeText={setPhone}
                                />
                            ) : (
                                <Text>{phone}</Text>
                            )}
                        </Title>
                    </Separator>
                    <Separator>
                        <MaterialCommunityIcons name="form-textbox-password" size={24} color="black" />
                        <Title>
                            <Text size={13} weight="600">Senha</Text>
                            {isEditing ? (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TextInput
                                        style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flex: 1 }}
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry={!showPassword}
                                    />
                                    <TouchableOpacity onPress={toggleShowPassword}>
                                        <MaterialCommunityIcons
                                            name={showPassword ? "eye-off" : "eye"}
                                            size={24}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <Text>*******</Text>
                            )}
                        </Title>
                    </Separator>
                </Profile>
                <Actions>
                    <TouchableOpacity onPress={toggleEdit}>
                        <Text size={16} color="blue" style={{ marginTop: 10 }}>
                            {isEditing ? 'Cancelar' : ''}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleEdit}>
                        <Text size={16} color="blue" style={{ marginTop: 10, marginLeft: 14 }}>
                            {isEditing ? 'Salvar' : 'Editar perfil'}
                        </Text>
                    </TouchableOpacity>
                </Actions>
            </MyProfileContent>
        </MyAccountContainer>
    )
}
