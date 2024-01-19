import React, { useEffect, useMemo, useRef, useState } from 'react';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Icon } from '../Iconz';
import { Tab } from './Tab';
import { ArrowButton, Container, TabsContainer } from './Tabs.styles';
import { TabsProps } from './types';
import { getButtonIconSizeStyles, getNextActiveTab, getPreviousActiveTab } from './utils';

export const Tabs = ({
  tabs,
  onChange,
  showScrollButtons = true,
  size = 'medium',
  value = 0,
  showBottomLine = true,
}: TabsProps) => {
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRef = useMemo(() => tabs.map(() => React.createRef<HTMLDivElement>()), [tabs]);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  useEffect(() => {
    if (tabsContainerRef.current && tabsContainerRef.current.scrollTo) {
      const offsetWidth = tabRef[value]?.current?.offsetWidth || 0;
      tabsContainerRef.current.scrollTo({
        left: value * offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [value, tabRef, tabsContainerRef]);

  const handleTabChange = (direction: 'right' | 'left', newActiveTab: number, disabled: boolean) => {
    if (disabled === false) {
      setDirection(direction);
      onChange(newActiveTab);
    }
  };

  return (
    <Container display="flex">
      {showScrollButtons && (
        <ArrowButton
          aria-label="navigation-left"
          role="navigation"
          onClick={() => handleTabChange('left', getPreviousActiveTab(tabs, value), false)}
          $disabled={value === 0}
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
      {showScrollButtons && (
        <ArrowButton
          role="navigation"
          aria-label="navigation-right"
          onClick={() => handleTabChange('right', getNextActiveTab(tabs, value), false)}
          $disabled={value === tabs.length - 1}
          $size={size}
        >
          <Icon icon={<FontAwesomeIcon icon={faChevronRight} />} size={getButtonIconSizeStyles(size)} />
        </ArrowButton>
      )}
    </Container>
  );
};
