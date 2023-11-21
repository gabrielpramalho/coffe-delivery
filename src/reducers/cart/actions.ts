import { NewAddressFormData } from "@/pages/Checkout";
import { CoffeType } from "@/pages/Home/components/Coffe";

export enum ActionTypes {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
    INCREASE_QUANTITY = 'INCREASE_QUANTITY',
    DECREASE_QUANTITY = 'DECREASE_QUANTITY',
    REMOVE_ITEM = 'REMOVE_ITEM',
    ADD_NEW_ADDRESS = 'ADD_NEW_ADDRESS'

}


export function addNewItemAction(newItem: CoffeType) {
    return {
        type: ActionTypes.ADD_NEW_ITEM,
        payload: {
            newItem,
        },
    }
}

export function increaseQuantityAction(id: string){
    return{
        type: ActionTypes.INCREASE_QUANTITY,
        payload:{
            id,
        }
    }
}

export function decreaseQuantityAction(id: string){
    return{
        type: ActionTypes.DECREASE_QUANTITY,
        payload:{
            id,
        }
    }
}
export function removeItemAction(id: string){
    return{
        type: ActionTypes.REMOVE_ITEM,
        payload:{
            id,
        }
    }
}

export function addNewAddressAction(newAddress: NewAddressFormData){
    return{
        type: ActionTypes.ADD_NEW_ADDRESS,
        payload:{
            newAddress,
        }
    }
}