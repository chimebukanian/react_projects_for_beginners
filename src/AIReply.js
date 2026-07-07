import './App.css';

function AiReply({ message }) {
  return (
    <div className="ai-reply-box">
     <p className='ai-text'>{message}</p>
    </div>
  );
}


export default function AIParent() {
    return (

        <div>
            <h1>AI Parent Component</h1>
            <AiReply message="Hello from AI!" />
        </div>
    )
}
   