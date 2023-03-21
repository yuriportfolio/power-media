import { FormEvent, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'

import CopyCard from '../../components/datadisplay/CopyCard'
import DotLoading from '../../components/feedback/DotLoading'
import BackButton from '../../components/inputs/BackButton'
import Button from '../../components/inputs/Button'
import TextInput from '../../components/inputs/TextInput'
import PageContainer from '../../components/layout/PageContainer'
import PageHeader from '../../components/layout/PageHeader'
import slogansPrompt from '../../prompts/slogans-prompt'
import { postSendMessageToChatGPT } from '../../services/chatgpt'
import * as S from './styles'

function SloganPage() {
    const inputDescriptionRef = useRef<HTMLInputElement>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [slogans, setSlogans] = useState([])

    async function handleFetchSlogan(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        try {
            const { data } = await postSendMessageToChatGPT({
                prompt: slogansPrompt(inputDescriptionRef.current.value)
            })

            setSlogans(JSON.parse(data.choices[0].text))
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
                    title='Slogan 📣'
                    description='Craft compelling and catchy slogans with ease using our innovative tool.'
                />

                <S.FormGroup onSubmit={handleFetchSlogan} >
                    <TextInput ref={inputDescriptionRef} placeholder='Describe what your company does' />
                    <Button disabled={isLoading} type='submit' className="btn-submit">
                        {isLoading ? <DotLoading /> : 'SEARCH'}
                    </Button>
                </S.FormGroup>

                <S.List>
                    {slogans.map((slogan, key) => (
                        <CopyCard key={key} text={slogan} />
                    ))}
                </S.List>
            </PageContainer>
        </>
    )
}

export default SloganPage