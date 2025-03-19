import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import FriendList from './FriendList';
import ChatBox from './ChatBox';
import Login from './Login';
import Register from './Register';
import './App.css';
import Logout from './Logout';

const App = () => {
    const [friends] = useState([
        { name: 'Sukhmani' },

    ]);
    const [selectedFriend, setSelectedFriend] = useState(null);

    return (
        <Router>
            <div className="app-container">
                <Header />
                <nav>
                    <ul>
                        <li style={{ fontWeight: "bold" }}><Link to="/register">Register</Link></li>
                        <li style={{ fontWeight: "bold" }}><Link to="/login">Login</Link></li>
                        <li style={{ fontWeight: "bold" }}><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/home" element={
                        <>
                            <div className="main-content">
                                <Sidebar />

                                <Feed /> {/* Updated Feed layout */}

                            </div>
                        </>
                    } />
                    <Route path="/chat" element={
                        selectedFriend ? (
                            <ChatBox
                                selectedFriend={selectedFriend}
                                onClose={() => setSelectedFriend(null)}
                            />
                        ) : (
                            <Navigate to="/home" />
                        )
                    } />
                </Routes>
            </div>
        </Router>
    );
};

const Header = () => (
    <header className="header">
        <div className="logo">Connect</div>
        <nav className="nav">

        </nav>
    </header>
);

const Sidebar = () => (
    <aside className="sidebar">

    </aside>
);

const Feed = () => (
    <section className="feed">

        <h2>Welcome to the Chat Area</h2>
        <div className="chatbox-container">
            <ChatBox />
        </div>
        <div className="posts">
            <Post
                title="Welcome to Connect!"
                content="Stay tuned for more updates!"
            />
        </div>
    </section>
);

const Post = ({ title, content }) => (
    <div className="post">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
);



export default App;
