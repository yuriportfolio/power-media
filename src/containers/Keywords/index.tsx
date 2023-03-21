import { FormEvent, useRef, useState } from 'react'
import toast from 'react-hot-toast'

import CopyCard from '../../components/datadisplay/CopyCard'
import * as S from './styles'
import DotLoading from '../../components/feedback/DotLoading'
import BackButton from '../../components/inputs/BackButton'
import TextInput from '../../components/inputs/TextInput'
import Button from '../../components/inputs/Button'
import PageContainer from '../../components/layout/PageContainer'
import PageHeader from '../../components/layout/PageHeader'
import { postSendMessageToChatGPT } from '../../services/chatgpt'
import keywordsPrompt from '../../prompts/keywords-prompt'


function KeywordsPage() {
    const inputDescriptionRef = useRef<HTMLInputElement>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [keywords, setKeywords] = useState({
        text: '',
        splitted: []
    })

    async function handleFetchKeywords(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        try {
            const { data } = await postSendMessageToChatGPT({
                prompt: keywordsPrompt(inputDescriptionRef.current.value)
            })

            formatHashtags(data.choices[0].text)
            inputDescriptionRef.current.value = ''
        } catch (error) {
            toast.error('Error. try again :(')
        } finally {
            setIsLoading(false)
        }
    }

    function formatHashtags(result: string) {
        setKeywords({
            text: result.trim(),
            splitted: result.trim().split(',')
        })
    }

    return (
        <>
            <PageContainer>
                <BackButton href='/' />

                <PageHeader
                    title='Keywords 🆒'
                    description='Maximize your search engine optimization potential with our effective keyword generator.'
                />

                <S.FormGroup onSubmit={handleFetchKeywords} >
                    <TextInput
                        ref={inputDescriptionRef}
                        className='text-input'
                        type="text"
                        placeholder='Enter the text'
                    />

                    <Button disabled={isLoading} type='submit' className="btn-submit">
                        {isLoading ? <DotLoading /> : 'GENERATE'}
                    </Button>
                </S.FormGroup>

                <S.List>
                    {keywords.splitted.length > 0 && (
                        <>
                            <CopyCard text={keywords.text} isMultiple />

                            <S.Separator />
                        </>
                    )}

                    {keywords.splitted.map((tag, key) => <CopyCard key={key} text={tag} />)}
                </S.List>
            </PageContainer>
        </>
    )
}

export default KeywordsPage