import React from 'react';
import { CatImageWrapper, CatImg } from './CatImage.styled';

const CatImage = ({ src }) => {
  return (
    <CatImageWrapper>
      {src ? <CatImg src={src} alt="Random Cat" /> : 'кот недоступен :c'}
    </CatImageWrapper>
  );
};

export default CatImage;
