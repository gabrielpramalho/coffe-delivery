import { CoffeType } from "@/pages/Home/components/Coffe";
import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface CartState{
    coffes: CoffeType[];
    priceTotal: number;
}

export function cartReducer(state: CartState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_ITEM:
            return produce(state, (draft)=> {
                draft.coffes.push(action.payload.newItem)
            });
        default:
            return state;
    }
}