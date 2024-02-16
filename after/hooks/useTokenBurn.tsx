import { useState, useEffect, ChangeEvent } from 'react';
import { Contract } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import { useWallet } from './useWallet';
import { useAppSupplies } from './useAppSupplies';
import { useEthersSigner } from './useEthersSigner';
import { fetchAddressForChain, isChainTestnet } from '../utils';
import { oftAbi } from '../constants/abi';
import { BurnTxProgress } from '../constants/enums';

export const useTokenBurn = () => {
    const [burnAmount, setBurnAmount] = useState("");
    const [txButton, setTxButton] = useState<BurnTxProgress>(BurnTxProgress.default);
    const [txProgress, setTxProgress] = useState<boolean>(false);
    const [burnTxHash, setBurnTxHash] = useState<string | null>(null);

    const { isWalletConnected, walletChain } = useWallet();
    const { fetchSupplies } = useAppSupplies();
    const ethersSigner = useEthersSigner({ chainId: walletChain?.id ?? chainEnum.mainnet });

    const executeBurn = async () => {
        // Execution logic here
    };

    const onChangeBurnAmount = (e: ChangeEvent<HTMLInputElement>) => {
        // Change handler logic here
    };

    useEffect(() => {
        // Effect hook logic here
    }, [walletChain]);

    return {
        burnAmount,
        txButton,
        txProgress,
        burnTxHash,
        executeBurn,
        onChangeBurnAmount
    };
};
