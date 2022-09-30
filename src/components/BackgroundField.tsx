import ReactFlow, {
  addEdge,
  Background,
  MiniMap,
  Controls,
  Connection,
  ReactFlowInstance,
  Node,
  NodeChange,
  Edge,
  EdgeChange,
} from 'react-flow-renderer';
import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import { nodeTypes } from './Sidebar';

export interface IReactFlowPropsLight {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node<any>[]>>;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge<any>[]>>;
}

export interface IReactFlowProps extends IReactFlowPropsLight {
  onNodesChange: (nodeChanges: NodeChange[]) => void;
  onEdgesChange: (edgeChanges: EdgeChange[]) => void;
}

function BackgroundField({ propsPackage }: { propsPackage: IReactFlowProps }) {
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } = propsPackage;

  let id = 0;

  const getId = () => `dndnode_${id++}`;

  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>(
    {} as ReactFlowInstance
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current!.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type}`, className: type },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="background" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      >
        <Background gap={22}></Background>
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default React.memo(BackgroundField);
