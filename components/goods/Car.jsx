import styled from 'styled-components';

export default function Car ({carInfo}) {
  const {title, price, discription, imgLink} = carInfo;
  return (
    <>
      <CarContainer>
        <CarInfo>
          <img src={imgLink} alt='foto' />

          <CarContentWrapper>
            
            <CarDiscription>
              <h3>{title}</h3>
              <p>{discription}</p>
            </CarDiscription>

            <CarPrice>
              <div>
                {price}
                <br />
                {' '}
                <span>подробнее</span>
              </div>
              <ButtonWrapper>
                <button type='button'>в корзину</button>
              </ButtonWrapper>
            </CarPrice>
          </CarContentWrapper>
        </CarInfo>
      </CarContainer>
    </>
  )
}

const CarContainer = styled.div`
  max-width: 870px;
`;

const CarInfo = styled.div`
  display: flex;
  background: #FFFFFF;
  padding: 50px 56px;
  margin-bottom: 30px;
  @media (max-width: 875px) {
    flex-direction: column;
  }

  @media (max-width: 415px) {
    padding: 20px 10px;
  }
`;

const CarDiscription = styled.div`
  margin: 0 45px;
  position: relative;
  
  h3 {
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #767070;
  }

  @media (max-width: 875px) {
    min-height: 200px;
    margin-top: 15px;
  }

  @media (max-width: 330px) {
    margin: 10px auto;
  }
`;

const CarPrice = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: #000000;
  }

  span:hover {
    cursor: pointer;
  }

  div {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-transform: uppercase;
    text-align: end;

    &:nth-child(1) {
      margin-right: 95px;
    }
  }

  @media (max-width: 485px) {
    position: initial;
    flex-direction: column; 

    div {
      &:nth-child(1) {
        margin: 0 auto;
      }
    }
  }
`;

const CarContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: flex;

  button {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 20px 50px;
    white-space: nowrap;
    background: #C12626;
    border: none;
    align-self: flex-end;
  }

  button:hover {
    cursor: pointer;
  }

  @media (max-width: 875px) {
    button {
      margin: 10px auto 0 auto;
    }
  }
`;