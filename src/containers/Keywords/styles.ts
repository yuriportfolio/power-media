import styled from 'styled-components'

export const FormGroup = styled.form`
    margin-bottom: 40px;

    display: grid;
    grid-template-columns: 1fr 150px;
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