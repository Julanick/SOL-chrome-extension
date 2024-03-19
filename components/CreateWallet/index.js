import React, { useState, useEffect } from 'react';
import { generateMnemonic } from 'bip39';
import { Button, Container } from 'react-bootstrap';

const CreateWallet = ({navigateToPage}) => {

    const [passphrase, setPassphrase] = useState('');

    useEffect(() => {
        setPassphrase(generateMnemonic());
    }, []);

    return (
        <Container className="mt-5 text-center">
            <p>{passphrase}</p>
            <Button variant="primary" size="lg" onClick={() => navigateToPage('balance', passphrase)} className='w-100'>
                Далее
            </Button>
        </Container>
    );
};

export default CreateWallet;