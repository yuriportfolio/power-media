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
import hashtagsPrompt from '../../prompts/hashtags-prompt'


function HashtagsPage() {
    const inputDescriptionRef = useRef<HTMLInputElement>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [hashtags, setHashtags] = useState({
        text: '',
        splitted: []
    })

    async function handleFetchHashTags(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        try {
            const { data } = await postSendMessageToChatGPT({
                prompt: hashtagsPrompt(inputDescriptionRef.current.value)
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
        setHashtags({
            text: result
                .trim()
                .replaceAll(',', ' '),
            splitted: result
                .trim()
                .split(',')
        })
    }

    return (
        <>
            <PageContainer>
                <BackButton href='/' />

                <PageHeader
                    title='Let’s find your Power Hashtags!'
                    description='Transform your texts into powerful hashtags with PowerHashtags - the ideal tool to increase your visibility and engagement on social media!'
                />

                <S.FormGroup onSubmit={handleFetchHashTags} >
                    <TextInput
                        ref={inputDescriptionRef}
                        className='text-input'
                        type="text"
                        placeholder='Paste your text here'
                    />

                    <Button disabled={isLoading} type='submit' className="btn-submit">
                        {isLoading ? <DotLoading /> : 'GENERATE'}
                    </Button>
                </S.FormGroup>

                <S.List>
                    {hashtags.splitted.length > 0 && (
                        <>
                            <CopyCard text={hashtags.text} isMultiple />

                            <S.Separator />
                        </>
                    )}

                    {hashtags.splitted.map((tag, key) => <CopyCard key={key} text={tag} />)}
                </S.List>
            </PageContainer>
        </>
    )
}

export default HashtagsPage