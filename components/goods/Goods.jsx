import styled from 'styled-components';
import Categoties from './Categories';
import Car from './Car';
import BurgerBtn from '../BurgerBtn';
import { useEffect, useState } from 'react';

const carArray = [{
  title: 'Капот от ГАЗ 24',
  price: '140 р',
  discription: 'Краткое описание или ещё что нибудь можно и без него',
  imgLink: '/img/car-hood.jpg',
},
{
  title: 'Капот от ГАЗ 24',
  price: '140 р',
  discription: 'Краткое описание или ещё что нибудь можно и без него',
  imgLink: '/img/car-hood.jpg',
}
];

export default function Goods() {

  const [menuStatus, setMenuStatus] = useState(false);
  const [scrollStatus, setScroll] = useState(false);

  useEffect (()=> {
    function changeScroll () {
      if (window.scrollY > 609) {
        setScroll(false)
      } else {
        setScroll(true)
      }
    }
    document.addEventListener('scroll', changeScroll);
    return () => document.removeEventListener('scroll', changeScroll);
  }, [])

  function toggleMenu() {
    menuStatus ? setMenuStatus(false) : setMenuStatus(true);
  }

  return (
    <>
      <GoodsSection>
        <GoodsContainer>
          <Categoties mBtnStatus={menuStatus} func={toggleMenu} />
          <BurgerBtn mBtnStatus={menuStatus} func={toggleMenu} scroll={scrollStatus} />
          <CarContainer>
            {carArray.map( (obj, index) => <Car key={`car info${index}`} carInfo={obj} />)}
          </CarContainer>
        </GoodsContainer>
      </GoodsSection>
    </>
  )
}

const GoodsSection = styled.section`
  max-width: 1170px;
  margin: 0 auto;
  padding: 30px 0 0 0;
`;

const GoodsContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
 
  @media (max-width: 1180px) {
    position: relative;
  }
`;

const CarContainer = styled.div`

@media (max-width: 1180px) {
  margin: 0 auto;
}
`;