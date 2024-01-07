import React from "react";
import { IoIosSend } from "react-icons/io";

export default function ChatInput({
  newMessage,
  setNewMessage,
  handleSendMessage,
  inputMessageRef,
}) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <textarea
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message here..."
        className="outline-2 border border-neutral-600 w-full rounded-lg px-2 py-1  h-10 items-center col-span-10"
        ref={inputMessageRef}
      />
      <button
        onClick={handleSendMessage}
        className="border border-neutral-600 p-2 bg-dark text-white col-span-2 rounded-lg flex justify-center items-center "
      >
        <IoIosSend size={24} />
      </button>
    </div>
  );
}
