import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { AdressHeader, CheckoutContainer, FormContainer, InputFit, InputFull, InputMedium, InputSmall, InputsContainer, PaymentContainer, PaymentHeader, PaymentTypes, PaymentOption } from "./styles";
import { CartList } from "./component/CartList";
 
export function Checkout(){


    return(
        <form>
            <CheckoutContainer>
                <main>
                    <h3>Complete seu pedido</h3>

                    <FormContainer>
                        
                        <AdressHeader>
                            <MapPinLine size={22} />
                            <div>
                                <strong>Endereço de Entrega</strong>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </AdressHeader>
                        <InputsContainer>
                             <InputMedium type="text" name="zipcode" placeholder="CEP" required/>  
                             <InputFull type="text" name="street" placeholder="Rua" required/>  
                             <div>
                                <InputMedium type="numer" name="number" placeholder="Número" required/>  
                                <InputFit type="text" name="complement" placeholder="Complemento"/>  
                             </div>
                             <div>
                                <InputMedium type="text" name="district" placeholder="Bairro"/>  
                                <InputFit type="text" name="city" placeholder="Cidade"/>  
                                <InputSmall type="text" name="state" placeholder="UF"/>  
                             </div>
                        </InputsContainer>
                        
                    </FormContainer>

                    <PaymentContainer>
                        <PaymentHeader>
                            <CurrencyDollar size={22} />
                            <div>
                                <strong>Pamento</strong>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </PaymentHeader>

                        <PaymentTypes defaultValue="credit-card">
                            <PaymentOption value="credit-card">
                                <CreditCard size={16} />
                                <span>Cartão de Crédito</span>
                            </PaymentOption>
                            <PaymentOption value="debit-card">
                                <Bank size={16} />
                                <span>Cartão de Débito</span>
                            </PaymentOption>
                            <PaymentOption value="money">
                                <Money size={16} />
                                <span>Dinheiro</span>
                            </PaymentOption>

                        </PaymentTypes>
                    </PaymentContainer>
                </main>

                <aside>
                    <h3>Cafés selecionados</h3>

                    <CartList />
                </aside>
            </CheckoutContainer>
        </form>
    )
}