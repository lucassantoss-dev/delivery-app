import React from "react";
import { Text } from "../../../../../../components/Text";
import { ExpiredCounponsContainer } from "./styles";

export default function ExpiredCoupons() {
    return (
        <ExpiredCounponsContainer>
            <Text size={24} weight="600">Sem cupons expirados</Text>
            <Text size={14} color="#807e7e">Não existem cupons inativos para seu usuário</Text>
        </ExpiredCounponsContainer>
    )
}
