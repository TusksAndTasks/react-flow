import ReactFlow, {addEdge, Background, MiniMap, Controls, useEdgesState, useNodesState} from "react-flow-renderer";
import * as React from "react";
import {useCallback, useRef, useState} from "react";
import {nodeTypes} from "./Sidebar.tsx";

function BackgroundField() {
    let id = 0;
    const getId = () => `dndnode_${id++}`;

    const reactFlowWrapper = useRef(null);
        const [nodes, setNodes, onNodesChange] = useNodesState([]);
        const [edges, setEdges, onEdgesChange] = useEdgesState([]);
        const [reactFlowInstance, setReactFlowInstance] = useState(null);

        const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

        const onDragOver = useCallback((event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        }, []);

        const onDrop = useCallback(
            (event) => {
                event.preventDefault();

                const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
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
                    data: { label: `${type} node` },
                };

                setNodes((nds) => nds.concat(newNode));
            },
            [reactFlowInstance]
        );

        return <div className='background' ref={reactFlowWrapper}>
            <ReactFlow nodes={nodes}
                       edges={edges}
                       onNodesChange={onNodesChange}
                       onEdgesChange={onEdgesChange}
                       onConnect={onConnect}
                       onInit={setReactFlowInstance}
                       nodeTypes={nodeTypes}
                       onDrop={onDrop}
                       onDragOver={onDragOver}
                       fitView>
                <Background gap={22}></Background>
                <MiniMap />
                <Controls />
            </ReactFlow>
        </div>
}

export default React.memo(BackgroundField);