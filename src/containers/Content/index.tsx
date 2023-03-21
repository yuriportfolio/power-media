import { FormEvent, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'

import CopyCard from '../../components/datadisplay/CopyCard'
import DotLoading from '../../components/feedback/DotLoading'
import BackButton from '../../components/inputs/BackButton'
import Button from '../../components/inputs/Button'
import TextInput from '../../components/inputs/TextInput'
import PageContainer from '../../components/layout/PageContainer'
import PageHeader from '../../components/layout/PageHeader'
import contentPrompt from '../../prompts/content-prompt'
import { postSendMessageToChatGPT } from '../../services/chatgpt'
import * as S from './styles'

function ContentPage() {
    const inputDescriptionRef = useRef<HTMLInputElement>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [text, setText] = useState('')

    async function handleFetchContent(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        try {
            const { data } = await postSendMessageToChatGPT({
                prompt: contentPrompt(inputDescriptionRef.current.value)
            })

            setText(data.choices[0].text)
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
                    title='Content 📝'
                    description='Effortlessly create high-quality text content for your posts with our cutting-edge content generator.'
                />

                <S.FormGroup onSubmit={handleFetchContent} >
                    <TextInput ref={inputDescriptionRef} placeholder='Describe the theme of the text you want' />
                    <Button disabled={isLoading} type='submit' className="btn-submit">
                        {isLoading ? <DotLoading /> : 'SEARCH'}
                    </Button>
                </S.FormGroup>

                <S.List>
                    {text !== '' && (
                        <CopyCard isMultiple text={text} />
                    )}
                </S.List>
            </PageContainer>
        </>
    )
}

export default ContentPage