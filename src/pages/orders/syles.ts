import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === 'android';

export const OrdersContainer = styled.SafeAreaView`
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
    margin: 40px 0;
    padding-left: 10px;
    border: 1px solid #c3c3c3;
    border-radius: 8px;
    background-color: #fff;
    flex-direction: row;
    align-items: center;
`;

export const OrderProvider = styled.View`

`;

export const SettingsButton = styled.TouchableOpacity`
    border-radius: 12px;
`;

export const IconWrapper = styled.View`
    margin-right: 8px;
`;

export const ImageConfiguration = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin-right: -15px;
`;

export const StatusOrder = styled.View`
    padding: 1px 18px;
    flex-direction: row;
    align-items: center;
`;
export const CodeOrder = styled.View`
    padding: 4px 6px;
    flex-direction: row;
    align-items: center;
`;

export const DateOrder = styled.View`
    padding: 6px 18px;
    flex-direction: row;
    align-items: center;
`;

export const ButtonsOrder = styled.View`
    flex-direction: row;
    margin: 12px 0 0 0;
    justify-content: flex-start;
    flex-wrap: nowrap;
`;
export const ResumeButton = styled.TouchableOpacity`
    background-color: #fff;
    border: 2px solid #D73035;
    border-radius: 48px;
    padding: 14px 24px;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    flex-grow: 1;
`;

export const Separator = styled.View`
    padding: 10px;
    flex: 1;
`;
