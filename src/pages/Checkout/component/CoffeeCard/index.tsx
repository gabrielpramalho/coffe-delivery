import { ButtonsActions } from '@/pages/Home/components/Coffe/styles'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { ButtonRemove, CoffeCardContainer, CoffeCardInfos } from './styles'
import { CoffeType } from '@/pages/Home/components/Coffe'

interface CoffeCardProps{
    coffe: CoffeType;
}

export function CoffeeCard({coffe}:CoffeCardProps){

    const price = (coffe.amount ?? 1) * coffe.price
    const priceString = String(price.toFixed(2)).replace('.', ',')

    function handleDecreaseQuantity(){
        console.log('-')
    }

    function handleIncreaseQuantity(){
        console.log('+')
    }

    return(
        <CoffeCardContainer>
            <img src={coffe.urlImage} alt="" width={64} />
            <CoffeCardInfos>
                <div>
                    <span>{coffe.name}</span>
                    <strong>
                        R$ {priceString}
                    </strong>
                </div>
                <div>
                    <ButtonsActions>
                        <button type="button" onClick={handleDecreaseQuantity}>
                            <Minus size={14} weight="bold"/>
                        </button>
                        <input  value={coffe.amount} readOnly />
                        <button type="button" onClick={handleIncreaseQuantity}>
                            <Plus size={14} weight="bold" />
                        </button>
                    </ButtonsActions>
                    <ButtonRemove type='button'>
                        <Trash size={16}/>

                        Remover
                    </ButtonRemove>
                </div>
            </CoffeCardInfos>
        </CoffeCardContainer>

    )
}