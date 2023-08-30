import Button from '@/components/atoms/Button';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { styled } from 'styled-components';

const RangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <Div>
      <RangeSliderDiv>
        <input
          type='range'
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className='thumb thumb--left'
          style={{ zIndex: minVal > max - 100 && '5' }}
        />
        <input
          type='range'
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className='thumb thumb--right'
        />

        <div className='slider'>
          <div className='slider__track' />
          <div ref={range} className='slider__range' />
        </div>
      </RangeSliderDiv>

      <div className='form'>
        <Inputs>
          <div className='input_range'>
            <label htmlFor='min'>Min</label>
            <input
              type='number'
              id='min'
              value={minVal}
              onChange={(e) => setMinVal(e.target.value)}
            />
          </div>
          <div className='input_range'>
            <label htmlFor='max'>Min</label>
            <input
              type='number'
              id='max'
              value={maxVal}
              onChange={(e) => setMaxVal(e.target.value)}
            />
          </div>
        </Inputs>
        <button>Apply</button>
      </div>
    </Div>
  );
};

const Div = styled.div`
  min-height: 100px;

  .form {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    height: 120px;
    position: relative;

    button {
      width: 100%;
      height: 40px;
      background-color: ${({ theme }) => theme.pallet.base_white};
      color: ${({ theme }) => theme.pallet.base_blue};
      border: 1px solid ${({ theme }) => theme.pallet.gray_3};
      position: absolute;
      bottom: 0;
      cursor: pointer;
      border-radius: 0.5rem;
    }
  }
`;

const RangeSliderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  .slider {
    position: relative;
    width: 200px;
  }

  .slider__track,
  .slider__range,
  .slider__left-value,
  .slider__right-value {
    position: absolute;
  }

  .slider__track,
  .slider__range {
    border-radius: 3px;
    height: 5px;
  }

  .slider__track {
    background-color: #ced4da;
    width: 100%;
    z-index: 1;
  }

  .slider__range {
    background-color: #9fe5e1;
    z-index: 2;
  }

  .slider__left-value,
  .slider__right-value {
    color: #dee2e6;
    font-size: 12px;
    margin-top: 20px;
  }

  .slider__left-value {
    left: 6px;
  }

  .slider__right-value {
    right: -4px;
  }

  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 200px;
    outline: none;
  }

  .thumb--left {
    z-index: 3;
  }

  .thumb--right {
    z-index: 4;
  }

  .thumb::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  .thumb::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  gap: 1rem;
  padding-bottom: 1rem;

  .input_range {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
    }
    input {
      width: 110px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.pallet.gray_3};
      outline: none;
      padding-left: 0.5rem;
      border-radius: 0.5rem;

      &::-webkit-inner-spin-button {
        display: none;
      }
    }
  }
`;

export default RangeSlider;
