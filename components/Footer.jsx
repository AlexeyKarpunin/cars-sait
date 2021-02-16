import styled from 'styled-components'
import Link from 'next/link'

export default function Footer () {
  return (
    <FooterSection>
      <FooterContainer>
        <Logo>
          <h1>
            <span>Авторазбор</span>
            <br />
            <span>б/у запчасти</span>
          </h1>
          <div>по минимальной цене</div>
        </Logo>
        <TableLinks>
          <li>Ваз</li>
          <li>Газ</li>
          <li>Уаз</li>
          <li>Москвич</li>
          <li>Нива</li>
          <li>Ока</li>
          <li>Газель</li>
          <li>Зил</li>
        </TableLinks>
        <Geo>
          <div>
            <img src='/img/geo.png' alt='vector' style={{width: '19px', height: '25px'}} />
            {' '}
            <span>Астрахань,  ул. Чкало, 122</span>
          </div>
          <div>
            <img src='/img/call.png' alt='phone' style={{width: '21px', height: '21px'}} />
            <span><a href='tel:8-905-171-17-11'>8-905-171-17-11</a></span>
          </div>
          <div>
            <span>С 8.00 до 20.00</span>
          </div>
        </Geo>
      </FooterContainer>
    </FooterSection>
  )
}

const FooterSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  background-color: #242424;
`;

const FooterContainer = styled.footer`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 50px 0;

  @media (max-width: 1180px) {
    padding: 50px 20px;
  }

  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  max-width: 269px;
  grid-area: one;

  h1 {
    margin: 0;

    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
  
    span {
      white-space: nowrap;
    }  
  }
  
  div {
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;  
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
    padding: 15px 24px;
    background: #C12626;
    white-space: nowrap;
  }

  @media (max-width: 1020px) {
    margin: 0 auto
  }

  @media (max-width: 300px) {
    h1 {
      font-size: 32px;
    }
    div {
      font-size: 14px;
    }
  }
`;

const TableLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  column-count: 3;
  width: 400px;

  li {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 2.2;
    text-transform: uppercase;
    color: #DADADA;
  }

  @media (max-width: 1020px) {
    margin: 20px auto;
    width: auto;
    column-count: 2;
    column-gap: 40px;
  }
`;

const Geo = styled.div`

    font-style: normal;
    display: flex;
    flex-direction: column;

    img {
      margin-right: 17px;
    }


    div {
      display: flex;
      margin-bottom: 24px;
      &:nth-child(1){

        span {
          font-weight: bold;
          font-size: 18px;
          line-height: 21px;
          color: #FFFFFF;
         }
      }

      &:nth-child(2){
        span {
          margin-top: -5px;
          font-weight: bold;
          font-size: 24px;
          line-height: 28px;
          color: #FFFFFF;
         }
      }

      &:nth-child(3){
        span {
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 28px;
          color: #FFFFFF;
         }
      }
    }

    @media (max-width: 1020px) {
      margin: 20px auto
      
    }
`;

/*

 */