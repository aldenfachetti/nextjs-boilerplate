import { Story, Meta } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'Storybook')}
    description={text(
      'Description',
      'A simple project starter to work with TypeScript, React, NextJS and Styled-Components'
    )}
  />
)
