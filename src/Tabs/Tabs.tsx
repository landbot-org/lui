import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../Box';
import { Tab } from './Tab';
import { Icon } from '../Icon';
import { ArrowButton, TabsContainer } from './Tabs.styles';
import { TabsProps } from './types';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getButtonIconSizeStyles } from './utils';

export const Tabs = ({
  tabs,
  onChange,
  showScrollButtons = true,
  size = 'medium',
  value = 0,
  showBottomLine = true,
}: TabsProps) => {
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [activeTab, setActiveTab] = useState(value);

  useEffect(() => {
    if (tabsContainerRef.current) {
      const offsetWidth = tabRef.current?.offsetWidth || 0;
      tabsContainerRef.current.scrollTo({
        left: activeTab * offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [activeTab, tabRef, tabsContainerRef]);

  const handleTabChange = (direction: 'right' | 'left', newActiveTab: number, disabled: boolean) => {
    if (disabled === false) {
      setDirection(direction);
      onChange(newActiveTab);
      setActiveTab(newActiveTab);
    }
  };

  return (
    <Box display="flex">
      {showScrollButtons && (
        <ArrowButton
          role="navigation"
          onClick={() => handleTabChange('left', getPreviousActiveTab(tabs, activeTab), false)}
          disabled={activeTab === 0}
          $size={size}
        >
          <Icon icon={<FontAwesomeIcon icon={faChevronLeft} />} size={getButtonIconSizeStyles(size)} />
        </ArrowButton>
      )}
      <TabsContainer role="tablist" ref={tabsContainerRef}>
        {tabs?.map((tab, index) => {
          return (
            <Tab
              active={activeTab === index && !tab.disabled}
              direction={direction}
              key={index}
              className="tab"
              disabled={tab.disabled}
              label={tab.label}
              onClick={() => {
                const direction = activeTab > index ? 'left' : 'right';
                handleTabChange(direction, index, Boolean(tab.disabled));
              }}
              ref={tabRef}
              size={size}
              showBottomLine={showBottomLine}
            />
          );
        })}
      </TabsContainer>
      {showScrollButtons && (
        <ArrowButton
          role="navigation"
          onClick={() => handleTabChange('right', getNextActiveTab(tabs, activeTab), false)}
          disabled={activeTab === tabs.length - 1}
          $size={size}
        >
          <Icon icon={<FontAwesomeIcon icon={faChevronRight} />} size={getButtonIconSizeStyles(size)} />
        </ArrowButton>
      )}
    </Box>
  );
};
