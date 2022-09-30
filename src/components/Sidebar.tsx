import * as React from 'react';
import TextUpdaterNode from '../primitives/textUpdateNode';

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
      <div
        className="dndnode blueprint"
        onDragStart={(event) => onDragStart(event, 'ellipseNode')}
        draggable
      >
        Ellipse
      </div>
      <div
        className="dndnode blueprint"
        onDragStart={(event) => onDragStart(event, 'rectangleNode')}
        draggable
      >
        Rectangle
      </div>
      <div
        className="dndnode blueprint"
        onDragStart={(event) => onDragStart(event, 'diamondNode')}
        draggable
      >
        Diamond
      </div>
      <div
        className="dndnode blueprint"
        onDragStart={(event) => onDragStart(event, 'borderedRectangleNode')}
        draggable
      >
        Bordered Rectangle
      </div>
      <div
        className="dndnode blueprint"
        onDragStart={(event) => onDragStart(event, 'parallelogramNode')}
        draggable
      >
        Parallelogram
      </div>
      <div
        className="dndnode blueprint"
        onDragStart={(event) => onDragStart(event, 'hexagonNode')}
        draggable
      >
        Hexagon
      </div>
      <div
        className="dndnode blueprint"
        onDragStart={(event) => onDragStart(event, 'cropTopNode')}
        draggable
      >
        Crop Top
      </div>
      <div
        className="dndnode blueprint"
        onDragStart={(event) => onDragStart(event, 'cropBottomNode')}
        draggable
      >
        Crop Bottom
      </div>
      <div
        className="dndnode blueprint"
        onDragStart={(event) => onDragStart(event, 'circleNode')}
        draggable
      >
        Circle
      </div>
      <div
        className="dndnode blueprint"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        default
      </div>
    </aside>
  );
}

export default React.memo(Sidebar);
