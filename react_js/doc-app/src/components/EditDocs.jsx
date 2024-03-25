import React, { useEffect, useState, useRef } from 'react';
import '../App.css'
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
    updateDoc,
    collection,
    doc,
    onSnapshot
} from 'firebase/firestore';

export default function EditDocs({ database }) {
    const isMounted = useRef(false);
    const collectionRef = collection(database, 'docsData');
    const params = useParams();
    const [documentTitle, setDocumentTitle] = useState('');
    const [docsDesc, setDocsDesc] = useState('');

    const getQuillData = (value) => {
        setDocsDesc(value);
    }

    useEffect(() => {
        const updateDocsData = setTimeout(() => {
            const documentRef = doc(collectionRef, params.id);
            updateDoc(documentRef, {
                docsDesc: docsDesc
            }).catch(() => {
                alert('Cannot Save');
            });
        }, 1000);
        return () => clearTimeout(updateDocsData);
    }, [docsDesc, collectionRef, params.id]);

    const getData = () => {
        const documentRef = doc(collectionRef, params.id);
        onSnapshot(documentRef, (docSnapshot) => {
            setDocumentTitle(docSnapshot.data().title);
            setDocsDesc(docSnapshot.data().docsDesc);
        });
    }

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            getData();
        }
    }, [isMounted]);

    return (
        <div className='editDocs-main'>
            <h1>{documentTitle}</h1>
            <div className='editDocs-inner'>
                <ReactQuill
                    className='react-quill'
                    value={docsDesc}
                    onChange={getQuillData}
                />
            </div>
        </div>
    );
}
