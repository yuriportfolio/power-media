import styled from "styled-components";

export const Container = styled.button`
    background-color: #d1fe49;
    height: 50px;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    color: #222;
    width: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 400ms;

    :hover {
        opacity: 0.8;
    }

    :disabled {
        background-color: #555;
    }
`