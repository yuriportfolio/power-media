import { FormEvent, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'

import CopyCard from '../../components/datadisplay/CopyCard'
import DotLoading from '../../components/feedback/DotLoading'
import BackButton from '../../components/inputs/BackButton'
import Button from '../../components/inputs/Button'
import TextInput from '../../components/inputs/TextInput'
import PageContainer from '../../components/layout/PageContainer'
import PageHeader from '../../components/layout/PageHeader'
import companyPrompt from '../../prompts/company-prompt'
import { postSendMessageToChatGPT } from '../../services/chatgpt'
import * as S from './styles'

function CompanyNamePage() {
    const inputDescriptionRef = useRef<HTMLInputElement>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [names, setNames] = useState([])

    async function handleFetchEmojis(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        try {
            const { data } = await postSendMessageToChatGPT({
                prompt: companyPrompt(inputDescriptionRef.current.value)
            })

            setNames(JSON.parse(data.choices[0].text))
            inputDescriptionRef.current.value = ''
        } catch (error) {
            toast.error('Error. try again :(')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>

            <PageContainer>
                <BackButton href='/' />

                <PageHeader
                    title='Company Name'
                    description='Find the best name for the your company'
                />

                <S.FormGroup onSubmit={handleFetchEmojis} >
                    <TextInput ref={inputDescriptionRef} placeholder='Describe what your company do' />
                    <Button disabled={isLoading} type='submit' className="btn-submit">
                        {isLoading ? <DotLoading /> : 'SEARCH'}
                    </Button>
                </S.FormGroup>

                <S.List>
                    {names.map((name, key) => (
                        <CopyCard key={key} text={name} />
                    ))}
                </S.List>
            </PageContainer>
        </>
    )
}

export default CompanyNamePage