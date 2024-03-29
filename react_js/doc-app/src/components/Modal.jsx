import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalComponent({
    open,
    setOpen,
    title,
    setTitle,
    addData
}) {
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add a Title
                </Typography>
                <input
                    placeholder='Enter the Title'
                    className='add-input'
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="button">
                <Button variant='contained' onClick={addData} className='modal-button'>
                    Add a Document
                </Button>
                </div>
            </Box>
        </Modal>
    );
}
