import React from 'react';
import styled from 'styled-components';
import { useTokenBurn } from '../hooks/useTokenBurn';
import BurnStatsContainer from './BurnStatsContainer';
import BurnButtonBar from './BurnButtonBar';
import BurnTxTable from './BurnTxTable';

const BurnPageStyled = styled.div``;

const BurnPage = () => {
    const {
        burnTransactions,
        burnAmount,
        txButton,
        txProgress,
        burnTxHash,
        executeBurn,
        onChangeBurnAmount
    } = useTokenBurn();

    return (
        <BurnPageStyled>
            <BurnStatsContainer />
            <BurnButtonBar
                burnAmount={burnAmount}
                onChangeBurnAmount={onChangeBurnAmount}
                executeBurn={executeBurn}
                txButton={txButton}
                txProgress={txProgress}
                burnTxHash={burnTxHash}
            />
            <BurnTxTable burnTransactions={burnTransactions} />
        </BurnPageStyled>
    );
};

export default BurnPage;
