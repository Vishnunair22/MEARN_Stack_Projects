import React, { useState } from 'react';
import '../App.css';
import Modal from './Modal'; // Import the Modal component from its correct location

const Docs = () => {
    const [open, setOpen] = useState(false); // Using useState directly

    const handleOpen = () => setOpen(true);

    return (
        <>
            {/* nav bar */}
            <nav>
                <div className="logo">
                    <span className="icon"><i className="fa-solid fa-file"></i></span>
                    <span className="word1">Doc</span>
                    <span className="word2">App</span>
                </div>
            </nav>
            {/* main container */}
            <div className="doc-main">
                <h1>Select a file</h1>
                <button className="add-docs" onClick={handleOpen}>
                    Add a Document
                </button>
                <Modal
                    open={open}
                    setOpen={setOpen} />
            </div>
        </>
    );
};

export default Docs; // Capitalize function name 'Docs'
