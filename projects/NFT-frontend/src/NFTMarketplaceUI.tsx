
import axios from 'axios';
import React, { useState, ChangeEvent } from 'react';

const NFTMarketplaceUI = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [minting, setMinting] = useState(false);
  const [mintingError, setMintingError] = useState(null);
  const [mintingSuccess, setMintingSuccess] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };
  const handleMintNFT = async () => {
    setMinting(true);
    setMintingError(null);
    setMintingSuccess(false);

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Set mode to 'no-cors'
      });

      if (response.ok) {
        setMintingSuccess(true);
      } else {
        setMintingError('Failed to mint NFT');
      }
    } catch (error) {
      setMintingError('Error minting NFT: ' + error.message);
    } finally {
      setMinting(false);
    }
};


  return (
    <div>
      <h1>NFT Marketplace</h1>
      <input type="file" onChange={handleFileChange} />
      {previewURL && <img src={previewURL} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />}
      <button onClick={handleMintNFT} disabled={!selectedFile || minting}>
        {minting ? 'Minting...' : 'Mint NFT'}
      </button>
      {mintingError && <p>Error: {mintingError}</p>}
      {mintingSuccess && <p>NFT minted successfully!</p>}
    </div>
  );
};

export default NFTMarketplaceUI;
