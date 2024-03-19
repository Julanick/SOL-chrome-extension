import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { WalletFill, ArrowRepeat } from "react-bootstrap-icons";
import Logo from "../../public/icons/logo.jpg";

const Main = ({ navigateToPage }) => {
  return (
    <Container className="mt-5 text-center">
      <img
        src={Logo.src}
        alt="Logo"
        style={{ width: "auto", height: "60px" }}
      />
      <h3>Добро пожаловать в Solana Extension</h3>

        <Button
          variant="success"
          size="lg"
          onClick={() => navigateToPage("create")}
          className="w-50"
        >
          <WalletFill className="me-2" />
          Создать кошелек
        </Button>
      

        <Button
          variant="secondary"
          size="lg"
          onClick={() => navigateToPage("recover")}
          className="w-50"
        >
          <ArrowRepeat className="me-2" />
          Восстановить кошелек
        </Button>
  
 
    </Container>
  );
};

export default Main;
