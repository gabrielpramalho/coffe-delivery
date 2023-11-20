

import { CoffeType } from "@/pages/Home/components/Coffe";
import { addNewItemAction } from "@/reducers/cart/actions";
import { cartReducer } from "@/reducers/cart/reducer";
import { ReactNode, createContext, useReducer } from "react";


export const CartContext = createContext({} as CartContextType)

interface CartContextType{
    coffes: CoffeType[];
    createNewItem: (data: CoffeType) => void
    amountItems: number;
}

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, dispatch] = useReducer(
        cartReducer, 
        {
            coffes: [],
            priceTotal: 0
        }
    );

    const {coffes } = cart

    const amountItems = coffes.length

    function createNewItem(data: CoffeType){
        dispatch(addNewItemAction(data))
    }

    return (
        <CartContext.Provider value={{ coffes, createNewItem, amountItems }}>
            {children}
        </CartContext.Provider>
    );
}