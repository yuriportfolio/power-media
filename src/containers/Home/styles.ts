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
    margin-bottom: 40px;

    .title {
        font-size: 32px;
        color: #eee;
    }

    .description {
        font-size: 16px;
        color: #bbb;
    }
`

export const AppList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 16px;
`