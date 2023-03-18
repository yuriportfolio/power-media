import { FormEvent, useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

import CopyCard from './components/CopyCard'
import * as S from './styles'
import DotLoading from '../../components/feedback/DotLoading'
import BackButton from '../../components/inputs/BackButton'
import TextInput from '../../components/inputs/TextInput'
import Button from '../../components/inputs/Button'

const CHATGPT_KEY = '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'

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

        const prompt = `
          Generate 5 hashtags in Portuguese for a post about ${inputDescriptionRef.current.value}.
          Return each item separated by a comma, in lowercase, and without a line break.
        `;

        try {
            const { data } = await axios.post('https://api.openai.com/v1/engines/text-davinci-003-playground/completions', {
                prompt: prompt,
                temperature: 0.22,
                max_tokens: 500,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${CHATGPT_KEY}`
                },
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
            <S.Wrapper>
                <S.Container>
                    <BackButton href='/' />

                    <S.Header>
                        <h1 className="title">Let’s find your Power Hashtags!</h1>
                        <p className="description">Transform your texts into powerful hashtags with PowerHashtags - the ideal tool to increase your visibility and engagement on social media!</p>
                    </S.Header>

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
                </S.Container>
            </S.Wrapper>
        </>
    )
}

export default HashtagsPage