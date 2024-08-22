import { SaleInterface } from "./Sale";

export type RootStackParamList = {
    Ativos: { sales: SaleInterface[] };
    Finalizados: { sales: SaleInterface[] };
};
