import * as S from './styles'

type PageHeaderProps = {
    title: string
    description: string
}

function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <>
            <S.Container>
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </S.Container>
        </>
    )
}

export default PageHeader