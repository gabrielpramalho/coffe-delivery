import { ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'

export function Header(){
    return(
        <HeaderContainer>
            <a href="/">
                <img src={logo} alt="" />
            </a>

            <div>
                <div>
                    <span>Bandeirantes, PR</span>
                </div>

                <div>
                    <ShoppingCart size={22} weight='fill' />
                </div>
            </div>
        </HeaderContainer>
    )
}