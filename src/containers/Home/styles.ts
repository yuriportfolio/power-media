import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 0px 20px;
    padding-top: 40px;
`

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const AppList = styled.ul`
    margin-top: 40px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 16px;
`