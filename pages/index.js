import React, { useState } from "react";
import CreateWalletPage from "../components/CreateWallet";
import BalancePage from "../components/Balance";
import MainPage from "../components/Main";
import RecoverWalletPage from "../components/RecoverWallet";
import { ArrowLeft } from 'react-bootstrap-icons';
import { Button, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [activePage, setActivePage] = useState("main");
  const [pass, setPass] = useState("");

  const navigateToPage = (page, pass) => {
    setPass(pass);
    setActivePage(page);
  };

  return (
    <Container style={{minWidth: "600px", minHeight: "300px"}}>
      {activePage === "main" && <MainPage navigateToPage={navigateToPage} />}
      {activePage === "create" && <CreateWalletPage navigateToPage={navigateToPage} />}
      {activePage === "recover" && <RecoverWalletPage navigateToPage={navigateToPage} />}
      {activePage === "balance" && <BalancePage navigateToPage={navigateToPage} pass={pass} />}
    </Container>
  );
}
