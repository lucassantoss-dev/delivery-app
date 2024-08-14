import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === 'android';

export const ProfileContainer = styled.SafeAreaView`
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
    flex: 1;
    margin: 24px 24px;
`;

export const ProfileHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    background-color: #D73035;
    max-height: 100px;
    padding: 14px;
    border-radius: 12px;
    margin-bottom: 24px;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
    elevation: 2
`;

export const ImageProfile = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 12px;
`;

export const ProfileContent = styled.View`
    flex: 2;
`;
export const BoxProfile = styled.View`
    flex-direction: row;
    align-items: center;
`;
