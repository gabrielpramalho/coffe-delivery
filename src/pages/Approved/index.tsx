import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { HeaderApproved, ApprovedContainer, ResumeOrder, ItemResumeOrder } from "./styles";
import ilustration from '@/assets/Illustration.svg'
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export function Approved(){
    
    const { address } = useContext(CartContext)

    const completeAddress = `${address?.street}, ${address?.number}`
    const compleCityAddress = `${address?.district} - ${address?.city}, ${address?.state}`

    const payments = {
        'money': 'Dinheiro',
        'credit-card': 'Cartão de Crédito',
        'debit-card' : 'Cartão de Débito'
    }

    
    return(
        <div>
            <HeaderApproved>
                <h2>Uhu! Pedido confirmado!</h2>

                <p>Agora é só aguardar que logo o café chegará até você</p>
            </HeaderApproved>

            <ApprovedContainer>
                <ResumeOrder>
                    <ItemResumeOrder type="location">
                        <div>
                            <MapPin size={16} weight="fill"/>
                        </div>
                        <div>
                            <span>{completeAddress}</span>
                            <span>{compleCityAddress}</span>
                        </div>
                    </ItemResumeOrder>
                    <ItemResumeOrder type="timer">
                        <div>
                            <Timer size={16} weight="fill"/>
                        </div>
                        <div>
                            <span>Previsão de Entrega</span>
                            <strong>20 min - 30 min</strong>
                        </div>
                    </ItemResumeOrder>
                    <ItemResumeOrder type="payment">
                        <div>
                            <CurrencyDollar size={16}/>
                        </div>
                        <div>
                            <span>Pagamento na entrega</span>
                            <strong>{address?.paymentType && payments[address?.paymentType]}</strong>
                        </div>
                    </ItemResumeOrder>
                </ResumeOrder>

                <picture>
                    <img src={ilustration} alt="" />
                </picture>
            </ApprovedContainer>

        </div>
    )
}