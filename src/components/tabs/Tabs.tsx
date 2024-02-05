import { createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Icon } from '../icon';
import { Tab } from './Tab';
import { TabsProps } from './Tabs.types';
import { getButtonIconSizeStyles } from './Tabs.utils';

import { ArrowButton, Container, TabsContainer } from './Tabs.styles';

const ARROW_SIZE = 32;
const SCROLL_SIZE = 100;

export const Tabs = ({
  tabs,
  onChange,
  size = 'medium',
  value = 0,
  showBottomLine = true,
  disableScrollButtons = false,
}: TabsProps) => {
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [showStartScrollButton, setShowStartScrollButton] = useState(false);
  const [showEndScrollButton, setShowEndScrollButton] = useState(false);
  const tabRef = useMemo(() => tabs.map(() => createRef<HTMLDivElement>()), [tabs]);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  const handleCheckScrollButtons = useCallback(() => {
    if (!tabsContainerRef.current) {
      return;
    }
    const scrollLeft = tabsContainerRef.current.scrollLeft;
    const scrollWidth = tabsContainerRef.current.scrollWidth;
    const clientWidth = tabsContainerRef.current.clientWidth;

    const showStartScroll = Math.floor(scrollLeft) > 1;
    const showEndScroll = Math.ceil(scrollLeft) < scrollWidth - clientWidth - 1;

    setShowStartScrollButton(showStartScroll);
    setShowEndScrollButton(showEndScroll);
  }, [tabsContainerRef]);

  const scrollToActiveTab = useCallback(() => {
    if (tabsContainerRef.current && tabsContainerRef.current.scrollTo) {
      const offsetWidth = tabRef.reduce((accumulator, currentValue, index) => {
        return value > index ? accumulator + (currentValue.current?.offsetWidth || 0) : accumulator;
      }, 0);
      tabsContainerRef.current.scrollTo({
        left: offsetWidth - ARROW_SIZE,
        behavior: 'smooth',
      });
      setTimeout(() => {
        handleCheckScrollButtons();
      }, 200);
    }
  }, [tabRef, value, handleCheckScrollButtons]);

  const handleResize = useCallback(() => {
    handleCheckScrollButtons();
  }, [handleCheckScrollButtons]);

  useEffect(() => {
    if (disableScrollButtons) {
      return;
    }
    const tabsContainerDomElement = tabsContainerRef.current;
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (tabsContainerDomElement) {
      resizeObserver.observe(tabsContainerDomElement);
    }

    return () => {
      if (resizeObserver && tabsContainerDomElement) {
        resizeObserver.unobserve(tabsContainerDomElement);
      }
    };
  }, [disableScrollButtons, handleResize]);

  useEffect(() => {
    scrollToActiveTab();
  }, [scrollToActiveTab, handleCheckScrollButtons]);

  const handleTabChange = (direction: 'right' | 'left', newActiveTab: number, disabled: boolean) => {
    if (disabled === false) {
      setDirection(direction);
      onChange(newActiveTab);
    }
  };

  const handleClickArrow = (arrowSide: 'left' | 'right') => {
    if (tabsContainerRef.current && tabsContainerRef.current.scrollTo) {
      const scrollLeft = tabsContainerRef.current.scrollLeft || 0;
      tabsContainerRef.current.scrollTo({
        left: arrowSide === 'left' ? scrollLeft - SCROLL_SIZE : scrollLeft + SCROLL_SIZE,
        behavior: 'smooth',
      });
      setTimeout(() => {
        handleCheckScrollButtons();
      }, 200);
    }
  };

  return (
    <Container $showBottomLine={showBottomLine} display="flex">
      {!disableScrollButtons && showStartScrollButton && (
        <ArrowButton
          aria-label="navigation-left"
          role="navigation"
          onClick={() => handleClickArrow('left')}
          $size={size}
        >
          <Icon icon={<FontAwesomeIcon icon={faChevronLeft} />} size={getButtonIconSizeStyles(size)} />
        </ArrowButton>
      )}
      <TabsContainer display="flex" alignItems="center" tabIndex={0} role="tablist" ref={tabsContainerRef}>
        {tabs?.map((tab, index) => (
          <Tab
            active={value === index && !tab.disabled}
            direction={direction}
            className="tab"
            key={tab.label}
            disabled={tab.disabled}
            label={tab.label}
            onClick={() => handleTabChange(value > index ? 'left' : 'right', index, Boolean(tab.disabled))}
            ref={tabRef[index]}
            size={size}
            showBottomLine={showBottomLine}
          />
        ))}
      </TabsContainer>
      {!disableScrollButtons && showEndScrollButton && (
        <ArrowButton
          role="navigation"
          aria-label="navigation-right"
          onClick={() => handleClickArrow('right')}
          $size={size}
        >
          <Icon icon={<FontAwesomeIcon icon={faChevronRight} />} size={getButtonIconSizeStyles(size)} />
        </ArrowButton>
      )}
    </Container>
  );
};
