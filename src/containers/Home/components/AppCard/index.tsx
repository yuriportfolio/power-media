import Link from 'next/link'
import * as S from './styles'

type AppCardProps = {
    app: {
        title: string
        description: string
        url: string
        icon: string
    },
}

function AppCard({ app }: AppCardProps) {
    return (
        <>
            <Link href={app.url} >
                <S.Container >
                    <p className="icon">{app.icon}</p>

                    <div className="info">
                        <h2 className="title">{app.title}</h2>
                        <p className="description">{app.description}</p>
                    </div>
                </S.Container>
            </Link>
        </>
    )
}

export default AppCard