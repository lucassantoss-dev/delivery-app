import React from "react";
import { Text } from "../Text";
import { SaleInterface } from "../../types/Sale";
import { FlatList, Modal } from "react-native";
import {
    CloseButton,
    Image,
    ImageContainer,
    DescriptionsProvider,
    Status,
    Products,
    Ingredient,
    AddItems,
    PaymentMethod,
    Delivery,
    Type,
    Card,
    ImageCard,
    Address,
    Location
} from "./styles";
import { Close } from "../Icons/Close";
import AntDesign from '@expo/vector-icons/AntDesign';
import { formatCurrency } from "../../utils/formatCurrency";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface SaleModalProps {
    visible: boolean;
    onClose: () => void;
    sale: null | SaleInterface;
    // onAddToCart: (sale: SaleInterface) => void;
}

export default function SaleModal({ visible, onClose, sale }: SaleModalProps) {
    if (!sale) {
        return null;
    }

    return (
        <Modal
            visible={visible}
            animationType="slide"
            presentationStyle="pageSheet"
            onRequestClose={onClose}
        >
            <ImageContainer>
                <Image source={{
                    uri: `${sale.photo}`
                }}>
                </Image>
                <DescriptionsProvider>
                    <Text size={22} weight="600" style={{ marginBottom: 3 }}>{sale.provider}</Text>
                    <Text size={13}>Realizado em {new Date(sale.date).toLocaleDateString('pt-BR')}</Text>
                </DescriptionsProvider>
            </ImageContainer>
            <CloseButton onPress={onClose}>
                <Close />
            </CloseButton>
            <Status>
                <AntDesign name="checkcircle" size={16} color="green" style={{ marginRight: 8 }} />
                <Text size={16} color="#000">{sale.status === true ? 'Pedido concluído' : 'Pedido pendente'}</Text>
            </Status>
            <Products>
                <Text weight="600" color="#666" style={{ marginLeft: 18 }}>Itens do pedido</Text>
                <FlatList
                    data={sale.itensSale}
                    keyExtractor={ingredient => ingredient._id}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: 16 }}
                    renderItem={({ item: ingredient }) => (
                        <Ingredient>
                            <Text size={14} color="#666" style={{ marginLeft: 20 }}>{ingredient.name}</Text>
                            <Text size={14} color="#666">{formatCurrency(ingredient.price)}</Text>
                        </Ingredient>
                    )}
                />
                <Text size={17} weight="600" style={{ textAlign: 'right', marginTop: 10, marginRight: 12 }}>Total: <Text>{formatCurrency(sale.total)}</Text></Text>
                <AddItems>
                    <Text color="#D73035" weight="600">Adicionar ao carrinho</Text>
                </AddItems>
                <PaymentMethod>
                    <Text weight="600" color="#666" style={{ marginLeft: 18 }}>Pago pelo App</Text>
                    <Type>
                        <ImageCard source={{
                            uri: 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/BR-PT/mcbc_alimentacao-rev_84px.png'
                        }} />
                        <Card>
                            <Text size={15} weight="600">Débito</Text>
                            <Text size={12}>Mastercard Débito ****2122</Text>
                        </Card>
                    </Type>
                </PaymentMethod>
                <Delivery>
                    <Text weight="600" color="#666" style={{ marginLeft: 18, marginTop: 24 }}>Endereço de entrega</Text>
                    <Address>
                        <FontAwesome6 name="location-dot" size={24} color="#666" />
                        <Location>
                            <Text size={15} weight="600">Rua Dom Delgado, 222</Text>
                            <Text size={12}>Edson Queiroz, Fortaleza, CE</Text>
                            <Text size={12}>Próximo a avenida Edilson Brasil</Text>
                        </Location>
                    </Address>
                </Delivery>
            </Products>
        </Modal>
    )
}
