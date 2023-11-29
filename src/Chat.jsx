import './chat.css'

export default function ChatInterface() {
  const user = null; // DID logic
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