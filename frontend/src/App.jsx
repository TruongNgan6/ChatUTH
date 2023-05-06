import { useState } from 'react'
import UthBotBody from './components/uthBotBody'
import UthBotInput from './components/uthBotInput'

function App() {

  const [chat, setChat] = useState([])

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]))
  }

  return (
    <div className=''>
      <div className='bg-[#2e878a] py-3 relative sm:px-28 font-sans 
      text-white  align-middle'>
        {/* header */}
        <div className='uppercase font-bold text-2xl text-center mb-3'>Xin chào, Mình là UTHbot</div>
        <div className='text-center mb-3'>Nơi bạn có thể hỏi và được trả lời thông tin được cập nhật mới nhất của trường </div>
      </div>
      <div className='bg-[#d3d3d3] h-screen px-16 py-10 relative flex flex-col justify-between align-middle'>
        {/* body */}
        <div className='h-[90%] overflow-auto w-full max-x-4xl min-w-[20rem] py-8 px-5 self-center'>
          <UthBotBody chat={chat} />
        </div>

        {/* input */}
        <div className='w-full max-w-4xl min-w-[20rem] self-center '>
          <UthBotInput sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  )
}

export default App
