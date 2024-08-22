import React, { useEffect, useState } from "react";
import { Text } from "../../../../components/Text";
import { ActiveCardContent, ActiveCouponsContainer, ActiveFooter, RulesContainer, Separator, Subtitle, Title } from "./syles";
import { FlatList, TouchableOpacity } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../../../types/OrderProvider";
import { SaleInterface } from "../../../../types/Sale";
import { api } from "../../../../utils/api";

type ActivedOrdersRouteProp = RouteProp<RootStackParamList, 'Ativos'>;

export default function ActivedOrders() {
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
        <ActiveCouponsContainer>
            <FlatList
                data={sales}
                style={{ marginTop: 0, padding: 1 }}
                contentContainerStyle={{}}
                keyExtractor={sale => sale._id}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={({ item: sale }) =>
                (
                    <>
                        <ActiveCardContent>
                            <Title>
                                <Text size={18} weight="600">{sale.provider}</Text>
                            </Title>
                            <Subtitle>
                                <Text size={14} color="#6b6868">{sale.table}</Text>
                            </Subtitle>
                            <ActiveFooter>
                                <Text size={14} color="#6b6868">{new Date(sale.date).toLocaleDateString('pt-BR', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}</Text>
                            </ActiveFooter>
                        </ActiveCardContent>
                    </>
                )}
            />
        </ActiveCouponsContainer>
    )
}
