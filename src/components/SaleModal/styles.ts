import styled from "styled-components/native";

export const Image = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    object-fit: contain;
    padding: 10px;
    margin-left: 20px;
    margin-top: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
    position: absolute;
    width: 32px;
    height: 32px;
    background: #D73035;
    top: 0;
    right: 0;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    margin: 24px;
`;

export const ImageContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const DescriptionsProvider = styled.View`
    margin-left: 8px;
`;

export const Status = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background-color: #f8f1f1;
    margin: 8px 24px;
    border-radius: 8px;
`;

export const Products = styled.View`
    margin-top: 32px;
`;

export const Ingredient = styled.View`
    border: 1px solid rgba(204, 204, 204, 0.3);
    border-radius: 8px;
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
`;

export const AddItems = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 26px 22px;
`;

export const PaymentMethod = styled.View``;

export const Delivery = styled.View``;

export const Type = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
    padding: 15px;
`;

export const Card = styled.View`
    margin-left: 8px;
`;

export const ImageCard = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    object-fit: contain;
    padding: 10px;
    margin-top: 10px;
`;

export const Address = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
    margin-top: 8px;
    padding: 15px;
`;
export const Location = styled.View`
    margin-left: 20px;
`;
