import { useRef, useCallback, useState, useEffect } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function useCarousel(props) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(props?.initialSlide || 0);

  const [nav, setNav] = useState(undefined);

  const rtl = theme.direction === 'rtl';

  const carouselSettings = {
    arrows: false,
    dots: !!props?.customPaging,
    rtl,
    beforeChange: (current, next) => setCurrentIndex(next),
    ...props,
    fade: !!(props?.fade && !rtl),
  };
  // useEffect(() => {
  //   console.log('Hey 99');
  // }, [nav, carouselRef.current]);
  const onSetNav = useCallback(() => {
    console.log('Hey 7');
    if (carouselRef.current) {
      setNav(carouselRef.current);
      console.log('Hey 4');
    }
  }, []);

  const onPrev = useCallback(() => {
    if (carouselRef.current) {
      console.log('Hey 5');
      carouselRef.current.slickPrev();
    }
  }, []);

  const onNext = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slickNext();
      console.log('Hey 3');
    }
  }, []);

  const onTogo = useCallback((index) => {
    if (carouselRef.current) {
      console.log('Hey');
      carouselRef.current.slickGoTo(index);
    }
  }, []);

  return {
    nav,
    carouselRef,
    currentIndex,
    carouselSettings,
    //
    onPrev,
    onNext,
    onTogo,
    onSetNav,
    //
    setNav,
    setCurrentIndex,
  };
}
