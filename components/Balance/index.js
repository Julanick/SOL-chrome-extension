import { useState, useEffect } from 'react';
import { Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { mnemonicToSeedSync } from 'bip39';
import { Container } from 'react-bootstrap';
import BackButton from '../Buttons/BackButton';

const Balance = ({pass, navigateToPage}) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
      (async () => {
          if (!pass) {
              console.error("Пасс-фраза не найдена");
              alert("Пасс-фраза не найдена");
              navigateToPage('main');
              return;
          }
          try {
              const connection = new Connection(process.env.NEXT_PUBLIC_APP_SOLANA_URL || '');
              const mnemonic = pass;
              const seed = mnemonicToSeedSync(mnemonic, "");
              const wallet = Keypair.fromSeed(seed.slice(0, 32));
              const lamports = await connection.getBalance(wallet.publicKey);
              setBalance(lamports / LAMPORTS_PER_SOL);
          } catch (error) {
              console.error("Ошибка получения баланса: ", error);
              alert("Ошибка получения баланса: " + error);
              navigateToPage('main');
          }
      })();
  }, [pass, navigateToPage]);

  return (
      <Container className="mt-5 text-center">
          <h2>Баланс: {balance} SOL</h2>
          <BackButton navigateToPage={navigateToPage} />
      </Container>
  );
};

export default Balance;
