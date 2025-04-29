import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (message.trim()) {
      setChatLog([...chatLog, { sender: "You", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        Let’s Chat
      </button>

      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg mt-4 flex flex-col">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
            Chat
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {chatLog.map((entry, index) => (
              <div key={index} className="text-sm">
                <strong>{entry.sender}:</strong> {entry.text}
              </div>
            ))}
          </div>
          <div className="flex p-2 border-t">
            <input
              className="flex-1 border px-2 py-1 rounded-l"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 rounded-r"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
