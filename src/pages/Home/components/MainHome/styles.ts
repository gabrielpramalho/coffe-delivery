import styled from "styled-components";

export const HomeContainer = styled.main`
    display: grid;
    grid-template-columns: 1.2fr 1fr;

    grid-gap: 3.5rem;

    align-items: center;
    place-items: center;

    padding-top: 5.875rem;
    padding-bottom: 6.625rem;

    @media(max-width: 988px){
        display: flex!important;
        flex-direction: column;
        padding: 0 2rem;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    h1{
        font-family: 'Baloo 2';
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.3;
    }

    p {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.3;
    }
`

export const AttributesHomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 4.125rem;
`

export const ItemAttributesHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    div{
        display: flex;
        gap: 1.25rem;
        align-items: center;
    }
`

const BaseIconHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    border-radius: 999px;
    color: ${props => props.theme["gray-100"]};
`

export const IconCoffee = styled(BaseIconHome)`
    background-color: ${props => props.theme["purple-500"]};
`
export const IconPackage = styled(BaseIconHome)`
    background-color: ${props => props.theme["gray-700"]};
`
export const IconTimer = styled(BaseIconHome)`
    background-color: ${props => props.theme["yellow-500"]};
`
export const IconCart = styled(BaseIconHome)`
    background-color: ${props => props.theme["yellow-700"]};
`