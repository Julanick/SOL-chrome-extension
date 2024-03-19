import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import BackButton from '../Buttons/BackButton';

const RecoverWallet = ({ navigateToPage }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <Container className="mt-5 text-center w-100">
            <h5 className="m-3">Восстановление кошелька</h5>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Введите пасс-фразу для восстановления"
                    value={input}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Container className="m-3">
                <BackButton navigateToPage={navigateToPage} />
                <Button
                    variant="success"
                    size="lg"
                    onClick={() => navigateToPage('balance', input)}
                    className="m-3 w-50"
                >
                    Далее
                </Button>
            </Container>

        </Container>
    );
};

export default RecoverWallet;