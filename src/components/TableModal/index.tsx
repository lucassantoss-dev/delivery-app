import { Modal, TouchableOpacity, Platform } from "react-native";
import { Text } from "../Text";

import { ModalBody, ModalForm, ModalHeader, Overlay, Input } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { api } from "../../utils/api";
import { TableInterface } from "../../types/Table";

interface TableModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
    const [table, setTable] = useState('');
    const [tables, setTables] = useState<TableInterface[]>([]);

    useEffect(() => {
        Promise.all([
            api.get('/table')
        ]).then(([tablesResponse]) => {
            setTables(tablesResponse.data.data);
        });
    }, [])

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
                        <Picker
                            selectedValue={table}
                            onValueChange={(itemValue) => setTable(itemValue)}
                            style={{ color: '#666', marginBottom: 15 }}
                        >
                            <Picker.Item label="Selecione uma mesa" value="" />
                            {tables.map((tableItem) => (
                                <Picker.Item key={tableItem._id} label={tableItem.table_number.toString()} value={tableItem.table_number.toString()} />
                            ))}
                        </Picker>
                        <Button onPress={handleSave} disabled={table.length === 0}>
                            Salvar
                        </Button>
                    </ModalForm>
                </ModalBody>
            </Overlay>
        </Modal>
    );
}
