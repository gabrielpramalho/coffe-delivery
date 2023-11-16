import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/Logo.svg'
import { HeaderButtonContainer, HeaderContainer } from './styles'

export function Header(){

    const quatityItemsCart = 0

    const hasItemCart = quatityItemsCart > 0

    return(
        <HeaderContainer>
            <a href="/">
                <img src={logo} alt="" />
            </a>

            <HeaderButtonContainer>
                <div className='city'>
                    <MapPin size={22} weight='fill' />
                    <span>Bandeirantes, PR</span>
                </div>

                <div className='cart'>
                    {hasItemCart && <span>{quatityItemsCart}</span> }
                    <ShoppingCart size={22} weight='fill' />
                </div>
            </HeaderButtonContainer>
        </HeaderContainer>
    )
}