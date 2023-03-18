import PageContainer from '../../components/layout/PageContainer'
import PageHeader from '../../components/layout/PageHeader'
import AppCard from './components/AppCard'
import { apps } from './data'
import * as S from './styles'

function HomePage() {
    return (
        <>
            <PageContainer>
                <PageHeader
                    title='Boost to your digital content'
                    description='Choose one of our apps to get started'
                />

                <S.AppList>
                    {apps.map((app, key) => (
                        <AppCard key={key} app={app} />
                    ))}
                </S.AppList>
            </PageContainer>
        </>
    )
}

export default HomePage