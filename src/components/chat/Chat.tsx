import React, { useState, useRef } from "react";
import styled from "styled-components";

function Chat() {
	const [showChat, setShowChat] = useState(false);
	const [chatInput, setChatInput] = useState("");
	const [chatHistory, setChatHistory] = useState([
		"Hello! 👋🏻",
		"Is anyone out there? 🤩",
	]);
	const chatInputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const newChatHistory = [...chatHistory, chatInput];
		setChatHistory(newChatHistory);
		setChatInput("");
		chatInputRef?.current?.blur();
	};

	return (
		<>
			<ChatIcon onClick={() => setShowChat(!showChat)}>
				{showChat ? "Close Chat" : "Chat"}
			</ChatIcon>
			{showChat && (
				<ChatContainer>
					<Messages>
						{chatHistory.map((chat) => (
							<ChatMessage key={Math.random() * 100000}>{chat}</ChatMessage>
						))}
					</Messages>
					<form onSubmit={handleSubmit}>
						<ChatInput
							placeholder="Write something..."
							ref={chatInputRef}
							value={chatInput}
							onChange={(e) => setChatInput(e.target.value)}
						/>
					</form>
				</ChatContainer>
			)}
		</>
	);
}

const ChatMessage = styled.p`
	width: fit-content;
	border-radius: 0.5rem;
	background-color: #eee;
	color: #5b5b5b;
	padding: 0.5rem;
	margin: 0;
	margin-bottom: 1rem;
`;

const ChatInput = styled.input`
	margin-top: 0.5rem;
	width: 100%;
	border: none;
	border-radius: 0.5rem;
	padding: 1rem;
	font: inherit;
`;

const Messages = styled.div`
	max-height: 300px;
	overflow-y: scroll;
	margin-bottom: 0.5rem;

	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: transparent;
    border-radius: .5rem;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #eee;
    border-radius: .5rem;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

const ChatContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1.5rem;
	background-color: #ddd;
	border-radius: 1rem;
	width: 100%;
	max-width: 300px;
	min-height: 200px;
	position: fixed;
	bottom: 5rem;
	right: 1rem;
`;

const ChatIcon = styled.button`
	border-radius: 1rem;
	border: none;
	cursor: pointer;
	background-color: hsla(176, 75%, 41%, 1);
	width: fit-content;
	padding: 1rem 2rem;
	color: hsla(231, 11%, 24%, 1);
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	transition: all 0.3s;

	&:hover {
		background-color: hsla(231, 11%, 24%, 1);
		color: hsla(183, 22%, 62%, 1);
	}
`;

export default Chat;
