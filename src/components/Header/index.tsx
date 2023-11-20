import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/Logo.svg'
import { HeaderButtonContainer, HeaderContainer } from './styles'
import { Link } from 'react-router-dom'
import { CartContext } from '@/contexts/CartContext'
import { useContext } from 'react'

export function Header(){

    const { amountItems } = useContext(CartContext)

    const quantityItemsCart = amountItems

    const hasItemCart = quantityItemsCart > 0

    return(
        <HeaderContainer>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>

            <HeaderButtonContainer>
                <div className='city'>
                    <MapPin size={22} weight='fill' />
                    <span>Bandeirantes, PR</span>
                </div>

                <Link to="/checkout" className='cart'>
                    {hasItemCart && <span>{quantityItemsCart}</span> }
                    <ShoppingCart size={22} weight='fill' />
                </Link>
            </HeaderButtonContainer>
        </HeaderContainer>
    )
}