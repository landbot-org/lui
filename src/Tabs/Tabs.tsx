import React, { useRef, useState, useEffect } from 'react';
import { useKeyboardEvent } from './hooks/useKeyboardEvent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../Box';
import { Tab } from './Tab';
import { Icon } from '../Icon';
import { ArrowButton, TabsContainer } from './Tabs.styles';
import { TabsProps } from './types';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getButtonIconSizeStyles } from './utils';

export const Tabs = ({ tabs, onChange, showScrollButtons = true, size = 'medium' }: TabsProps) => {
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [activeTab, setActiveTab] = useState(0);

  useKeyboardEvent('ArrowRight', () => {
    if (tabsContainerRef.current) {
      if (activeTab < tabs.length - 1) {
        handleTabChange('right', activeTab + 1, false);
      }
    }
  });

  useKeyboardEvent('ArrowLeft', () => {
    if (tabsContainerRef.current) {
      if (activeTab > 0) {
        handleTabChange('left', activeTab - 1, false);
      }
    }
  });

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
          onClick={() => handleTabChange('left', activeTab - 1, false)}
          disabled={activeTab === 0}
          $size={size}
        >
          <Icon icon={<FontAwesomeIcon icon={faChevronLeft} />} size={getButtonIconSizeStyles(size)} />
        </ArrowButton>
      )}
      <TabsContainer ref={tabsContainerRef}>
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
            />
          );
        })}
      </TabsContainer>
      {showScrollButtons && (
        <ArrowButton
          onClick={() => handleTabChange('right', activeTab + 1, false)}
          disabled={activeTab === tabs.length - 1}
          $size={size}
        >
          <Icon icon={<FontAwesomeIcon icon={faChevronRight} />} size={getButtonIconSizeStyles(size)} />
        </ArrowButton>
      )}
    </Box>
  );
};
