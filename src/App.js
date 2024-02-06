import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { Routes, Route, Link } from "react-router-dom";
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Notfound from './Components/Notfound/Notfound';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/dialogs' element={<Dialogs />} />
                    <Route path='/dialogs/:id' element={<Dialogs />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='*' element={<Notfound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
