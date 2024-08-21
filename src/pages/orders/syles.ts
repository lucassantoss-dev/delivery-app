import styled from "styled-components/native"

export const Sale = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    gap: 5px;
`;

export const ProviderImage = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 45px;
    border: 2px solid #D73035;
    object-fit: contain;
    margin-left: 6px;
`;

export const ProductDetails = styled.View`
    margin-left: 16px;
    margin-top: 6px;
    gap: 5px;
    flex: 1;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background: rgba(204, 204, 204, 0.3);
    margin: 1px 0;
`;

export const AddToCartButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    right: 0;
`;
export const DateOrder = styled.View`
    flex-direction: row;
    align-items: center;
`
export const ButtonsOrder = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 12px 0;
`;
export const ResumeButton = styled.TouchableOpacity`
    border: 2px solid #D73035;
    padding: 11px 22px;
    border-radius: 38px;
    margin-right: 6px;
`;
