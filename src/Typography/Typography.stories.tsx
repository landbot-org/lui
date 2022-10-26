import { Story } from '@storybook/react';
import React from 'react';
import { Typography } from './Typography';
import { TypographyProps } from './types';

export default {
  title: 'Typography',
  component: Typography,
};

const commonStoryProps = {
  children: 'Almost before we knew it, we had left the ground.',
};

const Template = (props: TypographyProps) => <Typography {...props} />;

export const Default: Story<TypographyProps> = Template.bind({});
Default.args = commonStoryProps;

const TemplateH1 = (props: TypographyProps) => <H1 {...props} />;

export const H1Story: Story<TypographyProps> = TemplateH1.bind({});
H1Story.args = commonStoryProps;
H1Story.storyName = 'H1';

const TemplateH2 = (props: TypographyProps) => <H2 {...props} />;

export const H2Story: Story<TypographyProps> = TemplateH2.bind({});
H2Story.args = commonStoryProps;
H2Story.storyName = 'H2';

const TemplateH3 = (props: TypographyProps) => <H3 {...props} />;

export const H3Story: Story<TypographyProps> = TemplateH3.bind({});
H3Story.args = commonStoryProps;
H3Story.storyName = 'H3';

const TemplateTab = (props: TypographyProps) => <Typography {...props} variant="tab" />;

export const TabStory: Story<TypographyProps> = TemplateTab.bind({});
TabStory.args = commonStoryProps;
TabStory.storyName = 'Tab';

const TemplateButton = (props: TypographyProps) => <Typography {...props} variant="button" />;

export const ButtonStory: Story<TypographyProps> = TemplateButton.bind({});
ButtonStory.args = commonStoryProps;
ButtonStory.storyName = 'Button';

const TemplatePlaceholder = (props: TypographyProps) => <Typography {...props} variant="placeholder" />;

export const PlaceholderStory: Story<TypographyProps> = TemplatePlaceholder.bind({});
PlaceholderStory.args = commonStoryProps;
PlaceholderStory.storyName = 'Placeholder';

const TemplateBody1 = (props: TypographyProps) => <P {...props} />;

export const Body1Story: Story<TypographyProps> = TemplateBody1.bind({});
Body1Story.args = commonStoryProps;
Body1Story.storyName = 'Body1';

const TemplateBody2 = (props: TypographyProps) => <Typography {...props} variant="body2" />;

export const Body2Story: Story<TypographyProps> = TemplateBody2.bind({});
Body2Story.args = commonStoryProps;
Body2Story.storyName = 'Body2';

const TemplateSmall = (props: TypographyProps) => <Small {...props} />;

export const SmallStory: Story<TypographyProps> = TemplateSmall.bind({});
SmallStory.args = commonStoryProps;
SmallStory.storyName = 'Small';

const TemplateTag = (props: TypographyProps) => <Typography {...props} variant="tag" />;

export const TagStory: Story<TypographyProps> = TemplateTag.bind({});
TagStory.args = commonStoryProps;
TagStory.storyName = 'Tag';

const TemplateCustom = (props: TypographyProps) => <Span {...props} />;

export const SpanStory: Story<TypographyProps> = TemplateCustom.bind({});
SpanStory.args = commonStoryProps;
SpanStory.storyName = 'Custom';
