import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { WalletFill, ArrowRepeat } from "react-bootstrap-icons";
import Logo from "../../public/icons/logo.jpg";

const Main = ({ navigateToPage }) => {
  return (
    <Container className="mt-5 text-center">
      <Image
        src={Logo.src}
        alt="Logo"
        style={{ width: "auto", height: "60px" }}
      />
      <h3>Добро пожаловать в Solana Extension</h3>
      <Row className="justify-content-md-center m-5">
        <Col xs={12} md={8}>
          <Button
            variant="success"
            size="lg"
            onClick={() => navigateToPage("create")}
            className="w-75 mb-3"
          >
            <WalletFill className="me-2" />
            Создать кошелек
          </Button>
        </Col>
        <Col xs={12} md={8}>
          <Button
            variant="outline-dark"
            size="lg"
            onClick={() => navigateToPage("recover")}
            className="w-75"
          >
            <ArrowRepeat className="me-2" />
            Восстановить кошелек
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;