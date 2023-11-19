import styled from "styled-components";

export const CoffeCardContainer = styled.div`
    gap: 1.25rem;
    flex: 1;
`

export const CoffeCardInfos = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;

    div:first-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div:last-child{
        display: flex;
        justify-content: start;
        gap: 0.5rem;
    }
`

export const ButtonRemove =  styled.button`
    border: 0;
    border-radius: 6px;

    background-color: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["gray-800"]};

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;

    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1.6;
    font-weight: 400;

    padding: 0 0.5rem;

    cursor: pointer;

    svg{
        color: ${props => props.theme["purple-500"]};
    }

    &:hover{
        background-color: ${props => props.theme["gray-500"]};
    }
`