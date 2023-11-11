import React from 'react';
import { Button, Stack, Tooltip, styled } from '@mui/material';

const Counter = ({
  count,
  handleChange,
  disabledText = '',
  minCount = -Infinity,
  maxCount = Infinity,
  disabled = false,
}) => {
  const handleCountChange = factor => () => {
    handleChange(count + factor);
  };

  return (
    <Tooltip title={disabledText} arrow>
      <CounterContainer>
        <CounterButton disabled={disabled || count === minCount} onClick={handleCountChange(-1)}>
          -
        </CounterButton>

        <CounterDisplay>{count}</CounterDisplay>

        <CounterButton disabled={disabled || count === maxCount} onClick={handleCountChange(+1)}>
          +
        </CounterButton>
      </CounterContainer>
    </Tooltip>
  );
};

export default Counter;

const CounterContainer = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  width: 'max-content',
  flexDirection: 'row',
}));

const CounterButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  height: '2rem',
  width: '2rem',
  borderRadius: 0,
  color: theme.palette.neutral.black,
}));

const CounterDisplay = styled('div')(({ theme }) => ({
  height: '2rem',
  width: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderLeft: `1px solid ${theme.palette.grey[300]}`,
  borderRight: `1px solid ${theme.palette.grey[300]}`,
}));
