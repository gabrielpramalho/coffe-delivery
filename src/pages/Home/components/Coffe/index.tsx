import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeInformation, CoffeeCard, Tags, ContainerPrice, ButtonsActions, ButtonBuy } from "./styles";

interface CoffeType{
    id: string;
    name: string;
    urlImage: string;
    tags: string[];
    description: string;
    price: number;
}

interface CoffeProps{
    coffe: CoffeType
}

export function Coffe({coffe}:CoffeProps){

    //TODO - deixar duas casa
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
                    <button type="button"><Minus size={14} weight="bold"/></button>
                    <input  value={1} readOnly />
                    <button type="button"><Plus size={14} weight="bold" /></button>
                </ButtonsActions>
                
                <ButtonBuy>
                    <ShoppingCartSimple size={22} weight="fill" />
                </ButtonBuy>
            </footer>
        </CoffeeCard>
    )
}