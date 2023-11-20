import { CoffeType } from "@/pages/Home/components/Coffe";

export enum ActionTypes {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
}


export function addNewItemAction(newItem: CoffeType) {
    return {
        type: ActionTypes.ADD_NEW_ITEM,
        payload: {
            newItem,
        },
    }
}