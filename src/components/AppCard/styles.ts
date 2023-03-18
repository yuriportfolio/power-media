import styled from "styled-components";

export const Container = styled.div`
    background-color: #1a1a1a;
    border-radius: 8px;
    padding: 20px;

    cursor: pointer;
    transition: all 400ms;

    :hover {
        transform: translateY(-2px);
    }

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