import styled from 'styled-components'

export default function Header () {
  return (
    <HeaderSection>
      <HeaderContainer>

        <HeaderBanner>
          <h1>
            <span>Авторазбор</span>
            <br />
            <span>б/у запчасти</span>
          </h1>
          <div>по минимальной цене</div>
        </HeaderBanner>

        <HeaderGeoInfo>
          <div>
            <img src='/img/geo.png' alt='vector' style={{width: '19px', height: '25px'}} />
            {' '}
            <span>Астрахань,  ул. Чкало, 122</span>
          </div>
          <div>
            <div>
              <img src='/img/call.png' alt='phone' style={{width: '21px', height: '21px'}} />
              <span>8-905-171-17-11</span>
            </div>
            {' '}
            <br />
            <span>С 8.00 до 20.00</span>
          </div>
        </HeaderGeoInfo>

        <HeaderSearch>
          <input placeholder='Поиск по сайту' /> 
          {' '}
          <button type='button'>поиск</button>
        </HeaderSearch>

      </HeaderContainer>
    </HeaderSection>
  )
}

const HeaderSection = styled.section`
  max-width: 1170px;
  margin: 0 auto;
  padding: 20px 0 0 0;
`;

const HeaderContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto; 
  display: grid;

  grid-template: 
      "one two two" 1fr
      "one three three" 1fr;

      @media (max-width: 1180px) {
        padding: 0 10px;

        grid-template: 
        "one two two" 1fr
        "one three three" 1fr
        "four four none" 1fr;
      }

      @media (max-width: 710px) {
        grid-template: 
      "one" 1fr
      "one" 1fr
      "four" 1fr
      "five" 1fr;
      }
`;

const HeaderBanner = styled.div`
  max-width: 334px;
  grid-area: one;

  h1 {
    margin: 0;

    font-style: normal;
    font-weight: 900;
    font-size: 44.8837px;
    line-height: 53px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #242424;
    
    span {
      white-space: nowrap;
    }  
  }

  div {
    font-style: normal;
    font-weight: bold;
    font-size: 21.3393px;
    line-height: 25px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
    padding: 15px 24px;
    background: #C12626;
    white-space: nowrap;
  }

  @media (max-width: 350px) {
    max-width: 270px;

    h1 {
      font-size: 36px;
    }

    div {
      font-size: 16px;
    }
  }
`;

const HeaderGeoInfo = styled.div`
  grid-area: two;
  display: flex;
  justify-self: end;
  width: 605px;
  justify-content: space-between;

  div {

    &:nth-child(1){
      span {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
      }
    }

    &:nth-child(2) {
      span {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
        float: right;
      }
    }

  }

  img {
    margin-right: 17px;
  }

  @media (max-width: 1180px) {
    justify-self: start;
    flex-direction: column;
    padding: 0 0 0 20px;
    width: 280px;

    div {
      &:nth-child(2) {
        margin-top: 10px;

        span {
          float: initial;
        }
      }
    }
  }

  @media (max-width: 710px) {
    grid-area: four;
    margin-top: -10px;
  }

  @media (max-width: 350px) {
    padding: 0;
  }
`;

const HeaderSearch = styled.div`
  grid-area: three;
  justify-self: end;
  width: 690px;
  display: flex;
  justify-content: space-between;
  align-self: end;

  input {
    max-width: 490px;
    flex-grow: 1;
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    padding: 20px 0 20px 28px;
    &::placeholder {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-transform: none;
      color: #C7C6C6;
      padding: 20px 0 20px 0px;
    }
  }
  button {
    max-width: 189px;
    padding: 20px 67px;
    text-align: center;
    background: #C12626;
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  button:hover {
    cursor: pointer;
  }

  @media (max-width: 1180px) {
    grid-area: four;
    justify-self: start;
    align-self: start;
  }

  @media (max-width: 710px) {
    grid-area: five;
    align-self: end;
    width: 334px;

    button {
      padding: 20px 20px;
    }
  }

  @media (max-width: 350px) {
    width: 270px;

    input {
      max-width: 200px;
    }

    button {
      padding: 10px 10px;
    }
  }
`;