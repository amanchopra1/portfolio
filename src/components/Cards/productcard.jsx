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

const BuyNowButton = styled.button`
  background-color: #854ce6;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: auto;
`;



const ProductCard = ({ product }) => {
  const handleBuyNowClick = () => {
    // Trigger Razorpay payment logic here
    // You can refer to Razorpay documentation for implementing payment
    console.log('Buy Now clicked');
  };

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>{product.price}</Price>
      <BuyNowButton>
        <form>
          <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_NbGTIYDTmiBXmv" async />
        </form>
      </BuyNowButton>
      {/* Add other product details as needed */}
    </Card>
  );
};

export default ProductCard;


