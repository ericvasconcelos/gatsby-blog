import React, { memo, useEffect, useState, useRef } from 'react';
import {
  hero,
  heroContent,
  heroTitle,
  heroDescription,
} from './hero.module.scss';

const randomSpeed = () => {
  const speeds = [160, 200, 240, 300];
  const randomNumber = Math.floor(Math.random() * (4 - 0)) + 0;
  return speeds[randomNumber];
};

const countries = [
  'Brazil',
  'United States',
  'South Africa',
  'Japain',
  'Australia',
  'Spain',
];

const Hero = () => {
  let letter = useRef(0);
  let countryIndex = useRef(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const typeWriter = (country, callback) => {
      if (letter.current < country.length) {
        setText((oldText) => oldText + country.charAt(letter.current));
        letter.current++;
        setTimeout(() => typeWriter(country, callback), randomSpeed());
      } else {
        setTimeout(() => {
          letter.current = 0;
          setText(() => '');
          countryIndex.current++;
          callback();
        }, 1500);
      }
    };

    const typeAllWriter = () => {
      if (countryIndex.current < countries.length) {
        typeWriter(countries[countryIndex.current], typeAllWriter);
      } else {
        countryIndex.current = 0;
        typeAllWriter();
      }
    };

    const timer = typeAllWriter();

    return () => clearTimeout(timer);
  }, [letter, countryIndex]);

  return (
    <div className={hero}>
      <div className={heroContent}>
        <h1 className={heroTitle}>{text}</h1>
        <p className={heroDescription}>
          <b>Countrypedia:</b> Important information from all countries in just
          one place
        </p>
      </div>
    </div>
  );
};

export default memo(Hero);
