import React from 'react';
import { Button, Spacing, Heading, Text } from 'style-guide';

const App = () => {
  return (
    <Spacing className='p-8'>
      <Text className='text-green-500'>Hello</Text>
      <Heading.Component
        level={1}
        color={Heading.COLORS.PRIMARY}
        align={Heading.ALIGNS.CENTER}
        weight={Heading.WEIGHTS.BLACK}
        italic>
        Hello Kitty!!!
      </Heading.Component>
      <Button size='small'>Click me</Button>
    </Spacing>
  );
};

export default App;
