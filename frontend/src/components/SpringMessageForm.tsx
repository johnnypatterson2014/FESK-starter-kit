'use client';

import { Button, TextArea } from '@apideck/components'
import { useState } from 'react'
// import { sendSpringMessage } from 'utils/sendSpringMessage'
import { useSpringMessages } from '@/utils/useSpringMessages'

const SpringMessageForm = () => {
  const [content, setContent] = useState('')
  const { addSpringMessage } = useSpringMessages()

  const handleSubmit = async (e?: any) => {
    e?.preventDefault()
    addSpringMessage(content)
    setContent('')
    // const reply = await sendSpringMessage([])
    // setContent(reply.data.result.output.text)
    // addSpringMessage(reply)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-card text-sm">
        <div className="flex-none">
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
          <div className="flex-1">
            <Button className="btn btn-soft btn-primary" type="submit">
              Send
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SpringMessageForm
