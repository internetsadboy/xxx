import React from 'react';

const Main = (props) => {
  return (
    <main>
      <div style={{height: props.height, border: '1px solid'}}>image</div>
      <div style={{height: props.height, border: '1px solid'}}>email form</div>
      <div style={{height: props.height, border: '1px solid'}}>product</div>
    </main>
  )
}

export default Main
