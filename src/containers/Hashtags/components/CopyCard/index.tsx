import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast'

import * as S from './styles'

type CopyCardProps = {
    isMultiple?: boolean
    text: string
}

function CopyCard({ text, isMultiple }: CopyCardProps) {
    function handleCopyText() {
        copy(text);
        toast.success('Text successfully copied')
    }

    return (
        <>
            <S.Container isMultiple={isMultiple} >
                <p className="text">{text}</p>

                <button aria-label='copy text' onClick={handleCopyText} className="copy">
                    <img src="/copy-icon.svg" alt="icon for copy text" />
                </button>
            </S.Container>
        </>
    )
}

export default CopyCard