import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeInformation, CoffeeCard, Tags, ContainerPrice, ButtonsActions, ButtonBuy } from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/CartContext";

export interface AddressType{
    zipcode: string,
    street: string,
    city: string,
    complement: string,
    district: string,
    number: string,
    state: string,
    paymentType: 'credit-card' | 'debit-card' | 'money' 

}

export interface CoffeType{
    id: string;
    name: string;
    urlImage: string;
    tags: string[];
    description: string;
    price: number;
    amount?: number
}

interface CoffeProps{
    coffe: CoffeType
}

export function Coffe({coffe}:CoffeProps){

    const {createNewItem} = useContext(CartContext)

    const [quantity, setQuantity] = useState(1)

    function handleIncreaseQuantity(){
        setQuantity(
            state => state + 1
        )
    }

    function handleDecreaseQuantity(){
        setQuantity(
            state => {
                if(state==1){
                    return state
                }else{
                    return state - 1
                }
            }
        )
    }

    function handleAddCart(){
        const newCoffe = {
            ...coffe,
            amount: quantity
        }

        createNewItem(newCoffe)
    }

    const priceString = String(coffe.price.toFixed(2)).replace('.',',')

    return(
        <CoffeeCard>
            <header>
                <img src={coffe.urlImage} alt="" />
            </header>
            <Tags>
            {
                coffe.tags.map(tag => <span key={tag} >{tag}</span>)
            }
            </Tags>
            <CoffeInformation>
                <strong>{coffe.name}</strong>
                <p>{coffe.description}</p>
            </CoffeInformation>
            <footer>
                <ContainerPrice>
                    <span>R$</span> 
                    <strong>{priceString}</strong>
                </ContainerPrice>
                <ButtonsActions>
                    <button type="button" onClick={handleDecreaseQuantity}>
                        <Minus size={14} weight="bold"/>
                    </button>
                    <input  value={quantity} readOnly />
                    <button type="button" onClick={handleIncreaseQuantity}>
                        <Plus size={14} weight="bold" />
                        </button>
                </ButtonsActions>
                
                <ButtonBuy onClick={handleAddCart}>
                    <ShoppingCartSimple size={22} weight="fill" />
                </ButtonBuy>
            </footer>
        </CoffeeCard>
    )
}