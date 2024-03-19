import React from 'react';
import { Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

const BackButton = ({ navigateToPage }) => (
    <Button  variant="outline-dark" size="lg" className='m-2' onClick={()=>navigateToPage("main")}>
        <ArrowLeft />
    </Button>
);

export default BackButton;