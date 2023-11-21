import { CoffeType } from "@/pages/Home/components/Coffe";
import { ActionTypes } from "./actions";
import { produce } from "immer";
import { NewAddressFormData } from "@/pages/Checkout";

export interface CartState{
    coffes: CoffeType[];
    priceTotal: number;
    address?: NewAddressFormData | null;
}

export function cartReducer(state: CartState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_ITEM:
            return produce(state, (draft)=> {
                draft.coffes.push(action.payload.newItem)
            });
        case ActionTypes.INCREASE_QUANTITY:{
            const currentCoffeIndex = state.coffes.findIndex((coffe) =>{
                return coffe.id == action.payload.id
            })

            if (currentCoffeIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.coffes[currentCoffeIndex].amount! += 1
            })
        }
        case ActionTypes.DECREASE_QUANTITY:{
            const currentCoffeIndex = state.coffes.findIndex((coffe) =>{
                return coffe.id == action.payload.id
            })

            if (currentCoffeIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                if(draft.coffes[currentCoffeIndex].amount! > 1){
                    draft.coffes[currentCoffeIndex].amount! -= 1
                }
            })
        }
        case ActionTypes.REMOVE_ITEM:{
            const currentCoffeIndex = state.coffes.findIndex((coffe) =>{
                return coffe.id == action.payload.id
            })

            if (currentCoffeIndex < 0) {
                return state
            }

            console.log("aqui")
            return produce(state, (draft) => {
                draft.coffes = draft.coffes.filter((coffe, index) => index !== currentCoffeIndex);
              });
        }
        case ActionTypes.ADD_NEW_ADDRESS:
            return produce(state, (draft) =>{
                draft.address = action.payload.newAddress
            })

        default:
            return state;
    }
}