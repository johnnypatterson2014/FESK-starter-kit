import ChatForm from '@/components/ChatForm'
import ChatHistory from '@/components/ChatHistory'
import { NextPage } from 'next'
import { ChatMessageWrapper } from '@/components/ChatMessageWrapper'

const IndexSpringPage: NextPage = () => {
  return (
    <ChatMessageWrapper>
      <div className='flex'>
        <div className='flex-1'>
          <ChatHistory />

          <ChatForm />
        </div>
        <div className='flex-1'>
          <div className="my-card">
            <label className='fesk-card-label'>Trace</label>
            <div className='text-sm pl-1'>
              Coming soon - real-time telemetry statistics for chat conversation. Can also show sources.
            </div>
          </div>
        </div>
      </div>
    </ChatMessageWrapper>
  )
}

export default IndexSpringPage
