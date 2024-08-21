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

export default function Orders() {
    const [sales, setSales] = useState<SaleInterface[]>([])

    useEffect(() => {
        Promise.all([
            api.get('/sale')
        ]).then(([salesResponse]) => {
            setSales(salesResponse.data.data)
        });
    }, []);

    return (
        <>
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
                                <Text weight="600">{sale.provider}</Text>
                                <Text size={15} color="#15c71e" weight="600">{sale.status === true ? 'Pedido finalizado' : 'Pedido pendente'}</Text>
                                <Text size={14} weight="600">{sale.code}</Text>
                                <DateOrder>
                                    <Text size={15} color="#000" weight="600">{new Date(sale.date).toLocaleDateString('pt-BR')}</Text>
                                    <FontAwesome name="circle" size={8} color="#000" style={{ marginRight: 8, marginLeft: 12 }} />
                                    <Text>{formatCurrency(sale.total)}</Text>
                                </DateOrder>
                                <ButtonsOrder>
                                    <ResumeButton><Text size={16} color="#D73035" weight="600">Resumo</Text></ResumeButton>
                                    <Button onPress={() => { }}>Refazer</Button>
                                </ButtonsOrder>
                            </ProductDetails>
                        </Sale>
                        {/* <OrdersContainer>
                            <IconWrapper>
                                <ImageConfiguration source={{ uri: sale.photo }} />
                            </IconWrapper>
                            <Separator>
                                <OrderProvider>
                                    <Text size={18} weight="600" style={{ marginLeft: 18, marginBottom: 10, marginTop: 10 }}>{sale.provider}</Text>
                                </OrderProvider>
                                <StatusOrder>
                                    <Text size={15} color="#15c71e" weight="600">{sale.status === true ? 'Pedido finalizado' : 'Pedido pendente'}</Text>
                                </StatusOrder>
                                <CodeOrder>
                                    <Text size={14} weight="600" style={{marginLeft: 12}}>{sale.code}</Text>
                                </CodeOrder>
                                <DateOrder>
                                    <Text size={15} color="#000" weight="600">{new Date(sale.date).toLocaleDateString('pt-BR')}</Text>
                                    <FontAwesome name="circle" size={8} color="#000" style={{ marginRight: 8, marginLeft: 12 }} />
                                    <Text>{formatCurrency(sale.total)}</Text>
                                </DateOrder>
                                <ButtonsOrder>
                                    <ResumeButton><Text size={16} color="#D73035" weight="600">Resumo</Text></ResumeButton>
                                    <Button onPress={() => { }}>Refazer</Button>
                                </ButtonsOrder>
                            </Separator>
                        </OrdersContainer> */}
                    </>
                )}
            />
        </>
    )
}
