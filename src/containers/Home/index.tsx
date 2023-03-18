import AppCard from '../../components/AppCard'
import { apps } from './data'
import * as S from './styles'

function HomePage() {
    return (
        <>
            <S.Wrapper>
                <S.Container>
                    <S.Header>
                        <h1 className="title">Give a boost to your digital content</h1>
                        <p className="description">Choose one of our apps to get started</p>
                    </S.Header>

                    <S.AppList>
                        {apps.map((app, key) => (
                            <AppCard key={key} app={app} />
                        ))}
                    </S.AppList>
                </S.Container>
            </S.Wrapper>
        </>
    )
}

export default HomePage