import styled from 'styled-components'

export default function Categoties ({mBtnStatus, func}) {
  return (
    <>
      <CatWrraper status={mBtnStatus}>
        <TableContainer>
          <div><span onClick={func}>+</span></div>
          <h3>Категории</h3>
          <CatTable>
            <li>Кузов</li>
            <li>Трансмиссия</li>
            <li>Двигатель</li>
            <li>Ходовая</li>
            <li>Салон</li>
            <li>Колёса</li>
          </CatTable>
        </TableContainer>
      </CatWrraper>
    </>
  )
}

const CatWrraper = styled.div`
  background: #FFFFFF;
  max-width: 270px;
  margin-bottom: 30px;
  flex-grow: 1;
  transition-duration: 1s;

  @media (max-width: 1180px) {
    position: absolute;
    top: 0;
    bottom: 0;
    margin-left: ${props => props.status ? '0px' : '-300px'};
    z-index: 10;
  }
`;

const CatTable = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
 
  li {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    color: #575859;
    line-height: 21px;
    padding: 0 0 27px 0;
  }

  li:hover {
    cursor: pointer;
    color: #000000;
  }

`;

const TableContainer = styled.div`
  padding: 43px 0 0 43px;
  position: sticky;
  top: 10px;
  h3 {
    margin-top: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: #000000;
  }

  div {
    display: none;
  }

  @media (max-width: 1180px) {
    padding: 43px 43px 0 43px;

    div {
      display: flex;
      text-align: right;
      margin-right: -20px;
      flex-direction: column;
      span {
        cursor: pointer;
        display: block;
        width: 20px;
        transform: rotate(45deg);
        font-size: 22px;
        align-self: flex-end;
      }
    }
  }
`;