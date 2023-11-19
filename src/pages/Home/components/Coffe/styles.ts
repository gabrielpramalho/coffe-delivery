import styled from "styled-components";

export const CoffeeCard = styled.article`
    width: 16rem;
    /* height: 19.375rem; */

    border-radius: 6px 36px;
    background-color: ${props => props.theme["gray-200"]};

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    header{
        margin-top: -2rem;
    }

    footer{
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 1.25rem;
        align-items: center;

        gap: .5rem;
    }
`

export const Tags = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    padding-top: 0.75rem;
    padding-bottom: 1rem;

    span{
        background-color: ${props => props.theme["yellow-300"]};
        color: ${props => props.theme["yellow-500"]};

        padding: 0.25rem 0.5rem;
        border-radius: 999px;

        font-size: 0.625rem;
        text-transform: uppercase;
        line-height: 1.3;
        font-weight: 700;
    }
`

export const CoffeInformation = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.5rem;

    align-items: center;
    justify-content: center;

    text-align: center;

    padding-bottom: 2rem;

    strong{
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.3;
    }

    p{
        font-size: 0.875rem;
        font-weight: 400;

        color: ${props => props.theme["gray-600"]};

        padding: 0 1.25rem;
    }

`

export const ContainerPrice = styled.div`
    display: flex;
    align-items: baseline;

    padding: 0 1.5rem;
    
    span{
        
        font-size: 0.75rem;
        margin-right: .2rem;
    }

    strong{
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 1.3;
    }

`

export const ButtonsActions = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border-radius: 6px;

    background-color: ${props => props.theme["gray-400"]};

    button{
        width: 1.25rem;
        border: 0;
        background-color: transparent;
        line-height: 1;

        cursor: pointer;

        color: ${props => props.theme["purple-500"]};

        &:focus{
            box-shadow: none;
        }

        &:hover{
            color: ${props => props.theme["purple-700"]};
        }
    }

    input{
        width: 1.35rem;
        border: 0;
        text-align: center;
        line-height: 1.3;
        background-color: transparent;
        appearance: none;
        /* For Firefox */
        -moz-appearance: none;

        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        font-weight: 400;

        &:focus{
            box-shadow: none;
        }
    }
`

export const ButtonBuy = styled.button`
    background-color: ${props => props.theme["purple-700"]};
    color: ${props => props.theme.white};
    line-height: 1;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    padding: 0.35rem;
    border-radius: 6px;

    &:hover{
        background-color: ${props => props.theme["purple-500"]};
    }

`