// // src/components/Home.tsx
// import { useWallet } from '@txnlab/use-wallet'
// import React, { useState } from 'react'
// import ConnectWallet from './components/ConnectWallet'
// import Transact from './components/Transact'
// import AppCalls from './components/AppCalls'
// import NFTMarketplaceUI from './NFTMarketplaceUI'
// import TransactionUI from './TransactionUI'
// import Modal from './components/Modal'

// interface HomeProps {}

// const Home: React.FC<HomeProps> = () => {
//   const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
//   const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
//   const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false)
//   const { activeAddress } = useWallet()

//   const toggleWalletModal = () => {
//     setOpenWalletModal(!openWalletModal)
//   }

//   const toggleDemoModal = () => {
//     setOpenDemoModal(!openDemoModal)
//   }

//   const toggleAppCallsModal = () => {
//     setAppCallsDemoModal(!appCallsDemoModal)
//   }

//   const [showTransactions, setShowTransactions] = useState<boolean>(false);

//   const handleClick1 = () => {
//     setShowTransactions(!showTransactions);
//   };

//   console.log(ConnectWallet.toString);

//   const [showTransactionModal, setShowTransactionModal] = useState<boolean>(false);

// const handleToggleTransactionModal = () => {
//   setShowTransactionModal(!showTransactionModal);
// };


//   return (
// <div className="hero min-h-screen bg-green-400">
//       <div className="hero-content text-center rounded-lg p-6 max-w-md bg-white mx-auto">
//         <div className="max-w-md">
//           <h1 className="text-4xl">
//             Final Project<div className="font-bold"></div>
//           </h1>
//           <p className="py-6">
//            UI for Algo transaction using Perawallet.
//           </p>

//           <div className="grid">
//             {/* <a
//               data-test-id="getting-started"
//               className="btn btn-primary m-2"
//               target="_blank"
//               href="https://github.com/algorandfoundation/algokit-cli"
//             >
//               Getting started
//             </a> */}

//             <div className="divider" />
//             <button data-test-id="connect-wallet" className="btn m-2" onClick={toggleWalletModal}>
//               Wallet Connection
//             </button>

//             {activeAddress && (
//               <button data-test-id="transactions-demo" className="btn m-2" onClick={toggleDemoModal}>
//                 Click here for Transaction
//               </button>
//             )}

//             {activeAddress && (
//               <button data-test-id="appcalls-demo" className="btn m-2" onClick={toggleAppCallsModal}>
//                 Contract Interactions
//               </button>
//             )}

//            {activeAddress && (
//             <button data-test-id="appcalls-demo" className="btn m-2" >
//               <NFTMarketplaceUI></NFTMarketplaceUI>
//             </button>
//           )}

       
         
// // Part of Home.tsx
// <button onClick={() => setShowTransactionModal(true)} className="btn m-2" >
//   View Transactions
// </button>

// <Modal open={showTransactionModal} onClose={() => setShowTransactionModal(false)}>
//   <TransactionUI />
// </Modal>



//           </div>

//           <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
//           <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
//           <AppCalls openModal={appCallsDemoModal} setModalState={setAppCallsDemoModal} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home


// //============================================

import React, { useState } from 'react';
import { useWallet } from '@txnlab/use-wallet';
import ConnectWallet from './components/ConnectWallet';
import Transact from './components/Transact';
import AppCalls from './components/AppCalls';
import NFTMarketplaceUI from './NFTMarketplaceUI';
import TransactionUI from './TransactionUI';
import Modal from './components/Modal';

const Home = () => {
    const [isWalletModalOpen, setWalletModalOpen] = useState(false);
    const [isDemoModalOpen, setDemoModalOpen] = useState(false);
    const [isAppCallsModalOpen, setAppCallsModalOpen] = useState(false);
    const [isTransactionModalOpen, setTransactionModalOpen] = useState(false);
    const [isNFTMarketplaceModalOpen, setNFTMarketplaceModalOpen] = useState(false);
    const { activeAddress } = useWallet();

    const toggleModal = (modalSetter) => () => modalSetter(prevState => !prevState);

    return (
        <div className="hero min-h-screen">
            <a-scene>
                <a-sky src="/src/styles/BGG.png"></a-sky>
                <a-light type="ambient" color="#ffffff"></a-light>
                <a-camera fov="80" position="0 1.6 4.5">
                    <a-cursor color="white"></a-cursor>
                </a-camera>

                {/* Title Card */}
                <a-entity geometry="primitive: plane; height: 0.5; width: 3"
                          material="color: #333; opacity: 0.8"
                          text="value: Final Project; color: white; align: center; width: 6"
                          position="0 2.5 -2.5"></a-entity>

                {/* Buttons */}
                <a-box position="-2.5 1.5 -3" color="#f44336" width="2" height="1" depth="0.1" onClick={toggleModal(setWalletModalOpen)}>
                    <a-text value="Wallet Connection" align="center" color="white" width="4" position="0 0 0.05"></a-text>
                </a-box>

                {activeAddress && (
                    <a-box position="0 1.5 -3" color="#4caf50" width="2" height="1" depth="0.1" onClick={toggleModal(setDemoModalOpen)}>
                        <a-text value="Transactions" align="center" color="white" width="4" position="0 0 0.05"></a-text>
                    </a-box>
                )}

                {activeAddress && (
                    <a-box position="2.5 1.5 -3" color="#ffc107" width="2" height="1" depth="0.1" onClick={toggleModal(setTransactionModalOpen)}>
                        <a-text value="Contract Interactions" align="center" color="white" width="4" position="0 0 0.05"></a-text>
                    </a-box>
                )}

                {activeAddress && (
                    <a-box position="-2.5 0 -3" color="#2196f3" width="2" height="1" depth="0.1" onClick={toggleModal(setNFTMarketplaceModalOpen)}>
                        <a-text value="NFT Marketplace" align="center" color="white" width="4" position="0 0 0.05"></a-text>
                    </a-box>
                )}
            </a-scene>

            {/* Modals */}
            {isTransactionModalOpen && (
                <Modal open={isTransactionModalOpen} onClose={toggleModal(setTransactionModalOpen)}>
                    <TransactionUI />
                </Modal>
            )}

            {isNFTMarketplaceModalOpen && (
                <Modal open={isNFTMarketplaceModalOpen} onClose={toggleModal(setNFTMarketplaceModalOpen)}>
                    <NFTMarketplaceUI />
                </Modal>
            )}

            {/* Connect Wallet Component */}
            <ConnectWallet openModal={isWalletModalOpen} closeModal={toggleModal(setWalletModalOpen)} />
            
            {/* Transact Component */}
            <Transact openModal={isDemoModalOpen} setModalState={setDemoModalOpen} />
            
            {/* AppCalls Component */}
            <AppCalls openModal={isAppCallsModalOpen} setModalState={setAppCallsModalOpen} />
        </div>
    );
};

export default Home;

