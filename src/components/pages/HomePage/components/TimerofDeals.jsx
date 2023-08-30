import Typography from '@/components/atoms/Typography';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const TimerOfDeals = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <TimerDiv>
      <div className='timer_item'>
        <Typography tag={'h6'}>{timeLeft.days}</Typography>
        <Typography tag={'span'} fw='400'>
          Days
        </Typography>
      </div>
      <div className='timer_item'>
        <Typography tag={'h6'}>{timeLeft.hour}</Typography>
        <Typography tag={'span'} fw='400'>
          Hour
        </Typography>
      </div>
      <div className='timer_item'>
        <Typography tag={'h6'}>{timeLeft.min}</Typography>
        <Typography tag={'span'} fw='400'>
          Min
        </Typography>
      </div>
      <div className='timer_item'>
        <Typography tag={'h6'}>{timeLeft.sec}</Typography>
        <Typography tag={'span'} fw='400'>
          Sec
        </Typography>
      </div>
    </TimerDiv>
  );
};
const TimerDiv = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .timer_item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 45px;
    height: 50px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.pallet.gray_8};

    h6 {
      color: ${({ theme }) => theme.pallet.base_white};
    }

    span {
      color: ${({ theme }) => theme.pallet.base_white};
    }
  }
`;

export default TimerOfDeals;
