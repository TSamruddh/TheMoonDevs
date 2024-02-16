import { useState } from 'react';

export const useWallet = () => {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [walletChain, setWalletChain] = useState(null);
    // More state variables and logic related to wallet

    // Expose necessary functions and state
    return {
        isWalletConnected,
        walletChain,
        // More state variables and functions
    };
};
