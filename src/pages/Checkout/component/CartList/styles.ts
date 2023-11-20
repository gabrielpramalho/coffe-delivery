import styled from "styled-components";

export const CartListContainer = styled.div`
    background-color: ${props => props.theme["gray-200"]};
    border-radius: 6px 44px;
    padding: 2.5rem;

    div{
        display: flex;
    }
`

export const CartListPriceContainer = styled.div`
    padding-top: 1.5rem;
    align-self: stretch;
    flex-direction: column;

    gap: 0.75rem;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        span{
            font-size: 0.875rem;
            line-height: 1.3;
        }

        strong{
            font-size: 1.25rem;
            line-height: 1.3;

        }
    }
`

export const ButtonConfirm = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    margin-top: 1.5rem;

    padding: 0.75rem .5rem;

    background-color: ${props => props.theme["yellow-500"]};
    color: ${props => props.theme.white};

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
    
    border: 0;
    border-radius: 6px;

    cursor: pointer;
    &:hover{
        background-color: ${props => props.theme["yellow-700"]};
    }
`

export const CoffeeCardList = styled.div`
    flex-direction: column;

    gap: 1.5rem;
`