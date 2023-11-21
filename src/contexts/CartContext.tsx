

import { CoffeType } from "@/pages/Home/components/Coffe";
import { addNewItemAction, decreaseQuantityAction, increaseQuantityAction, removeItemAction } from "@/reducers/cart/actions";
import { cartReducer } from "@/reducers/cart/reducer";
import { ReactNode, createContext, useReducer } from "react";


export const CartContext = createContext({} as CartContextType)

interface CartContextType{
    coffes: CoffeType[];
    amountItems: number;
    priceShipping: number;
    priceProducts: number;
    priceTotal: number;
    createNewItem: (data: CoffeType) => void
    increaseQuantity: (id: string) => void
    decreaseQuantity: (id: string) => void
    removeItem: (id: string) => void
}

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, dispatch] = useReducer(
        cartReducer, 
        {
            coffes: [],
            priceTotal: 0,
        }
    );

    const {coffes} = cart

    const amountItems = coffes.length

    const priceShipping = 2;

    const priceProducts = coffes.reduce((sum, coffe) =>{
        return sum + (coffe.amount ? coffe.price * coffe.amount : coffe.price )
    }, 0)

    const priceTotal = priceShipping + priceProducts


    function createNewItem(data: CoffeType){
        dispatch(addNewItemAction(data))
    }

    function increaseQuantity(id: string){
        dispatch(increaseQuantityAction(id))
    }

    function decreaseQuantity(id: string){
        dispatch(decreaseQuantityAction(id))
    }

    function removeItem(id: string){
        dispatch(removeItemAction(id))
    }

    return (
        <CartContext.Provider 
            value={
                { 
                    coffes,
                    amountItems,
                    priceProducts,
                    priceShipping,
                    priceTotal,
                    createNewItem, 
                    increaseQuantity,
                    decreaseQuantity,
                    removeItem
                }
                }>
            {children}
        </CartContext.Provider>
    );
}