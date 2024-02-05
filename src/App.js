import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg" />
      </header>
      <nav className='nav'>
        <div>
            <a>Profile</a>
        </div>
        <div>
            <a>Messages</a>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div> 
        <div>
            <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
