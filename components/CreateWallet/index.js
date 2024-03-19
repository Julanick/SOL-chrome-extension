import React, { useState, useEffect } from 'react';
import { generateMnemonic } from 'bip39';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Copy } from 'react-bootstrap-icons';
import BackButton from '../Buttons/BackButton';

const CreateWallet = ({ navigateToPage }) => {
    const [passphrase, setPassphrase] = useState('');

    useEffect(() => {
        setPassphrase(generateMnemonic());
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(passphrase);
            alert("Успешно скопировано");
        } catch(err){
            console.error("Ошибка при копировании", err);
        }
    }

    return (
        <Container className="mt-5 text-center">
            <Row>
            <h5>{passphrase} <Copy onClick={handleCopy} style={{cursor:'pointer', marginLeft: '20px'}} /></h5>
            </Row>
            <Container className="m-3">
            <BackButton navigateToPage={navigateToPage}/>
            <Button  variant="success" size="lg" onClick={() => navigateToPage('balance', passphrase)} className='w-25'>
                Далее
            </Button>
            </Container>
        </Container>
    );
};

export default CreateWallet;