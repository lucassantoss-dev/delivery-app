import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === 'android';

export const MyAccountContainer = styled.SafeAreaView`
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
    flex: 1;
    margin: 24px 24px;
`;

export const ImageContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 80px;
    margin-right: 12px;
`;

export const MyProfileContent = styled.View`
    flex: 2;
`;

export const Profile = styled.View`
    border-bottom: 1px solid #000;
    padding: 16px;
    background-color: #fff;
    border-radius: 12px;
`;

export const Title = styled.View`
    margin-left: 14px;
    width: 260px;
`;

export const Separator = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 28px;
`;

export const Actions = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;
