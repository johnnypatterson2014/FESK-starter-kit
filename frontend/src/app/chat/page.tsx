import SpringMessageForm from '@/components/SpringMessageForm'
import SpringMessageList from '@/components/SpringMessageList'
import { NextPage } from 'next'
import { SpringMessagesProvider } from '@/utils/useSpringMessages'

const IndexSpringPage: NextPage = () => {
  return (
    <SpringMessagesProvider>
      <div className='flex'>
        <div className='flex-1'>
          <SpringMessageList />
        </div>
        <div className='flex-1'>
          <SpringMessageForm />
        </div>
      </div>
    </SpringMessagesProvider>
  )
}

export default IndexSpringPage
