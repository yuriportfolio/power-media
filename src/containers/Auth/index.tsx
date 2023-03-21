import { FormEvent, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import nookies from 'nookies'

import DotLoading from '../../components/feedback/DotLoading'
import Button from '../../components/inputs/Button'
import TextInput from '../../components/inputs/TextInput'
import PageContainer from '../../components/layout/PageContainer'
import PageHeader from '../../components/layout/PageHeader'
import * as S from './styles'

function AuthPage() {
    const router = useRouter()
    const inputTokenRef = useRef<HTMLInputElement>(null)

    const [isLoading, setIsLoading] = useState(false)

    async function handleAuth(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const inputValue = inputTokenRef.current.value

        if (inputValue) {
            setIsLoading(true)

            nookies.set(null, 'pwm_token_openai', inputValue, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })

            router.push(router.query.cbpage as string)
        }
    }

    return (
        <>
            <PageContainer>
                <PageHeader
                    title='Set your Open AI token'
                    description='For use this app, insert the Open AI Token:'
                />

                <S.FormGroup onSubmit={handleAuth} >
                    <TextInput ref={inputTokenRef} placeholder='Type your token' />
                    <Button disabled={isLoading} type='submit' className="btn-submit">
                        {isLoading ? <DotLoading /> : 'CONTINUE'}
                    </Button>
                </S.FormGroup>

                <p style={{ color: '#eee' }} >You dont have a token? Pick up here:</p>
                <a style={{ color: '#d1fe497e', textDecoration: 'underline' }} href="https://platform.openai.com/account/api-keys" target="_blank" >https://platform.openai.com/account/api-keys</a>
            </PageContainer>
        </>
    )
}

export default AuthPage