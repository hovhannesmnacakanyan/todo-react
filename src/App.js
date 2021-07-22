import React from 'react';
import { Card, Button, Space, Paragraph, Title } from 'style-guide';

const App = () => {
  return (
    <div className='mx-auto mt-10'>
      <Card
        cardClasses='w-auto bg-white rounded-xl'
        titleAlign='center'
        components={{
          header: (
            <div>
              <Title>TODO: 4</Title>
              <Title>DONE: 4</Title>
            </div>
          ),
          body: (
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.
            </Paragraph>
          ),
          footer: (
            <>
              <Button type='secondary' size='middle'>
                Cancel
              </Button>
              <Space className='p-2' />
              <Button type='primary' size='middle'>
                Save
              </Button>
            </>
          ),
        }}
        data={{ title: 'Hello!!!', subtitle: 'hello world' }}
      />
    </div>
  );
};

export default App;
