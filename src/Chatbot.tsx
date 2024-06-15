import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

interface Message {
  user: string;
  text: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorCompany, setVisitorCompany] = useState('');
  const [isGreeting, setIsGreeting] = useState(true);

  const chatWindowRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatWindowRef.current?.scrollTo({
      top: chatWindowRef.current.scrollHeight,
      behavior: 'smooth'
    });
  };

  // UseEffect to scroll only when new messages are added
  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!input || !visitorName || !visitorCompany) return;

    const newMessage: Message = { user: 'visitor', text: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    const conversationHistory = updatedMessages.map((message) => message.text);

    const response = await fetch('http://127.0.0.1:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: input, visitor_name: visitorName, visitor_company: visitorCompany, conversation_history: conversationHistory }),
    });

    const data = await response.json();
    setMessages((prevMessages) => [...prevMessages, { user: 'chatbot', text: data.response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleGreetingSubmit = () => {
    if (!visitorName || !visitorCompany) return;
    setIsGreeting(false);
    const greetingMessage = `Hello ${visitorName} from ${visitorCompany}, how can I assist you today?`;
    setMessages([{ user: 'chatbot', text: greetingMessage }]);
  };

  return (
    <div className="chatbot-container">
      <div className={`background-blur ${!isGreeting ? 'focused' : ''}`}></div>
      <div className="chat-content">
        {isGreeting ? (
          <div className="greeting">
            <h2>Welcome!</h2>
            <h3 className='mayi'>Before you start chatting with the me, may I please have your information?</h3>
            <input
              type="text"
              placeholder="Name"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Company/Occupation"
              value={visitorCompany}
              onChange={(e) => setVisitorCompany(e.target.value)}
            />
            <button onClick={handleGreetingSubmit}>Submit</button>
          </div>
        ) : (
          <>
            <div className="chat-window" ref={chatWindowRef}>
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.user}`}>
                  {message.text}
                </div>
              ))}
              {isLoading && <div className="loading">Chatbot: Typing...</div>}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
