import { toast } from "sonner";
import { Product } from "@/store/types/storeTypes";

export const showToastMessage = (item: Product) => 
    item.quantity === 1 && toast.info(`Solo tienes 1 producto en ${item.category} ${item.categorySpec}, te recomendamos añadir más`) 
