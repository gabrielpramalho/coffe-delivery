import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { AdressHeader, CheckoutContainer, FormContainer, InputFit, InputFull, InputMedium, InputSmall, InputsContainer, PaymentContainer, PaymentHeader, PaymentTypes, PaymentOption } from "./styles";
import { CartList } from "./component/CartList";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

const newAddressFormValidationSchema = zod.object({
    zipcode: zod.string().min(1).max(8),
    street: zod.string().min(1),
    number: zod.string().min(1),
    complement: zod.string().min(1),
    district: zod.string().min(1),
    city: zod.string().min(1),
    state: zod.string().min(1),
    paymentType: zod.enum(['credit-card', 'debit-card', 'money']),

})

export type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>
 
export function Checkout(){

    const { addNewAddress } = useContext(CartContext)

    const newAddressForm = useForm<NewAddressFormData>({
        resolver: zodResolver(newAddressFormValidationSchema),
        defaultValues:{
            zipcode: '',
            street: '',
            city: '',
            complement: '',
            district: '',
            number: '',
            state: '',
            paymentType: undefined

        }
    })

    const { handleSubmit, register, setValue } = newAddressForm

    const navigate = useNavigate()


    function handleCreateNewAddress(data: NewAddressFormData) {
        addNewAddress(data)
        navigate('/checkout/approved')
    }

    const handlePaymentTypeChange = (value: 'credit-card' | 'debit-card'| 'money') => {
        setValue('paymentType', value);
      };

    return(
        <form onSubmit={handleSubmit(handleCreateNewAddress)}>
            <CheckoutContainer>
                <FormProvider {...newAddressForm}>

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
                                <InputMedium type="text" placeholder="CEP" {...register('zipcode')} required/>  
                                <InputFull type="text" {...register('street')} placeholder="Rua" required/>  
                                <div>
                                    <InputMedium type="text" {...register('number')} placeholder="Número" required/>  
                                    <InputFit type="text" {...register('complement')} placeholder="Complemento"/>  
                                </div>
                                <div>
                                    <InputMedium type="text" {...register('district')} placeholder="Bairro"/>  
                                    <InputFit type="text" {...register('city')} placeholder="Cidade"/>  
                                    <InputSmall type="text" {...register('state')}  placeholder="UF"/>  
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

                            <PaymentTypes onValueChange={handlePaymentTypeChange}>
                                <PaymentOption value="credit-card" >
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
                </FormProvider>
            </CheckoutContainer>
        </form>
    )
}