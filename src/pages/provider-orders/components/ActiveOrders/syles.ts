import styled from "styled-components/native";

export const ActiveCouponsContainer = styled.SafeAreaView`
    padding: 12px;
    margin-left: 4px;
`;

export const ActiveCardContent = styled.TouchableOpacity`
    border: 1px solid #c3c3c3;
    background-color: #fff;
    border-radius: 8px;
    padding: 15px 18px;
`;

export const Title = styled.View`
    flex-direction: row;
    margin-bottom: 4px;
`;

export const Subtitle = styled.View`
    margin-bottom: 14px;
`;

export const RulesContainer = styled.View`
    margin-top: 8px;
`;

export const ActiveFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background: rgba(204, 204, 204, 0.3);
    margin: 1px 0;
`;
