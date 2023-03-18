import styled from "styled-components";

type ContainerProps = {
    isMultiple: boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: #1a1a1a;
    border-radius: 8px;
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: ${props => props.isMultiple ? 'flex-start' : 'center'};

    .text {
        font-size: 16px;
        color: #eee;
        width: 80%;
    }

    .copy {
        background-color: #333;
        border-radius: 4px;
        color: #eee;
        height: 30px;
        width: 30px;

        transition: all 400ms;

        :hover {
            opacity: 0.8;
        }

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 16px;
            height: 16px;
        }
    }
    
`