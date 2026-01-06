import React, { useState, useRef, useEffect } from 'react';
import { FaHeadset, FaPaperPlane, FaTimes, FaCommentDots } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const AIChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hello! I'm your Support Assistant. How can I help you today?", sender: 'bot', timestamp: new Date() }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue("");

        // Simulate AI response
        setTimeout(() => {
            const botResponses = [
                "That's interesting! Tell me more.",
                "I can help you with our services, careers, or general inquiries.",
                "Our team will get back to you shortly regarding this request.",
                "You can explore our 'Services' page for more details.",
                "Thanks for reaching out to Support!"
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

            const newBotMessage: Message = {
                id: messages.length + 2,
                text: randomResponse,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, newBotMessage]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-sans">

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl w-[350px] md:w-[380px] overflow-hidden border border-gray-100 flex flex-col h-[500px] mb-4"
                    >
                        {/* Header */}
                        <div className="bg-[#0B52A0] p-4 flex items-center justify-between text-white shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                    <FaHeadset className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Support</h3>
                                    <p className="text-xs text-blue-100 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${msg.sender === 'user'
                                                ? 'bg-[#0B52A0] text-white rounded-br-none'
                                                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all border border-transparent focus:bg-white"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="bg-[#0B52A0] text-white p-3 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                                >
                                    <FaPaperPlane className="text-sm translate-x-[-1px] translate-y-[1px]" />
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-[10px] text-gray-400">Powered by Wealth Zone AI</p>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button Container */}
            <div className="flex flex-col items-center gap-1">
                {/* Visual Label */}
                {!isOpen && (
                    <span className="text-xs font-bold text-gray-600 bg-white px-2 py-1 rounded-md shadow-sm border border-gray-100">
                        Support
                    </span>
                )}

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleChat}
                    className="bg-[#0B52A0] text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-shadow flex items-center justify-center group"
                >
                    {isOpen ? (
                        <FaTimes className="text-xl" />
                    ) : (
                        <FaHeadset className="text-2xl" />
                    )}

                    {/* Notification Dot */}
                    {!isOpen && (
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
                    )}
                </motion.button>
            </div>
        </div>
    );
};

export default AIChatWidget;
