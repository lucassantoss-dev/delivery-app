import React, { useState } from "react";
import { Text } from "../../../../../../components/Text";
import {
    ActiveCouponsContainer,
    ActiveCardContent,
    Title,
    Subtitle,
    RulesContainer,
    ActiveFooter
} from "./styles";
import { TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ActiveCoupons() {
    const [showRules, setShowRules] = useState(false);

    const toggleRules = () => {
        setShowRules(!showRules);
    };
    return (
        <ActiveCouponsContainer>
            <ActiveCardContent>
                <Title>
                    <MaterialIcons name="discount" size={24} color="#D73035" style={{ marginRight: 8 }} />
                    <Text size={18} weight="600">Fretezero</Text>
                </Title>
                <Subtitle>
                    <Text size={14} color="#6b6868">fretezero</Text>
                </Subtitle>
                <ActiveFooter>
                <TouchableOpacity onPress={toggleRules}>
                    <Text size={15} weight="600" color="#D73035">
                        {showRules ? 'Ocultar regras' : 'Ver regras'}
                    </Text>
                </TouchableOpacity>
                <Text size={14} color="#6b6868">Acaba em 5d 12h 33m</Text>
                </ActiveFooter>
                {showRules && (
                    <RulesContainer>
                        <Text size={14} color="#6b6868" style={{marginBottom: 4}}>- Limite de usos por usuário: 5.</Text>
                        <Text size={14} color="#6b6868">- Data de validade: 24/08/2024 23:59 ou até atingir a quantidade de cupons disponíveis.</Text>
                    </RulesContainer>
                )}
            </ActiveCardContent>
        </ActiveCouponsContainer>
    )
}
