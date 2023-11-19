import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const CheckoutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 28rem;

    gap: 2rem;

    h3{
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 1rem;
    }
`

export const FormContainer = styled.div`
    background-color: ${props => props.theme["gray-200"]};
    border-radius: 6px;
    padding: 2.5rem;

`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding-top: 2rem;

    gap: 1rem;

    div{
        display: flex;
        gap: 0.75rem;
    }
`

const baseInput = styled.input`
    padding: 0.75rem;
    
    background-color: ${props => props.theme["gray-300"]};
    border: 1px solid ${props => props.theme["gray-400"]};

    border-radius: 4px;

    font-size: 0.875rem;
    line-height: 1.3;

    &:focus{
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']}!important;
    }

    &::placeholder{
        color: ${props => props.theme["gray-600"]};
    }
`

export const InputFull = styled(baseInput)`
    width: 100%;
`
export const InputMedium = styled(baseInput)`
    width: 40%;
`
export const InputSmall = styled(baseInput)`
    width: 10%;
`
export const InputFit = styled(baseInput)`
    flex: 1;
`


const headerBase = styled.header`
    display: flex;
    align-items: flex-start;

    gap: 0.5rem;

    strong{
        font-weight: 400;
        line-height: 1.3;
    }

    p{
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${props => props.theme["gray-700"]};
    }
`

export const AdressHeader = styled(headerBase)`
    svg {
        color: ${props => props.theme["yellow-700"]};
    }
`
export const PaymentHeader = styled(headerBase)`
    svg {
        color: ${props => props.theme["purple-500"]};
    }
`

export const PaymentContainer = styled.div`
    padding-top: 0.75rem;
    background-color: ${props => props.theme["gray-200"]};
    border-radius: 6px;
    padding: 2.5rem;

`

export const PaymentTypes = styled(RadioGroup.Root)`
    display: flex;
    padding-top: 2rem;
    gap: 0.75rem;
`

export const PaymentOption = styled(RadioGroup.Item)`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;

    gap: 0.75rem;
    padding: 1rem;
    flex: 1 0 0;

    border: 0;
    border-radius: 6px;

    background-color: ${props => props.theme["gray-400"]};

    cursor: pointer;

    svg{
        color: ${props => props.theme["purple-500"]};
    }

    &:hover{
        background-color: ${props => props.theme["gray-500"]};
    }

    &[data-state='checked']{
        background-color: ${props => props.theme["purple-300"]};
        border: 1px solid ${props => props.theme["purple-500"]};
    }

`