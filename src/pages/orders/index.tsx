import React, { useEffect, useState } from "react";
import { Text } from "../../components/Text";
import {
    Sale,
    ProductDetails,
    ProviderImage,
    Separator,
    DateOrder,
    ButtonsOrder,
    ResumeButton
} from "./syles";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../../components/Button";
import { SaleInterface } from "../../types/Sale";
import { FlatList } from "react-native";
import { api } from "../../utils/api";
import SaleModal from "../../components/SaleModal";

export default function Orders() {
    const [sales, setSales] = useState<SaleInterface[]>([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedSale, setSelectedSale] = useState<null | SaleInterface>(null);

    function handleOpenModal(sale: SaleInterface) {
        setIsModalVisible(true)
        setSelectedSale(sale)
    }

    useEffect(() => {
        Promise.all([
            api.get('/sale')
        ]).then(([salesResponse]) => {
            setSales(salesResponse.data.data)
        });
    }, []);

    return (
        <>
            <SaleModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                sale={selectedSale}
            >

            </SaleModal>
            <FlatList
                data={sales}
                style={{ marginTop: 32, padding: 10 }}
                contentContainerStyle={{}}
                keyExtractor={sale => sale._id}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={({ item: sale }) => (
                    <>
                        <Sale>
                            <ProviderImage
                                source={{
                                    uri: `${sale.photo}`
                                }}
                            />
                            <ProductDetails>
                                <Text size={18} weight="600">{sale.provider}</Text>
                                <Text size={15} color="#15c71e" weight="600">{sale.status === true ? 'Pedido finalizado' : 'Pedido pendente'}</Text>
                                <Text size={14}>{sale.code}</Text>
                                <DateOrder>
                                    <Text size={15} color="#000">{new Date(sale.date).toLocaleDateString('pt-BR')}</Text>
                                    <FontAwesome name="circle" size={8} color="#000" style={{ marginRight: 8, marginLeft: 12 }} />
                                    <Text>{formatCurrency(sale.total)}</Text>
                                </DateOrder>
                                <ButtonsOrder>
                                    <ResumeButton onPress={() => handleOpenModal(sale)}>
                                        <Text size={16} color="#D73035" weight="600">Resumo</Text>
                                    </ResumeButton>
                                    <Button onPress={() => { }}>Refazer</Button>
                                </ButtonsOrder>
                            </ProductDetails>
                        </Sale>
                    </>
                )}
            />
        </>
    )
}
