import { useContext } from "react";
import { CoffeeCard } from "../CoffeeCard";
import { ButtonConfirm, CartListContainer, CartListPriceContainer, CoffeeCardList } from "./styles";
import { CartContext } from "@/contexts/CartContext";

export function CartList(){

    const { coffes, amountItems, priceProducts, priceShipping, priceTotal } = useContext(CartContext)

    const hasItems = amountItems > 0

    const priceTotalItemsString = numberToString(priceProducts)

    const priceShippingString = numberToString(priceShipping)

    const priceTotalString = numberToString(priceTotal)


    function numberToString(num: number){
        return String(num.toFixed(2)).replace('.', ',')
    }


    return(
        <CartListContainer>
            <CoffeeCardList>
                { hasItems ?
                    coffes.map( coffe => <CoffeeCard key={coffe.id} coffe={coffe} />)
                :   
                    <p>Carrinho vazio!</p>
                }
            </CoffeeCardList>
            <CartListPriceContainer>
                <div>
                    <span>Total de itens</span>
                    <span>
                        R$ {priceTotalItemsString}
                    </span>
                </div>
                <div>
                    <span>Entrega</span>
                    <span>
                        R$ {priceShippingString}
                    </span>
                </div>
                <div>
                    <strong>Total</strong>
                    <strong>R$ {priceTotalString}</strong>
                </div>
            </CartListPriceContainer>
            <div>
                <ButtonConfirm type="submit">
                    Confirmar pedido
                </ButtonConfirm>
            </div>
        </CartListContainer>
    )
}