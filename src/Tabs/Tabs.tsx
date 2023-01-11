import React, { useRef, useState, useEffect } from 'react';
import { useKeyboardEvent } from './hooks/useKeyboardEvent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab } from './Tab';
import { Icon } from '../Icon';
import { ArrowButton, Container, TabsContainer } from './Tabs.styles';
import { TabsProps } from './types';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getButtonIconSizeStyles } from './utils';

export const Tabs: React.FC<TabsProps> = ({ tabs, onChange, showScrollButtons = true, size = 'medium' }: TabsProps) => {
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState(0);

  useKeyboardEvent('ArrowRight', () => {
    if (tabsContainerRef.current) {
      if (activeTab < tabs.length - 1) {
        handleTabChange(activeTab + 1);
        tabsContainerRef.current.scrollBy({
          left: tabRef.current?.offsetWidth || 0,
          behavior: 'smooth',
        });
      }
    }
  });

  useKeyboardEvent('ArrowLeft', () => {
    if (tabsContainerRef.current) {
      if (activeTab > 0) {
        handleTabChange(activeTab - 1);
        tabsContainerRef.current.scrollBy({
          left: -(tabRef.current?.offsetWidth || 0),
          behavior: 'smooth',
        });
      }
    }
  });

  useEffect(() => {
    if (tabsContainerRef.current) {
      const offsetWidth = tabRef.current?.offsetWidth || 0;
      tabsContainerRef.current.scrollTo({
        left: activeTab * offsetWidth,
      });
    }
  }, [activeTab, tabRef, tabsContainerRef]);

  const handleTabChange = (newActiveTab, disabled = false) => {
    if (disabled === false) {
      onChange(newActiveTab);
      setActiveTab(newActiveTab);
    }
  };

  return (
    <Container display="flex">
      {showScrollButtons && (
        <ArrowButton onClick={() => handleTabChange(activeTab - 1)} disabled={activeTab === 0} $size={size}>
          <Icon icon={<FontAwesomeIcon icon={faChevronLeft} />} size={getButtonIconSizeStyles(size)} />
        </ArrowButton>
      )}
      <TabsContainer ref={tabsContainerRef}>
        {tabs?.map((tab, index) => {
          return (
            <Tab
              key={index}
              className="tab"
              disabled={tab.disabled}
              label={tab.label}
              onClick={() => handleTabChange(index, tab.disabled)}
              ref={tabRef}
              size={size}
              active={activeTab === index && !tab.disabled}
            />
          );
        })}
      </TabsContainer>
      {showScrollButtons && (
        <ArrowButton
          onClick={() => handleTabChange(activeTab + 1)}
          disabled={activeTab === tabs.length - 1}
          $size={size}
        >
          <Icon icon={<FontAwesomeIcon icon={faChevronRight} />} size={getButtonIconSizeStyles(size)} />
        </ArrowButton>
      )}
    </Container>
  );
};
