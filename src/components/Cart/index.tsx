import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/cartItem";
import {
    Item,
    ProductContainer,
    Actions,
    Image,
    QuantityContainer,
    ProductDetails,
    Summary,
    TotalContainer
} from "./styles";
import { Text } from "../Text";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { Button } from "../Button";
import { ProductInterface } from "../../types/Product";
import { OrderConfirmedModal } from "../OrderConfirmedModal";
import { useState } from "react";
import { api } from "../../utils/api";

interface CartProps {
    cartItems: CartItem[];
    onAdd: (product: ProductInterface) => void;
    onDecrement: (product: ProductInterface) => void;
    onConfirmOrder: () => void;
    selectedTable: string
}

export function Cart({ cartItems, onAdd, onDecrement, onConfirmOrder, selectedTable }: CartProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const total = cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.quantity * cartItem.product.price;
    }, 0);

    async function handleConfirmOrder() {
        setIsLoading(true);
        const payload = {
            // tableId: selectedTable,
            tableId: '65f9ce26eefaa8b070925109',
            itensSale: cartItems.map((cartItem) => (cartItem.product._id))
        };
        await api.post('/sale/addItem', payload);
        setIsLoading(false);
        setIsModalVisible(true)
    }

    function handleOk() {
        onConfirmOrder();
        setIsModalVisible(false);
    }

    return (
        <>
            <OrderConfirmedModal
                onOk={handleOk}
                visible={isModalVisible}
            />
            {cartItems.length > 0 && (
                <FlatList
                    data={cartItems}
                    keyExtractor={cartItem => cartItem.product._id}
                    style={{ marginBottom: 20, maxHeight: 140 }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: cartItem }) => (
                        <Item>
                            <ProductContainer>
                                <Image source={{ uri: `${cartItem.product.image}` }} />

                                <QuantityContainer>
                                    <Text size={14} color="#666">
                                        {cartItem.quantity}x
                                    </Text>
                                </QuantityContainer>
                                <ProductDetails>
                                    <Text size={14} weight="600">{cartItem.product.name}</Text>
                                    <Text size={14} color="#666" style={{ marginTop: 4 }}>{formatCurrency(cartItem.product.price)}</Text>
                                </ProductDetails>
                            </ProductContainer>
                            <Actions>
                                <TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
                                    <MinusCircle></MinusCircle>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => onAdd(cartItem.product)}
                                    style={{ marginLeft: 24 }}>
                                    <PlusCircle></PlusCircle>
                                </TouchableOpacity>
                            </Actions>
                        </Item>
                    )}
                />
            )}
            <Summary>
                <TotalContainer>
                    {cartItems.length > 0 ? (
                        <>
                            <Text color="#666">Total</Text>
                            <Text size={20} weight="600">{formatCurrency(total)}</Text>
                        </>
                    ) : (
                        <Text color="#999">Seu carrinho está vazio</Text>
                    )}
                </TotalContainer>

                <Button
                    onPress={handleConfirmOrder}
                    disabled={cartItems.length === 0}
                    loading={isLoading}
                >
                    Confirmar pedido
                </Button>
            </Summary>
        </>
    );
}
