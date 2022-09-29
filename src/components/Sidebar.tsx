import * as React from "react";
import {useState} from "react";
import TextUpdaterNode from "../primitives/textUpdateNode.tsx";

export const nodeTypes = { rectangleInput: TextUpdaterNode};


function Sidebar () {

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return <aside>
        <div className="dndnode blueprint" onDragStart={(event) => onDragStart(event, 'rectangleInput' )} draggable>
            Rectangle
        </div>
        <div className="dndnode blueprint" onDragStart={(event) => onDragStart(event, 'default')} draggable>
            default
        </div>
    </aside>
}

export default React.memo(Sidebar);