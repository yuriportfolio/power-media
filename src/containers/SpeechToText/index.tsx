import { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import CopyCard from '../../components/datadisplay/CopyCard'
import DotLoading from '../../components/feedback/DotLoading'
import BackButton from '../../components/inputs/BackButton'
import Button from '../../components/inputs/Button'
import TextInput from '../../components/inputs/TextInput'
import PageContainer from '../../components/layout/PageContainer'
import PageHeader from '../../components/layout/PageHeader'
import improveTextPrompt from '../../prompts/improve-text-prompt';
import { postSendMessageToChatGPT } from '../../services/chatgpt'
import * as S from './styles'

function SpeechToTextPage() {
    const inputRef = useRef<HTMLInputElement>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [text, setText] = useState('')

    const {
        transcript,
        listening,
        resetTranscript,
    } = useSpeechRecognition();

    function handleStartStop() {
        if (listening) {
            SpeechRecognition.stopListening()
            handleSendText(transcript)
        } else {
            resetTranscript()
            SpeechRecognition.startListening({ continuous: true, language: 'pt-BR' })
        }
    }

    async function handleSendText(voicedText: string) {
        setIsLoading(true)
        resetTranscript()

        try {
            const { data } = await postSendMessageToChatGPT({
                prompt: improveTextPrompt(voicedText)
            })

            setText(data.choices[0].text)
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
                    title='Speech to Text 💬'
                    description='Transform your spoken words into polished text with our advanced speech-to-text app that enhances your message.'
                />

                <S.FormGroup >
                    <TextInput ref={inputRef} value={transcript} onChange={e => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)} disabled placeholder='Clique no botao para começar' />

                    <Button onClick={handleStartStop} disabled={isLoading} type='submit' className="btn-submit">
                        {isLoading ? <DotLoading /> : listening ? 'STOP RECORD' : 'START RECORD'}
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

export default SpeechToTextPage