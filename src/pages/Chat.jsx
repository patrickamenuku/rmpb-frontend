// import React from 'react';
// import { Menu, Settings, Send, Mic } from 'lucide-react';
import rmbpLogo from '../assets/logo.svg';
import micIcon from '../assets/mic.svg';
import sendIcon from '../assets/send.svg';

const ChatPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-teal-700 to-teal-900 text-white">
      <header className="flex items-center justify-between p-4">
        {/* <Menu className="w-6 h-6" /> */}
        <img src={rmbpLogo} alt="RMBP AI Logo" className="h-12" />
        {/* <Settings className="w-6 h-6" /> */}
      </header>
      
      <main className="flex-grow flex flex-col justify-center items-center p-4">
        <p className="text-2xl text-center">
          Type or reocrd to get started
        </p>
      </main>
      
      <footer className="w-[60%] p-4 ml-[300px]">
        <div className="flex items-center bg-white rounded-full">
          <input
            type="text"
            placeholder="Ask me anything ..."
            className="flex-grow p-3 bg-transparent text-black placeholder-gray-500 outline-none"
          />
          <div className='bg-green'>
            <button className="p-2 text-teal-700">
                <img src={sendIcon} alt="Mic Icon" className="w-6 h-6" />
                {/* <Send className="w-6 h-6" /> */}
            </button>
          </div>
          
          <button className="p-2 text-teal-700">
            {/* <Mic className="w-6 h-6" /> */}
            <img src={micIcon} alt="Mic Icon" className="w-6 h-6" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatPage;