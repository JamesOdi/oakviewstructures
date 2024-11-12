'use client';

import { MyButton } from './components/button';

export default function Home() {
  return (
    <>
      <div
        style={{
          padding: '10px',
        }}
      >
        <MyButton label='My Button' color='--secondary'></MyButton>
      </div>
    </>
  );
}
