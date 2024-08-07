import { Modal, TouchableOpacity, Platform } from "react-native";
import { Text } from "../Text";

import { ModalBody, ModalForm, ModalHeader, Overlay, Input } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { useState } from "react";

interface TableModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
    const [table, setTable] = useState('');

    function handleSave() {
        setTable('');
        onSave(table);
        onClose();
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                <ModalBody>
                    <ModalHeader>
                        <Text weight="600">Informe a mesa</Text>

                        <TouchableOpacity onPress={onClose}>
                            <Close color="666" />
                        </TouchableOpacity>
                    </ModalHeader>
                    <ModalForm>
                        <Input
                            placeholder="Número da mesa"
                            placeholderTextColor="#666"
                            keyboardType="number-pad"
                            onChangeText={setTable}
                        />

                        <Button onPress={handleSave} disabled={table.length === 0}>
                            Salvar
                        </Button>
                    </ModalForm>
                </ModalBody>
            </Overlay>
        </Modal>
    );
}
