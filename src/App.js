import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            {/* <Profile /> */}
            <div className='app-wrapper-content'>
                <Dialogs />
            </div>
        </div>
    );
}

export default App;
