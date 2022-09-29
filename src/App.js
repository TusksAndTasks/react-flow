import './App.css';
import BackgroundField from "./components/BackgroundField.tsx";
import Sidebar from "./components/Sidebar.tsx";

const nodes = [ {id: "1", type: 'input', data: {label: 'Сосать'}, position: {x: 100, y: 100}}]

function App() {
  return (
      <div className="App">
          <main>
          <header>
              <h1>FlowChartName</h1>
              <div className='button-box'>
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
