import {Handle, Position} from "react-flow-renderer";
import * as React from "react";
import {useState} from "react";

function TextUpdaterNode({ data }) {
    const [nodeText, setNodeText] = useState(data.label as string);
    const [openInput, setOpenInput] = useState(false);

    return (
        <div className="dndnode" onDoubleClick={() => setOpenInput(true)}>
            {openInput ? <input onChange={(e) => setNodeText(e.target.value)} value={nodeText} onKeyDown={(e) => e.key === 'Enter' && setOpenInput(false) } /> : <p>{nodeText}</p>}
            <Handle type='target' position={Position.Top} id="a" />
            <Handle type="source" position={Position.Bottom} id="b" />
            <Handle type="target" position={Position.Left} id="c" />
            <Handle type="source" position={Position.Right} id="d" />
        </div>
    );
}

export default React.memo(TextUpdaterNode)