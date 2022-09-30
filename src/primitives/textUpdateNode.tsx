import { Handle, Position } from 'react-flow-renderer';
import * as React from 'react';
import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { createStyles } from '@mui/styles';

function TextUpdaterNode({
  data,
}: {
  data: {
    label: string;
    className: string;
  };
}) {
  const [nodeText, setNodeText] = useState(data.label as string);
  const [openInput, setOpenInput] = useState(false);
  const stylesheet = styles();

  return (
    <Box
      className={`dndnode`}
      sx={stylesheet[data.className as keyof typeof stylesheet]}
      onDoubleClick={() => setOpenInput(true)}
    >
      {openInput ? (
        <TextField
          variant="outlined"
          inputProps={{ style: { padding: '4px' } }}
          onChange={(e) => setNodeText(e.target.value)}
          value={nodeText}
          onKeyDown={(e) => e.key === 'Enter' && setOpenInput(false)}
        />
      ) : (
        <p>{nodeText}</p>
      )}
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
      <Handle type="target" position={Position.Left} id="c" />
      <Handle type="source" position={Position.Right} id="d" />
    </Box>
  );
}

export default React.memo(TextUpdaterNode);

const styles = () =>
  createStyles({
    rectangleNode: {
      minWidth: '164px',
      minHeight: '82px',
    },
    ellipseNode: {
      minWidth: '164px',
      minHeight: '82px',
      borderRadius: '50px',
    },
    diamondNode: {
      width: '164px',
      height: '164px',
      position: 'relative',
      border: 'none',
      lineHeight: '200px',
      textAlign: 'center',
      '&::after': {
        border: '1px solid #1a192b',
        position: 'absolute',
        top: '0px',
        left: '0px',
        content: '""',
        height: '100%',
        width: '100%',
        transform: 'rotateX(45deg) rotateZ(45deg)',
      },
      '& [data-handleid]': {
        transform: 'translateX(-34%)',
      },
      '& [data-handleid="c"]': {
        transform: 'translateX(-34px) translateY(-34%)',
      },
      '& [data-handleid="d"]': {
        transform: 'translateX(37px) translateY(-34%)',
      },
    },
    borderedRectangleNode: {
      minWidth: '140px',
      minHeight: '82px',
      padding: '28px',
      position: 'relative',
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '0',
        left: '24px',
        borderLeft: '#1a192b solid 1px',
        borderRight: '#1a192b solid 1px',
        width: 'calc(100% - 48px)',
        height: '100%',
      },
    },
    parallelogramNode: {
      minWidth: '164px',
      minHeight: '82px',
      border: 'none',
      position: 'relative',
      '&::after': {
        content: '""',
        width: '100%',
        height: '100%',
        transform: 'skew(20deg)',
        border: '1px solid #1a192b',
        position: 'absolute',
        top: '0',
        left: '0',
      },
    },
    hexagonNode: {
      width: '164px',
      height: '82px',
      boxSizing: 'border-box',
      border: 'none',
      padding: '20px',
      outline: '0',
      background:
        ' linear-gradient(#1a192b,#1a192b) top   /calc(100% - 30px) 1px,\n' +
        '  linear-gradient(#1a192b,#1a192b) bottom/calc(100% - 30px) 1px,\n' +
        '\n' +
        '  linear-gradient(to bottom right,\n' +
        '          transparent calc(50% - 1px),#1a192b,transparent calc(50% + 1px))\n' +
        '  top left/15px 40px,\n' +
        '  linear-gradient(to bottom right,\n' +
        '          transparent calc(50% - 1px),#1a192b,transparent calc(50% + 1px))\n' +
        '  bottom right/15px 40px,\n' +
        '  linear-gradient(to bottom left,\n' +
        '          transparent calc(50% - 1px),#1a192b,transparent calc(50% + 1px))\n' +
        '  top right/15px 40px,\n' +
        '  linear-gradient(to bottom left,\n' +
        '          transparent calc(50% - 1px),#1a192b,transparent calc(50% + 1px))\n' +
        '  bottom left/15px 40px',
      backgroundRepeat: 'no-repeat',
      '& input': {
        width: 'calc(100% - 20px)',
      },
    },
    cropTopNode: {
      width: '164px',
      height: '82px',
      boxSizing: 'border-box',
      border: 'none',
      padding: '20px',
      outline: '0',
      background:
        'linear-gradient(#1a192b,#1a192b) top   /calc(100% - 30px) 1px,\n' +
        '  linear-gradient(#1a192b,#1a192b) bottom/calc(100% - 2px) 1.5px,\n' +
        '\n' +
        '  linear-gradient(to bottom right,\n' +
        '          transparent calc(50% - 1px),#1a192b,transparent calc(50% + 1px))\n' +
        '  top left/15px 40px,\n' +
        '  linear-gradient(to bottom right,\n' +
        '          transparent calc(50% - 2px),#1a192b,transparent calc(50% + 2px))\n' +
        '  bottom right/1px 45px,\n' +
        '  linear-gradient(to bottom left,\n' +
        '          transparent calc(50% - 1px),#1a192b,transparent calc(50% + 1px))\n' +
        '  top right/15px 40px,\n' +
        '  linear-gradient(to bottom left,\n' +
        '          transparent calc(50% - 2px),#1a192b,transparent calc(50% + 2px))\n' +
        '  bottom left/1px 45px;',
      backgroundRepeat: 'no-repeat',
      '& input': {
        width: 'calc(100% - 20px)',
      },
    },
    cropBottomNode: {
      width: '164px',
      height: '82px',
      boxSizing: 'border-box',
      border: 'none',
      padding: '20px',
      outline: '0',
      background:
        'linear-gradient(#1a192b,#1a192b) top   /calc(100% - 2px) 1px,\n' +
        '  linear-gradient(#1a192b,#1a192b) bottom/calc(100% - 30px) 1px,\n' +
        '\n' +
        '  linear-gradient(to bottom right,\n' +
        '          transparent calc(50% - 2px),#1a192b,transparent calc(50% + 2px))\n' +
        '  top left/1px 45px,\n' +
        '  linear-gradient(to bottom right,\n' +
        '          transparent calc(50% - 1px),#1a192b,transparent calc(50% + 1px))\n' +
        '  bottom right/15px 40px,\n' +
        '  linear-gradient(to bottom left,\n' +
        '          transparent calc(50% - 2px),#1a192b,transparent calc(50% + 2px))\n' +
        '  top right/1px 45px,\n' +
        '  linear-gradient(to bottom left,\n' +
        '          transparent calc(50% - 1px),#1a192b,transparent calc(50% + 1px))\n' +
        '  bottom left/15px 40px;',
      backgroundRepeat: 'no-repeat',
      '& input': {
        width: 'calc(100% - 20px)',
      },
    },
    circleNode: {
      minWidth: '164px',
      minHeight: '164px',
      aspectRatio: '1/1',
      borderRadius: '50%',
    },
  });
