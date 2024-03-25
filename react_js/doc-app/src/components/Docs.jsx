import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import Modal from './Modal';
import { database } from './FirebaseConfig';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

const Docs = () => {
    const [title, setTitle] = useState('');
    const [open, setOpen] = useState(false); 
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const collectionRef = collection(database, 'docsData');
    const isMounted = useRef(false);
    const [docsData, setDocsData] = useState([]);

    const addData = () => {
        addDoc(collectionRef, {
            title: title
        })
        .then(() => {
            alert('Data Added');
            handleClose();
        })
        .catch(() => {
            alert('Cannot add data');
        });
    };

    const getData = () => {
        onSnapshot(collectionRef, (data) => {
            setDocsData(data.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            }))
        })
    };

    useEffect(() => {
        if(!isMounted.current){
            isMounted.current = true;
            getData();
        }
    }, []);

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
                    Add A Document
                </button>
                <Modal
                    open={open}
                    setOpen={setOpen}
                    title={title}
                    setTitle={setTitle}
                    addData={addData}
                    handleClose={handleClose} // Pass handleClose to Modal
                    />
                <div className='grid-main'>
                    {docsData.map((doc) => {
                        return (
                            <div key={doc.id} className='grid-child'>
                                <p>{doc.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Docs; // Capitalize function name 'Docs'
