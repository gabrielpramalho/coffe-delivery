import { CoffeeCard } from "../CoffeeCard";
import { ButtonConfirm, CartListContainer, CartListPriceContainer } from "./styles";

export function CartList(){

    const priceTotalItems = 29.70;
    const priceTotalItemsString = String(priceTotalItems.toFixed(2)).replace('.', ',')

    const priceShipping = 3.50
    const priceShippingString = String(priceShipping.toFixed(2)).replace('.', ',')


    return(
        <CartListContainer>
            <div>
                <CoffeeCard />
            </div>
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