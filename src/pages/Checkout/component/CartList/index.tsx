import { useContext } from "react";
import { CoffeeCard } from "../CoffeeCard";
import { ButtonConfirm, CartListContainer, CartListPriceContainer, CoffeeCardList } from "./styles";
import { CartContext } from "@/contexts/CartContext";

export function CartList(){

    const { coffes, amountItems } = useContext(CartContext)

    const hasItems = amountItems > 0

    const priceTotalItems = 29.70;
    const priceTotalItemsString = String(priceTotalItems.toFixed(2)).replace('.', ',')

    const priceShipping = 3.50
    const priceShippingString = String(priceShipping.toFixed(2)).replace('.', ',')


    return(
        <CartListContainer>
            <CoffeeCardList>
                { hasItems ?
                    coffes.map( coffe => <CoffeeCard coffe={coffe} />)
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
                    <strong>R$ 33,20</strong>
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