import styled, { css } from "styled-components";

type ContainerProps = {
    isActive: boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: #1a1a1a;
    border: 2px solid #1a1a1a;
    border-radius: 8px;
    padding: 20px;

    cursor: pointer;
    transition: all 400ms;

    :hover {
        transform: translateY(-2px);
        border: 2px solid #d1fe49;
    }

    ${({ isActive }) => !isActive && css`
        filter: grayscale(100%);
        cursor: not-allowed;
        opacity: 0.3;

        :hover {
            transform: none;
            border: 2px solid #1a1a1a;
        }
    `}

    .icon {
        font-size: 24px;
    }
    
    .info {
        margin-top: 40px;

        .title {
            font-size: 20px;
            color: #eee;
        }

        .description {
            font-size: 14px;
            color: #777;
        }
    }
`