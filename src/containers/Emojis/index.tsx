import { FormEvent, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'

import CopyCard from '../../components/datadisplay/CopyCard'
import DotLoading from '../../components/feedback/DotLoading'
import BackButton from '../../components/inputs/BackButton'
import Button from '../../components/inputs/Button'
import TextInput from '../../components/inputs/TextInput'
import PageContainer from '../../components/layout/PageContainer'
import PageHeader from '../../components/layout/PageHeader'
import emojisPrompt from '../../prompts/emojis-prompt'
import { postSendMessageToChatGPT } from '../../services/chatgpt'
import * as S from './styles'

function EmojisPage() {
    const inputDescriptionRef = useRef<HTMLInputElement>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [emojis, setEmojis] = useState([])

    async function handleFetchEmojis(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        try {
            const { data } = await postSendMessageToChatGPT({
                prompt: emojisPrompt(inputDescriptionRef.current.value)
            })

            setEmojis(data.choices[0].text.split(','))
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
                    title='Emojis'
                    description='Find emoji by text'
                />

                <S.FormGroup onSubmit={handleFetchEmojis} >
                    <TextInput ref={inputDescriptionRef} placeholder='Type something' />
                    <Button disabled={isLoading} type='submit' className="btn-submit">
                        {isLoading ? <DotLoading /> : 'SEARCH'}
                    </Button>
                </S.FormGroup>

                <S.List>
                    {emojis.map((emoji, key) => (
                        <CopyCard key={key} text={emoji} />
                    ))}
                </S.List>
            </PageContainer>
        </>
    )
}

export default EmojisPage