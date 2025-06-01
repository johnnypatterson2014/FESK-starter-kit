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
        <TextArea
          name="content"
          placeholder="Enter your message here..."
          rows={3}
          value={content}
          autoFocus
          className="!p-3 text-gray-900 border-0 ring-1 dark:ring-0 ring-gray-300/40 focus:ring-gray-300/80 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800/80 backdrop-blur shadow-none"
          onChange={(e: any) => setContent(e.target.value)}
        />
        <div>
          <div className="flex space-x-3">
            <Button className="" type="submit">
              Send

            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SpringMessageForm
