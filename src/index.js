import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const dialogsData = [
    {id: 1, name: 'Wayne'},
    {id: 2, name: 'Priscilla'},
    {id: 3, name: 'Cade'},
    {id: 4, name: 'Franklin'},
    {id: 5, name: 'Fred'},
]
const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I am fine, and you?'},
]
const postsData = [
    {id: 1, message: 'Post 1', likes: 10},
    {id: 2, message: 'Post 2', likes: 20}, 
    {id: 3, message: 'Post 3', likes: 5}
]

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
