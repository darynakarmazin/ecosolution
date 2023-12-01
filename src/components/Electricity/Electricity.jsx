import React, { useEffect } from 'react';
import {
  ElectricityAmount,
  ElectricitySection,
  ElectricityTitle,
} from './Electricity.styles';

function Electricity() {
  useEffect(() => {
    function digitsCountersInit(digitsCountersItems) {
      let digitsCounters = digitsCountersItems
        ? digitsCountersItems
        : document.querySelectorAll('[data-digits-couter]');
      if (digitsCounters) {
        digitsCounters.forEach(digitsCounter => {
          digitsCountersAnimate(digitsCounter);
        });
      }
    }

    function digitsCountersAnimate(digitsCounter) {
      let startTimestamp = null;
      const duration = parseInt(digitsCounter.dataset.digitsCounter)
        ? parseInt(digitsCounter.dataset.digitsCounter)
        : 1000;
      const startValue = parseInt(digitsCounter.dataset.max);
      const startPosition = 0;
      const step = timestamp => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (startPosition + startValue));
        digitsCounter.innerHTML = addSeparatorsToNumber(value);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    function addSeparatorsToNumber(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    let options = {
      threshold: 0.75,
    };
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetElement = entry.target;
          const digitsCountersItems = targetElement.querySelectorAll(
            '[data-digits-couter]'
          );
          if (digitsCountersItems.length) {
            digitsCountersInit(digitsCountersItems);
          }
        }
      });
    }, options);

    let sections = document.querySelectorAll('.amount-item-numbers');
    if (sections.length) {
      sections.forEach(section => {
        observer.observe(section);
      });
    }
  }, []);

  return (
    <ElectricitySection className="amount-item-numbers">
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <ElectricityAmount>
        <span data-digits-couter data-max="1134147814">
          1.134.147.814
        </span>
        kWh
      </ElectricityAmount>
    </ElectricitySection>
  );
}

export default Electricity;
