import { useEffect, useState } from 'react';

// Générer des prix et pourcentages aléatoires pour les cryptomonnaies
const generateCryptoData = () => {
  const cryptos = ['DOGE', 'SHIB', 'GRUMPY', 'WIF', 'BONK', 'FLOKI', 'PEPE', 'BRETT'];

  return cryptos.map(crypto => {
    if (crypto === 'GRUMPY') {
      // GRUMPY a un prix positif spécifique et un changement positif
      const grumpyPrices = [9950, 995, 99.5];
      return {
        name: crypto,
        price: grumpyPrices[Math.floor(Math.random() * grumpyPrices.length)],
        change: (Math.random() * (23 - 10) + 10).toFixed(2) // entre 10% et 23%
      };
    } else {
      // Autres cryptos ont un prix aléatoire entre -3 et +39
      return {
        name: crypto,
        price: (Math.random() * (0.11 - 0.0000001) + (-0.017126)).toFixed(8), // entre -3 et +39
        change: (-Math.random() * (60 - 10) - 10).toFixed(2) // entre -10% et -60%
      };
    }
  });
};
export default function Pricebar() {
  const [cryptoData, setCryptoData] = useState(generateCryptoData());

  return (
    <div className="relative w-full overflow-hidden bg-bckgd">
      <div className="slide-track flex whitespace-nowrap">
        {cryptoData.concat(cryptoData).map((crypto, index) => (
          <p key={index} className="inline-block px-8 text-white text-sm leading-8">
            {crypto.name} : {crypto.price} USD | 
            <span className={crypto.change.startsWith('-') ? 'text-fear' : 'text-gread'}>
              {crypto.change}%
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}



	