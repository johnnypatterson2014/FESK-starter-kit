'use client';

import { chatMessages } from '@/components/ChatMessageWrapper'

const ChatHistory = () => {
  const { messages, isLoadingAnswer } = chatMessages()

  return (
    <>
      <label className='fesk-card-h2'>Chat with LLM</label>
      {messages?.map((message, i) => {
        const isUser = message.role === 'user'

        return (
          <div id={`message-${i}`} className='my-card-chat' key={message.content}>
            <div className={`flex chat-message`} >
              {!isUser && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e9fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
              )}
              {isUser && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffdf20" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" /></svg>
              )}
              <div
                style={{ maxWidth: 'calc(100% - 45px)' }}
                className={`rounded-sm ${isUser
                  ? 'ml-2 text-yellow-300'
                  : 'ml-2 text-blue-300'
                  }`}
              >
                {message.content}
              </div>
            </div>
          </div>
        )
      })}

      {isLoadingAnswer && (
        <div className='flex my-card-chat'>
          <div className="flex chat-message" >
            <div className='flex-none'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e9fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
            </div>

            <div className="loader-line-1">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default ChatHistory
