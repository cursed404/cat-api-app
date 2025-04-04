import styled from 'styled-components';

export const CatImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

export const CatImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
