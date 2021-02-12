import styled from 'styled-components'

export default function Ask() {
  return (
    <>
      <AskSection>
        <AskContainer>
          <Logotips>
            <div>
              <span>Ваз</span> 
              {' '}
              <span>Газ</span> 
              {' '}
              <span>Уаз</span>
            </div>
            <div>
              <span>Москвич</span> 
              {' '}
              <span>Нива</span> 
              {' '}
              <span>Ока</span> 
              {' '}
              <span>Газель</span> 
              {' '}
              <span>Зил</span>
            </div>
          </Logotips>
          <Question>
            <p>
              Где-то есть дешевле ? 
              {' '}
              <br />
              Продадим ещё дешевле! 
              {' '}
              <br />
              Цены не окончательны - торг!!! 
            </p>
          </Question>
        </AskContainer>
      </AskSection>
    </>
  )
}

const AskSection = styled.section`
  max-width: 1170px;
  margin: 0 auto;
`;
const AskContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 30px 0 0 0;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;


const Logotips = styled.div`
  max-width: 663px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 10px 50px 30px 35px;
  flex-grow: 1;

  div {
    display: flex;
    justify-content: space-between;

    &:nth-child(1){
      font-style: normal;
      font-weight: bold;
      font-size: 85.8661px;
      line-height: 101px;
      text-transform: uppercase;
      color: #000000;
    }

    &:nth-child(2){
      font-style: normal;
      font-weight: bold;
      font-size: 28.166px;
      line-height: 33px;
      text-transform: uppercase;
      color: #000000;
    }
  }

  @media (max-width: 1180px) {
    margin: 0 auto 30px auto;
    span {
      margin: 5px;
    }
  }

  @media (max-width: 604px) {
    flex-direction: initial;
    div {
      flex-direction: column;
    }
  }

  @media (max-width: 426px) {
    flex-direction: column;
    div {
      &:nth-child(2),
      &:nth-child(1){
        font-size: 18px;
        line-height: 10px;
        text-align: center;
        span {
          padding: 10px 0;
        }
      }
    }
  }
`;

const Question = styled.div`
  max-width: 479px;
  background: #242424;
  flex-grow: 1;
  padding: 15px 30px 33px 31px;
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 43px;
    color: #FFFFFF;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 1180px) {
    margin: 0 auto 30px auto;
  }
`;