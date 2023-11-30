import './chat.css'
// import { Web5 } from '@web5/api';

export default function ChatInterface() {
  const user = null; // DID logic

  // async function handleClick(e){
  //   e.preventDefault()
  //   const { web5, did: userDid } = await Web5.connect()
  //   console.log(userDid, web5)
  // }
  
  return (
    <div id="chat">
      <div className='user'>
        <h6>{user === null ? 'UserName' : user}</h6>
        <input type="text" />
      </div>
      <div className="text-bubble">
      </div>
      <div className='send'>
        <input type="text" />
        <button>Send</button>
      </div>
    </div>
  )
}