import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 150px;
  background-color: #000;
  border-radius: 10px;
  object-fit: cover;

  @media only screen and (max-width: 768px) {
    height: 100px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>{product.price}</Price>
      {/* Add other product details as needed */}
    </Card>
  );
};

export default ProductCard;
