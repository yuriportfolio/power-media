import PageHeader from '../../components/layout/PageHeader'
import AppCard from './components/AppCard'
import { apps } from './data'
import * as S from './styles'

function HomePage() {
    return (
        <>
            <S.Wrapper>
                <S.Container>
                    <PageHeader
                        title='Boost your digital content'
                        description='Streamline your social media content creation with our all-in-one app.'
                    />

                    <nav>
                        <S.AppList>
                            {apps.map((app, key) => (
                                <AppCard key={key} app={app} />
                            ))}
                        </S.AppList>
                    </nav>
                </S.Container>
            </S.Wrapper>
        </>
    )
}

export default HomePage