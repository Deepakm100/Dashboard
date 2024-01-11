import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/content/content';

function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default App