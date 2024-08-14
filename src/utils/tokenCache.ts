import * as SecureStore from "expo-secure-store";

async function getToken(key: string) {
    try {
        const token = await SecureStore.getItemAsync(key);
        return token || null;
    } catch (error) {
        console.error("Erro ao recuperar o token:", error);
        return null;
    }
}

async function saveToken(key: string, value: string) {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (error) {
        console.error("Erro ao salvar o token:", error);
        throw error;
    }
}

export const tokenCache = { getToken, saveToken };
