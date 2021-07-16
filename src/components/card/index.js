import React from 'react';
import { Link } from 'gatsby';

import {
  card,
  cardTitle,
  cardDescription,
  ctaContainer,
  cta,
  cardCircle,
} from './card.module.scss';

const Card = ({ slug }) => {
  return (
    <div className={card}>
      <h2 className={cardTitle}>Awesome Headline</h2>
      <p className={cardDescription}>
        Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla
        non metus auctor fringilla.
      </p>
      <div className={ctaContainer}>
        <Link to={slug} className={cta}>
          Call to action
        </Link>
      </div>
      <div className={cardCircle}></div>
    </div>
  );
};

export default Card;
