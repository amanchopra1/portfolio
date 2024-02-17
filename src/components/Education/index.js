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
  color: #fff;
`;

const ProductCard = styled.div`
  background-color: #0f0f0;
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
  background-color: #F8CC62;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const RazorpayScript = () => (
  <form>
    <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_NbGTIYDTmiBXmv" async />
  </form>
);

const MerchandiseSection = () => {
  const handleBuyNowClick = () => {
    // Trigger Razorpay payment logic here
    // You can refer to Razorpay documentation for implementing payment
    console.log('Buy Now clicked');
  };
    const merchandiseData = [
      {
        name: 'Black Tension T-shirt',
        description: 'Premium black t-shirt from Haribol Collections, made from 100% cotton for a stylish and comfortable look.',
       
        image: 'https://i.ibb.co/Bqtf6Gk/blacktension.jpg',
      },
      {
        name: 'Butterfly T-shirt',
        description: 'Stylish butterfly-themed t-shirt from Haribol Collections, made from 100% cotton for a trendy and chic style.',
         
        image: 'https://i.ibb.co/mGLC2jR/butterfly.jpg',
      },
      {
        name: 'Butterfly Back T-shirt',
        description: 'Unique butterfly back t-shirt from Haribol Collections, made from 100% cotton for a distinctive and stylish appearance.',
        
        image: 'https://i.ibb.co/WV7JLKP/butterflybackk.jpg',
      },
      {
        name: 'Why Worry Butterfly T-shirt',
        description: 'Elegant white butterfly-themed t-shirt from Haribol Collections, made from 100% cotton for a graceful and fashionable look.',
       
        image: 'https://i.ibb.co/ckNKWy1/butterflywhite.jpg',
      },
      {
        name: 'Why Worry Black T-shirt',
        description: 'Classic black t-shirt from Haribol Collections, made from 100% cotton for a timeless and comfortable style.',
      
        image: 'https://i.ibb.co/pvW68NV/hariblack.jpg',
      },
      {
        name: 'Why Worry White T-shirt',
        description: 'Chic white t-shirt from Haribol Collections, made from 100% cotton for a stylish and comfortable look.',
      
        image: 'https://i.ibb.co/h9WYZ6R/hariwhite.jpg',
      },
      {
        name: 'Hare Krishna Hoodies ',
        description: 'Trendy hood back clothes from Haribol Collections, made from premium cotton for a stylish and cozy outfit.',
       
        image: 'https://i.ibb.co/xqqtsSb/hoodback.jpg',
      },
      
      {
        name: 'Humare Sath Black T-shirt',
        description: 'Versatile black t-shirt from Haribol Collections, made from 100% cotton for a comfortable and stylish look.',
         
        image: 'https://i.ibb.co/QjQgzyY/humaresathblack.jpg',
      },
      {
        name: 'Humaresath White T-shirt',
        description: 'Timeless white t-shirt from Haribol Collections, made from 100% cotton for a classic and comfortable style.',
         
        image: 'https://i.ibb.co/Jq8cRk6/humaresathwhite.jpg',
      },
      {
        name: 'No Tension Black T-shirt',
        description: 'Sleek black t-shirt from Haribol Collections, made from 100% cotton for a modern and comfortable look.',
         
        image: 'https://i.ibb.co/4P3rwcg/notensionblack.jpg',
      },
      {
        name: 'No Tension White T-shirt',
        description: 'Clean white t-shirt from Haribol Collections, made from 100% cotton for a minimalist and comfortable style.',
         
        image: 'https://i.ibb.co/sVddVKX/notensionwhite.jpg',
      },
     
      {
        name: 'White Butterfly T-shirt 2',
        description: 'Graceful white butterfly-themed t-shirt from Haribol Collections, made from 100% cotton for an elegant and comfortable style.',
         
        image: 'https://i.ibb.co/VL8RX28/whitebutterfly.jpg',
      },
    ];
  
    // Add more merchandise items as needed
  
  
  
  
  

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
  <p> {product.price}</p>
  <BuyNowButton onClick={handleBuyNowClick}>Buy Now</BuyNowButton>
  <RazorpayScript />
</ProductCard>

            ))}
          </ProductGallery>
          <RazorpayScript />
        </Wrapper>
      </Container>
    );
  };
  export default MerchandiseSection;  
