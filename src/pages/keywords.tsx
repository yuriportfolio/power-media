import { GetServerSideProps } from 'next'

import { withAuth } from '../hocs/withAuth'
export { default } from '../containers/Keywords'

export const getServerSideProps: GetServerSideProps = withAuth(async () => {
    return {
        props: {}
    }
})