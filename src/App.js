import './App.css';
import BackgroundField from './components/BackgroundField.tsx';
import Sidebar from './components/Sidebar.tsx';

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <h1>FlowChartName</h1>
          <div className="button-box">
            <button>Download</button>
            <button>Upload</button>
          </div>
        </header>
        <BackgroundField />
      </main>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
