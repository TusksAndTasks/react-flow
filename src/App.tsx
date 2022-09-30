import './App.css';
import BackgroundField from './components/BackgroundField';
import Sidebar from './components/Sidebar';
import { useEdgesState, useNodesState } from 'react-flow-renderer';
import Header from './components/Header';

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const propsPackage = {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
  };

  return (
    <div className="App">
      <main>
        <Header nodes={nodes} setNodes={setNodes} edges={edges} setEdges={setEdges} />
        <BackgroundField propsPackage={propsPackage} />
      </main>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
