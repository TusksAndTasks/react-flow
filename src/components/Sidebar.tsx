import * as React from 'react';
import TextUpdaterNode from '../primitives/textUpdateNode';
import { Tooltip } from '@mui/material';

export const nodeTypes = {
  rectangleNode: TextUpdaterNode,
  ellipseNode: TextUpdaterNode,
  diamondNode: TextUpdaterNode,
  borderedRectangleNode: TextUpdaterNode,
  parallelogramNode: TextUpdaterNode,
  hexagonNode: TextUpdaterNode,
  cropTopNode: TextUpdaterNode,
  cropBottomNode: TextUpdaterNode,
  circleNode: TextUpdaterNode,
};

function Sidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <Tooltip title="Ellipse Node">
        <div
          className="dndnode blueprint"
          onDragStart={(event) => onDragStart(event, 'ellipseNode')}
          draggable
        >
          <img src="/images/Ellipse.jpg" alt="Ellipse" />
        </div>
      </Tooltip>
      <Tooltip title="Rectangle Node">
        <div
          className="dndnode blueprint"
          onDragStart={(event) => onDragStart(event, 'rectangleNode')}
          draggable
        >
          <img src="/images/Rectangle.jpg" alt="Rectangle" />
        </div>
      </Tooltip>
      <Tooltip title="Diamond Node">
        <div
          className="dndnode blueprint"
          onDragStart={(event) => onDragStart(event, 'diamondNode')}
          draggable
        >
          <img src="/images/Diamond.jpg" alt="Diamond" />
        </div>
      </Tooltip>
      <Tooltip title="Bordered Rectangle Node">
        <div
          className="dndnode blueprint"
          onDragStart={(event) => onDragStart(event, 'borderedRectangleNode')}
          draggable
        >
          <img src="/images/BorderedRectangle.jpg" alt="Bordered Rectangle" />
        </div>
      </Tooltip>
      <Tooltip title="Parallelogram Node">
        <div
          className="dndnode blueprint"
          onDragStart={(event) => onDragStart(event, 'parallelogramNode')}
          draggable
        >
          <img src="/images/Parallelogram.jpg" alt="Parallelogram" />
        </div>
      </Tooltip>
      <Tooltip title="Hexagon Node">
        <div
          className="dndnode blueprint"
          onDragStart={(event) => onDragStart(event, 'hexagonNode')}
          draggable
        >
          <img src="/images/Hexagon.jpg" alt="Hexagon" />
        </div>
      </Tooltip>
      <Tooltip title="Crop Top Node">
        <div
          className="dndnode blueprint"
          onDragStart={(event) => onDragStart(event, 'cropTopNode')}
          draggable
        >
          <img src="/images/CropTop.jpg" alt="Crop Top" />
        </div>
      </Tooltip>
      <Tooltip title="Crop Bottom Node">
        <div
          className="dndnode blueprint"
          onDragStart={(event) => onDragStart(event, 'cropBottomNode')}
          draggable
        >
          <img src="/images/CropBottom.jpg" alt="Crop Bottom" />
        </div>
      </Tooltip>
      <Tooltip title="Circle Node">
        <div
          className="dndnode blueprint"
          onDragStart={(event) => onDragStart(event, 'circleNode')}
          draggable
        >
          <img src="/images/Circle.jpg" alt="Circle" />
        </div>
      </Tooltip>
    </aside>
  );
}

export default React.memo(Sidebar);
