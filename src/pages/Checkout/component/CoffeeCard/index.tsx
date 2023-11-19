import imgExample from '@/assets/capuccino.svg'
import { ButtonsActions } from '@/pages/Home/components/Coffe/styles'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { ButtonRemove, CoffeCardContainer, CoffeCardInfos } from './styles'

export function CoffeeCard(){

    function handleDecreaseQuantity(){
        console.log('-')
    }

    function handleIncreaseQuantity(){
        console.log('+')
    }

    return(
        <CoffeCardContainer>
            <img src={imgExample} alt="" width={64} />
            <CoffeCardInfos>
                <div>
                    <span>Latte</span>
                    <strong>
                        R$ 19,80
                    </strong>
                </div>
                <div>
                    <ButtonsActions>
                        <button type="button" onClick={handleDecreaseQuantity}>
                            <Minus size={14} weight="bold"/>
                        </button>
                        <input  value="1" readOnly />
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