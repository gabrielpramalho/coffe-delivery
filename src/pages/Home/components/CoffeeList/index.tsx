import { Coffe } from "../Coffe";
import { CardsContainer, CoffeListContainer } from "./styles";

import coffeList from '@/json/coffeList.json'

export function CoffeeList(){
    return(
        <CoffeListContainer>
            <h2>Nossos Cafés</h2>
        
            <CardsContainer>

                {
                    coffeList.map( coffe => <Coffe key={coffe.id} coffe={coffe} />)
                }
                
            </CardsContainer>
        </CoffeListContainer>
    )
}