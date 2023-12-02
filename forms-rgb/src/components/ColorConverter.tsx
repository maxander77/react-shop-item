import React, { useState } from 'react';

const ColorConverter: React.FC = () => {
  const [hexColor, setHexColor] = useState<string>('');
  const [rgbColor, setRgbColor] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleHexInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputHex = event.target.value;

    const cleanedHex = inputHex.replace(/[^0-9a-fA-F]/g, '');

    if (/^[0-9A-Fa-f]{0,6}$/.test(cleanedHex)) {
      setHexColor(`#${cleanedHex}`);
      setErrorMessage(null);

      if (cleanedHex.length === 6) {
        convertHexToRgb(cleanedHex);
      }
    } else {
      setErrorMessage('Wrong format HEX');
    }
  };

  const convertHexToRgb = (hex: string) => {
    const rgb = hex.match(/.{2}/g)?.map((component) => parseInt(component, 16));

    if (rgb && rgb.length === 3) {
      setRgbColor(`rgb(${rgb.join(', ')})`);
      updateBackgroundColor(rgb);
    }
  };

  const updateBackgroundColor = (rgb: number[]) => {
    document.body.style.backgroundColor = `rgb(${rgb.join(', ')})`;
  };

  return (
    <div>
      <label>
        HEX:
        <input type="text" value={hexColor} onChange={handleHexInputChange} />
      </label>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {rgbColor && (
        <div style={{ marginTop: '20px', backgroundColor: rgbColor, padding: '10px' }}>
          <p>RGB: {rgbColor}</p>
        </div>
      )}
    </div>
  );
};

export default ColorConverter;
