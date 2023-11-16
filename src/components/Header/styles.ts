import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem .5rem;

`

export const HeaderButtonContainer = styled.div`
    display: flex;
    align-items: center;

    gap: .75rem;

    .city{
        background-color: ${props => props.theme["purple-300"]};
        color: ${props => props.theme["purple-500"]};

        border-radius: 6px;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;

        span{
            line-height: 1.3;
            font-size: 0.875rem;
        }
    }

    .cart{
        position: relative;
        background-color: ${props => props.theme["yellow-300"]};
        color: ${props => props.theme["yellow-500"]};

        padding: 0.5rem;

        border-radius: 6px;

        cursor: pointer;

        span{
            width: 1.25rem;
            height: 1.25rem;

            display: flex;
            align-items: center;
            justify-content: center;

            background-color: ${props => props.theme["yellow-500"]};
            color: ${props => props.theme.white};

            border-radius: 99px;

            position: absolute;
            top: -.5rem;
            right: -.5rem;

            font-size: 0.75rem;
            font-weight: bold;

            line-height: 1.3;
            letter-spacing: -0.72px;
        }
    }
`