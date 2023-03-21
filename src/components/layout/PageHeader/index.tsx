import Head from 'next/head'
import * as S from './styles'

type PageHeaderProps = {
    title: string
    description: string
}

function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <title>{title} | PowerMedia: More than an app, an ally for your business.</title>
            </Head>

            <S.Container>
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </S.Container>
        </>
    )
}

export default PageHeader