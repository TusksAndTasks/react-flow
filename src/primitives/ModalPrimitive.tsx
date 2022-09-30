import { Box, Button, Modal } from '@mui/material';
import React from 'react';

interface IModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalHandler: () => void;
  children: React.ReactNode;
}

function ModalPrimitive({ isModalOpen, setIsModalOpen, modalHandler, children }: IModalProps) {
  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Box sx={{ ...style }}>
        {children}
        <Box sx={{ alignSelf: 'flex-end' }}>
          <Button
            onClick={() => {
              modalHandler();
              setIsModalOpen(false);
            }}
          >
            Продолжить
          </Button>
          <Button onClick={() => setIsModalOpen(false)}>Отмена</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default React.memo(ModalPrimitive);

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  height: '246px',
  backgroundColor: 'white',
  borderRadius: '4px',
  padding: '16px',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'space-between',
};
