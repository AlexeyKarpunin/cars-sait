import styled from 'styled-components'

export default function Header () {
  return (
    <HeaderSection>
      <HeaderContainer>

        <HeaderBanner>
          <h1>
            Авторазбор
            <br />
            б/у запчасти
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
`;

const HeaderContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto; 
  display: grid;
  grid-template: 
  "one two two" auto
  "one three three" auto
  "five five six" auto
  "four four six" auto;


  @media (max-width: 1180px) {
    padding: 0 0 0 20px;
  }

  @media (max-width: 310px) {
    padding: 0;
  }

`;

const HeaderBanner = styled.div`
  grid-area: one;
  max-width: 334px;
  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 44.8837px;
    line-height: 53px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #242424;
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

  @media (max-width: 385px) {
    h1 {
      font-size: 36px;
    }

    div {
      font-size: 16px;
    }
  }
`;

const HeaderGeoInfo = styled.div`
  width: 605px;
  display: flex;
  grid-area: two;
  justify-self: end;
  justify-content: space-between;

  div {
    align-self: center;
    display: flex;

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
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      padding: 0 0 5px 0;

      span {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
        margin-top: -5px;
      }
    }

    span {
      align-self: flex-end;
      margin-left: 17px;
    }
  }

  @media (max-width: 1180px) {
    flex-direction: column;
    justify-self: start;
    padding: 45px 0 0 40px;
    max-width: 350px;

    div {
      align-self: auto;

      &:nth-child(2) {
        align-self: auto;
        padding: 45px 0 0 0;
        span {
          align-self: auto;
        }
      }
    }
  }

  @media (max-width: 728px) {
    grid-area: five;
  }

  @media (max-width: 385px) {
    padding: 45px 0 0 0 ;
    max-width: 280px;
  }
`;

const HeaderSearch = styled.div`
  width: 690px;
  display: flex;
  justify-content: space-between;
  grid-area: three;
  align-self: end;
  justify-self: end;

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
    padding: 20px 0;
  }

  @media (max-width: 728px) {
    max-width: 334px
  }

  @media (max-width: 467px) {
    button {
      padding: 20px 20px;
    }
  }

  @media (max-width: 385px) {
    max-width: 280px;
    input {
      max-width: 190px;
    }
  }

  @media (max-width: 310px) {
    button {
      font-size: 12px;
    }

    input {
      max-width: 195px;
    }
  }
`;