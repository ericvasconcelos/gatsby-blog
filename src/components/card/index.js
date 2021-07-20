import React, { memo } from 'react';
import { Link } from 'gatsby';

import {
  card,
  cardTitle,
  cardDescription,
  ctaContainer,
  cta,
  cardCircle,
} from './card.module.scss';

const Card = ({ slug, content }) => {
  const { name, nativeName, region, flag, capital } = content;

  return (
    <Link to={slug} className={card}>
      <div className={cardCircle} style={{ backgroundImage: `url(${flag})` }} />
      <h2 className={cardTitle}>{`${name} - ${nativeName}`}</h2>
      <p className={cardDescription}>
        Region: {region}
        <br />
        Capital: {capital}
      </p>
      <div className={ctaContainer}>
        <button className={cta}>Ver detalhes</button>
      </div>
    </Link>
  );
};

export default memo(Card);
