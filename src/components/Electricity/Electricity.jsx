import React, { useEffect, useState } from 'react';
import {
  ElectricityAmount,
  ElectricitySection,
  ElectricityTitle,
} from './Electricity.styles';

function Electricity() {
  const startCounterValue = 1134147814;
  const [counterValue, setCounterValue] = useState(startCounterValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterValue(prevValue => prevValue + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const lastThreeDigitsString = (counterValue % 1000)
    .toString()
    .padStart(3, '0');

  return (
    <ElectricitySection>
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <ElectricityAmount>
        <span data-digits-couter data-max={counterValue}>
          1.134.147.{lastThreeDigitsString}
        </span>
        kWh
      </ElectricityAmount>
    </ElectricitySection>
  );
}

export default Electricity;
