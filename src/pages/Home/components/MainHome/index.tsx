import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import imgHome from '@/assets/Imagem.svg'
import { AttributesHomeContainer, HomeContainer, TitleContainer, ItemAttributesHomeContainer, IconCoffee, IconCart, IconTimer, IconPackage } from "./styles";


export function MainHome(){
    return(
        <HomeContainer>
        <div>
            <TitleContainer>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </TitleContainer>
            <div>
                <AttributesHomeContainer>
                    <ItemAttributesHomeContainer>
                        <div>
                            <IconCart>
                                <ShoppingCart size={16} weight="fill" />
                            </IconCart>
                            <span>Compra simples e segura</span>    
                        </div>
                        <div>
                            <IconTimer>
                                <Timer size={16} weight="fill" />
                            </IconTimer>
                            <span>Entrega rápida e rastreada</span>    
                        </div>

                    </ItemAttributesHomeContainer>
                    <ItemAttributesHomeContainer>
                        <div>
                            <IconPackage>
                                <Package size={16} weight="fill" />
                            </IconPackage>
                            <span>Embalagem mantém o café intacto</span>    
                        </div>
                        <div>
                            <IconCoffee>
                                <Coffee size={16} weight="fill" />
                            </IconCoffee>
                            <span>O café chega fresquinho até você</span>    
                        </div>
                    </ItemAttributesHomeContainer>

                </AttributesHomeContainer>
            </div>
        </div>
        <picture>
            <img src={imgHome} alt="" />
        </picture>
        
    </HomeContainer>
    )
}