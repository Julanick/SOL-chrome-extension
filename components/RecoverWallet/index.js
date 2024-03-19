import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const RecoverWallet = ({navigateToPage}) => {
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <Container className="mt-5 text-center">
            <input type='text' placeholder="Введите пасс-фразу для восстановления" value={input} onChange={handleInputChange} className="form-control" />
            <Button variant="primary" size="lg" onClick={() => navigateToPage('balance', input)} className="mt-2 w-100">
                Далее
            </Button>
        </Container>
    );
};

export default RecoverWallet;