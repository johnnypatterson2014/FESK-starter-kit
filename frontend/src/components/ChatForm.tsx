'use client';

import { Button, TextArea } from '@apideck/components'
import { useState } from 'react'
// import { sendSpringMessage } from 'utils/sendSpringMessage'
import { chatMessages } from '@/components/ChatMessageWrapper'

const ChatForm = () => {
  const [content, setContent] = useState('')
  const { addChatMessage } = chatMessages()

  const handleSubmit = async (e?: any) => {
    e?.preventDefault()
    addChatMessage(content)
    setContent('')
    // const reply = await sendSpringMessage([])
    // setContent(reply.data.result.output.text)
    // addChatMessage(reply)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-card text-sm">
        <label className='fesk-card-label'>Chat with LLM</label>
        <div>
          <TextArea
            id="my-text-area"
            name="content"
            placeholder="Enter your message here..."
            rows={3}
            value={content}
            autoFocus
            className="!p-3 text-gray-300"
            onChange={(e: any) => setContent(e.target.value)}
          />
        </div>
        <div>
          <div>
            <button className="btn btn-xs btn-primary">Send</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ChatForm
