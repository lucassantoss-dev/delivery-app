import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const irAndroid = Platform.OS === 'android';

export const ContainerView = styled.SafeAreaView`
    flex: 1;
    background: #D73035
`;

export const ViewContainerLogo = styled.View`
    flex: 1;
    background: #D73035;
    justify-content: center;
    align-items: center
`;

export const ViewContainerForm = styled.View`
    flex: 1;
    background: #fff;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 5%
`;

export const LoginContainer = styled.View`
    height: 83px;
    margin-top: 1px;
    padding: 0 14px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const IconImage = styled.ImageBackground`
    width: 44px;
    height: 44px;
    border-radius: 22px;
`;

export const ModalForm = styled.View`
    margin-top: 32px;
`;

export const Input = styled.TextInput`
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.5);
    border-radius: 16px;
    padding: 12px;
    margin-bottom: 24px;
    min-width: 320px;
`;

export const Icon = styled.View`
    background: #fff;
    width: 44px;
    height: 44px;
    border-radius: 22px;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    margin: 0 30px;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, ${irAndroid ? 1 : 0.1});
    elevation: 2;
`;
