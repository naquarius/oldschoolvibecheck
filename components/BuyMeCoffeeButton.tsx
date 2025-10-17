'use client';

import { useEffect } from 'react';

export const BuyMeCoffeeButton = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
    script.setAttribute('data-name', 'bmc-button');
    script.setAttribute('data-slug', 'earthedsouls');
    script.setAttribute('data-color', '#BD5FFF');
    script.setAttribute('data-emoji', '✨');
    script.setAttribute('data-font', 'Cookie');
    script.setAttribute('data-text', 'Send vibes');
    script.setAttribute('data-outline-color', '#000000');
    script.setAttribute('data-font-color', '#ffffff');
    script.setAttribute('data-coffee-color', '#FFDD00');

    // Add the script to the document
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bmc-container">
      <a href="https://www.buymeacoffee.com/earthedsouls" target="_blank">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
          alt="Buy Me A Coffee"
          className="bmc-button"
        />
      </a>
    </div>
  );
};
