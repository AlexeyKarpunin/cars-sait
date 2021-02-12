import styled from 'styled-components';

export default function BurgerBtn ({mBtnStatus, func, scroll}) {
  return (
    <MobileBtn onClick={func} status={mBtnStatus} scrollStatus={scroll}>
      {/* <svg className={mBtnStatus ? 'ham hamRotate ham1 active' : 'ham hamRotate ham1'} viewBox='0 0 100 100' width='50'>
        <path
          className='line top'
          d='m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40'
        />
        <path
          className='line middle'
          d='m 30,50 h 40'
        />
        <path
          className='line bottom'
          d='m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40'
        />
      </svg> */}
      КАТЕГОРИИ
    </MobileBtn>
  )
}
const MobileBtn = styled.button`
    position: fixed;
    height: 50px;
    bottom: 0;
    left: 0;
    z-index: 20;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background-color: #C12626;
    border-radius: 5px;
    outline: none;
    display: none;
    transition-duration: 1s;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 5px;
    @media (max-width: 1180px) {
      display: ${props => props.status ? 'flex' : 'flex'};
      opacity: ${props => props.status || props.scrollStatus ? '0' : '1'};
    }
`;