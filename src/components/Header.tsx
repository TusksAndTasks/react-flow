import FileSaver from 'file-saver';
import React, { useCallback, useRef, useState } from 'react';
import { IReactFlowPropsLight } from './BackgroundField';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import { Box, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import ModalPrimitive from '../primitives/ModalPrimitive';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const importFile = useCallback(() => downloadInputRef.current!.click(), [downloadInputRef]);

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
        <Typography variant="h4" component="h1" onDoubleClick={() => setHeadingDisplay(false)}>
          {heading}
        </Typography>
      ) : (
        <TextField
          variant="outlined"
          inputProps={{ style: { fontSize: 32, padding: '4px' } }}
          onChange={(e) => setHeading(e.target.value)}
          value={heading}
          onKeyDown={(e) => e.key === 'Enter' && setHeadingDisplay(true)}
        />
      )}
      <div className="button-box">
        <Tooltip title="Import chart">
          <IconButton
            sx={{ color: 'black', borderRadius: '4px', '&:hover': { backgroundColor: '#D9D9D9' } }}
            onClick={() => setIsModalOpen(true)}
          >
            <DownloadIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Export chart">
          <IconButton
            sx={{ color: 'black', borderRadius: '4px', '&:hover': { backgroundColor: '#D9D9D9' } }}
            onClick={() => {
              FileSaver.saveAs(saveFile, `${heading}.rffc`);
            }}
          >
            <UploadIcon />
          </IconButton>
        </Tooltip>
      </div>
      <ModalPrimitive
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalHandler={importFile}
      >
        <Box sx={{ maxHeight: '91px' }}>
          <Typography variant="h4" component="h2">
            Хотите продолжить?
          </Typography>
          <Typography variant="body1" component="p">
            Импортироавние схемы приведет к потере текущих наработок. Чтобы сохранить текущие
            изменения экспортируйте их
          </Typography>
        </Box>
      </ModalPrimitive>
    </header>
  );
}

export default React.memo(Header);
