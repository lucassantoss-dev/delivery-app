import {
    Container,
    CategoriesContainer,
    MenuContainer,
    Footer,
    FooterContainer,
    CenteredContainer
} from './styles'
import { Header } from '../../components/Header';
import { Categories } from '../../components/Categories';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';
import { TableModal } from '../../components/TableModal';
import { useEffect, useState } from 'react';
import { Cart } from '../../components/Cart';
import { CartItem } from '../../types/cartItem';
import { ProductInterface } from '../../types/Product';
import { ActivityIndicator } from 'react-native';
import { Empty } from '../../components/Icons/Empty';
import { Text } from '../../components/Text';
import { CategoryInterface } from '../../types/Category';
import { api } from '../../utils/api';

export default function Main() {
    const [isTableModalVisible, setIstTableModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTable, setSelectedTable] = useState('');
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    useEffect(() => {
        Promise.all([
            api.get('/category'),
            api.get('/product')
        ]).then(([categoriesResponse, productsResponse]) => {
            setCategories(categoriesResponse.data.data);
            setProducts(productsResponse.data.data);
            setIsLoading(false);
        });
    }, []);

    async function handleSelectCategory(categoryId: string) {
        const route = !categoryId
            ? '/product'
            : `/product/category/${categoryId}`;

        setIsLoadingProducts(true);
        const { data } = await api.get(route);
        setProducts(data.data);
        setIsLoadingProducts(false);
    }

    function handleSaveTable(table: string) {
        setSelectedTable(table);
    }

    function handleResetOrder() {
        setSelectedTable('');
        setCartItems([]);
    }

    function handleAddToCart(product: ProductInterface) {
        if (!selectedTable) {
            setIstTableModalVisible(true);
        }
        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

            if (itemIndex < 0) {
                return prevState.concat({
                    quantity: 1,
                    product
                })
            }

            const newCartItems = [...prevState];
            const item = newCartItems[itemIndex];

            newCartItems[itemIndex] = {
                ...item,
                quantity: item.quantity + 1
            };

            return newCartItems;
        })
    }

    function handleDecrementCartItem(product: ProductInterface) {
        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

            const item = prevState[itemIndex];
            const newCartItems = [...prevState];

            if (item.quantity === 1) {
                newCartItems.splice(itemIndex, 1);

                return newCartItems;
            }

            newCartItems[itemIndex] = {
                ...item,
                quantity: item.quantity - 1
            };

            return newCartItems;
        })
    }

    return (
        <>
            <Container>
                <Header
                    selectedTable={selectedTable}
                    onCancelOrder={handleResetOrder}
                />
                {isLoading && (
                    <CenteredContainer>
                        <ActivityIndicator color="#D73035" size="large" />
                    </CenteredContainer>
                )}
                {!isLoading && (
                    <>
                        <CategoriesContainer>
                            <Categories
                                categories={categories}
                                onSelectCategory={handleSelectCategory}
                            />
                        </CategoriesContainer>

                        {isLoadingProducts ? (
                            <CenteredContainer>
                                <ActivityIndicator color="#D73035" size="large" />
                            </CenteredContainer>
                        ) : (
                            <>
                                {products.length > 0 ? (
                                    <MenuContainer>
                                        <Menu
                                            onAddToCart={handleAddToCart}
                                            products={products}
                                        />
                                    </MenuContainer>
                                ) : <CenteredContainer>
                                    <Empty />
                                    <Text color="#666" style={{ marginTop: 24 }}>Nenhum produto foi encontrado</Text>
                                </CenteredContainer>}
                            </>
                        )}
                    </>
                )}

            </Container>
            <Footer>
                <FooterContainer>
                    {!selectedTable && (
                        <Button
                            onPress={() => setIstTableModalVisible(true)}
                            disabled={isLoading}
                        >
                            Novo Pedido
                        </Button>
                    )}

                    {selectedTable && (
                        <Cart
                            onAdd={handleAddToCart}
                            cartItems={cartItems}
                            onDecrement={handleDecrementCartItem}
                            onConfirmOrder={handleResetOrder}
                            selectedTable={selectedTable}
                        />
                    )}
                </FooterContainer>
            </Footer>

            <TableModal
                visible={isTableModalVisible}
                onClose={() => setIstTableModalVisible(false)}
                onSave={handleSaveTable}
            />
        </>
    )
}
