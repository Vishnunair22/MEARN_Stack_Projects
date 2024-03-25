import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import Modal from './Modal';
import { database } from './FirebaseConfig';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Docs = () => {
    const [title, setTitle] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const collectionRef = collection(database, 'docsData');
    const isMounted = useRef(false);
    const [docsData, setDocsData] = useState([]);
    let navigate = useNavigate();


    const addData = () => {
        addDoc(collectionRef, {
            title: title
        })
        .then(() => {
            alert('Data Added');
            handleClose();
        })
        .catch((error) => {
            console.error('Error adding document: ', error);
            alert('Cannot add data');
        });
    };

    const getData = () => {
        onSnapshot(collectionRef, (querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({ ...doc.data(), id: doc.id });
            });
            setDocsData(data);
        }, (error) => {
            console.error('Error fetching documents: ', error);
        });
    };

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            getData();
        }
    }, []);

    const getID = (id) => {
        console.log(id);
        navigate(`/editDocs/${id}`)
    };

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
                    handleClose={handleClose}
                />
                <div className='grid-main'>
                    {docsData.map((doc) => {
                        return (
                            <div key={doc.id} className='grid-child' onClick={() => getID(doc.id)}>
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
