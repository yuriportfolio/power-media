import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 0px 20px;
`

export const Container = styled.div`
    padding-top: 80px;
    width: 600px;
    margin: 0 auto;
`

export const Header = styled.div`
    .title {
        font-size: 32px;
        color: #eee;
    }

    .description {
        font-size: 16px;
        color: #bbb;
    }
`

export const FormGroup = styled.form`
    margin-top: 40px;
    margin-bottom: 40px;

    display: flex;
    align-items: center;
    gap: 12px;

    .text-input {
        background-color: #161616;
        border: 1px solid #222;
        border-radius: 8px;
        width: 100%;
        height: 50px;
        padding: 10px;
        color: #eee;
    }

    .btn-submit {
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
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const Separator = styled.div`
    height: 1px;
    width: 100%;
    background-color: #222;
`