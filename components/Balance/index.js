import { useState, useEffect } from 'react';
import { Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { mnemonicToSeedSync } from 'bip39';
import { Container } from 'react-bootstrap';

const Balance = ({pass, navigateToPage}) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
      (async () => {
          if (!pass) {
              console.error("Passphrase not found");
              alert("Passphrase not found");
              navigateToPage('main');
              return;
          }
          try {
              const connection = new Connection(NEXT_PUBLIC_APP_SOLANA_URL || '');
              const mnemonic = pass;
              const seed = mnemonicToSeedSync(mnemonic, "");
              const wallet = Keypair.fromSeed(seed.slice(0, 32));
              const lamports = await connection.getBalance(wallet.publicKey);
              setBalance(lamports / LAMPORTS_PER_SOL);
          } catch (error) {
              console.error("Error fetching balance: ", error);
              alert("Error fetching balance: " + error);
              navigateToPage('main');
          }
      })();
  }, [pass, navigateToPage]);

  return (
      <Container className="mt-5 text-center">
          <h1>Баланс: {balance} SOL</h1>
      </Container>
  );
};

export default Balance;
