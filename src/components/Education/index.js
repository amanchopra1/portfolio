import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ProductGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const BuyNowButton = styled.button`
  background-color: #854ce6;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RazorpayScript = () => (
    <form>
      <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="YOUR_RAZORPAY_BUTTON_ID" async />
    </form>
  );
  
  const MerchandiseSection = () => {
    const merchandiseData = [
      { name: 'Product 1', price: '$19.99', image: 'url_to_product_1_image.jpg' },
      { name: 'Product 2', price: '$29.99', image: 'url_to_product_2_image.jpg' },
      // Add more merchandise items as needed
    ];
  
    return (
      <Container id="merchandise">
        <Wrapper>
          <Title>Merchandise</Title>
          <Desc>
            Explore my exclusive merchandise collection. Click "Buy Now" to make a purchase.
          </Desc>
          <ProductGallery>
            {merchandiseData.map((product, index) => (
              <ProductCard key={index}>
                <ProductImage src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <BuyNowButton>Buy Now</BuyNowButton>
              </ProductCard>
            ))}
          </ProductGallery>
          <RazorpayScript />
        </Wrapper>
      </Container>
    );
  };
  
  export default MerchandiseSection;