import React, { useState } from 'react';
import AddPost from './AddPost';

const ChatBox = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]); // State to store posts

    // Function to handle sending messages
    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { sender: 'Me', text: input }]);
            setInput('');
        }
    };

    // Function to add a new post
    const addNewPost = (newPost) => {
        setPosts((prev) => [...prev, newPost]);
    };

    return (
        <div className="page-container">
            {/* Chat Section */}
            <div className="chat-box">
                <div className="chat-header">
                    <h4>Chat Box</h4>
                    {onClose && <button onClick={onClose}>Close</button>}
                </div>

                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender === 'Me' ? 'sent' : 'received'}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>

                <div className="chat-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

            <hr style={{ margin: '20px 0' }} />

            {/* AddPost Section */}
            <div className="add-post-section">
                <h4>Create a Post</h4>
                <AddPost addNewPost={addNewPost} />
            </div>

            {/* Posts Section */}
            <div className="posts-section">
                <h4>Posts</h4>
                {posts.map((post, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                        {post.photo && <img src={post.photo} alt="Post" style={{ maxWidth: '100px', marginBottom: '10px' }} />}
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatBox;
