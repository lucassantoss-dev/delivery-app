import { FlatList, TouchableOpacity } from "react-native";

import { Text } from "../Text";

import { Product, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles'
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { useState } from "react";
import { ProductInterface } from "../../types/Product";

interface MenuProps {
    onAddToCart: (product: ProductInterface) => void;
    products: ProductInterface[];
}

export function Menu({ onAddToCart, products }: MenuProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<null | ProductInterface>(null);

    function handleOpenModal(product: ProductInterface) {
        setIsModalVisible(true)
        setSelectedProduct(product)
    }

    return (
        <>
            <ProductModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                product={selectedProduct}
                onAddToCart={onAddToCart}
            >

            </ProductModal>
            <FlatList
                data={products}
                style={{ marginTop: 32 }}
                contentContainerStyle={{ paddingHorizontal: 24 }}
                keyExtractor={product => product._id}
                ItemSeparatorComponent={Separator}
                renderItem={({ item: product }) => (
                    <Product onPress={() => handleOpenModal(product)}>
                        <ProductImage
                            source={{
                                uri: `${product.image}`
                            }}
                        />
                        <ProductDetails>
                            <Text weight="600">{product.name}</Text>
                            <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                                {product.description}
                            </Text>
                            <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
                        </ProductDetails>

                        <AddToCartButton onPress={() => onAddToCart(product)}>
                            <PlusCircle />
                        </AddToCartButton>
                    </Product>
                )}
            />
        </>
    )
}
