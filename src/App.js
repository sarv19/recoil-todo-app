import React from 'react';
import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';
import Todo from './Todo';

function App() {
  return (
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  )
}

export default App;
