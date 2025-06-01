import SpringMessageForm from '@/components/SpringMessageForm'
import SpringMessageList from '@/components/SpringMessageList'
import { NextPage } from 'next'
import { SpringMessagesProvider } from '@/utils/useSpringMessages'

const IndexSpringPage: NextPage = () => {
  return (
    <SpringMessagesProvider>
      <SpringMessageList />
      <div>
        <SpringMessageForm />
      </div>
    </SpringMessagesProvider>
  )
}

export default IndexSpringPage
