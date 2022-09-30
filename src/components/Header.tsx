import FileSaver from 'file-saver';
import React, { useRef, useState } from 'react';
import { IReactFlowPropsLight } from './BackgroundField';

function Header({ nodes, setNodes, edges, setEdges }: IReactFlowPropsLight) {
  const [heading, setHeading] = useState('FlowChartName');
  const [headingDisplay, setHeadingDisplay] = useState(true);
  const downloadInputRef = useRef<HTMLInputElement>(null);
  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    const data = JSON.parse(event.target!.result as string);
    setHeading(data.heading);
    setNodes(data.nodes);
    setEdges(data.edges);
  };
  const saveData = { heading, nodes, edges };
  const saveFile = new Blob([JSON.stringify(saveData)], { type: 'text/plain;charset=utf-8' });

  return (
    <header>
      <input
        type="file"
        ref={downloadInputRef}
        style={{ display: 'none' }}
        onChange={(e) => {
          fileReader.readAsText(e.target.files![0]);
        }}
      />
      {headingDisplay ? (
        <h1 onDoubleClick={() => setHeadingDisplay(false)}>{heading}</h1>
      ) : (
        <input
          onChange={(e) => setHeading(e.target.value)}
          value={heading}
          onKeyDown={(e) => e.key === 'Enter' && setHeadingDisplay(true)}
        />
      )}
      <div className="button-box">
        <button onClick={() => downloadInputRef.current!.click()}>Download</button>
        <button
          onClick={() => {
            FileSaver.saveAs(saveFile, `${heading}.json`);
          }}
        >
          Upload
        </button>
      </div>
    </header>
  );
}

export default React.memo(Header);
