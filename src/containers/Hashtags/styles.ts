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
    margin-top: 20px;

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