import styled from "styled-components";

export const HeaderApproved = styled.div`
    padding-top: 5rem;

    display: flex;
    flex-direction: column;
    justify-content: start;

    gap: 0.25rem;

    h2{
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.3;

        color: ${props => props.theme["yellow-700"]};
    }

    p{
        font-size: 1.25rem;
        line-height: 1.3;

        color: ${props => props.theme["gray-800"]};
    }


`

export const ApprovedContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    align-items: center;

    justify-content: space-between ;

    padding-top: 2.5rem;
`

export const ResumeOrder = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 6px 36px;


    width: 32.875rem;

    align-items: flex-start;

    padding: 2.5rem;
    gap: 2rem;

    border: 1px solid #DBAC2C;
`

interface ItemResumeOrderProps{
    type: 'location' | 'timer' | 'payment'
}

const ItemResumeOrderVariants = {
    location: 'purple-500',
    timer: 'yellow-500',
    payment: 'yellow-700',
}

export const ItemResumeOrder = styled.div<ItemResumeOrderProps>`
    display: flex;
    align-items: center;

    gap: 1.25rem;

    div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${props => props.theme.white};

        ${props =>{
            return `background-color: ${props.theme[ItemResumeOrderVariants[props.type]]};`
        }}
        
        padding: 0.5rem;
        border-radius: 9999px;
    }

    div:last-child{
        display: flex;
        flex-direction: column;
    }
`