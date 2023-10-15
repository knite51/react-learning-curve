// React Hook - Side Effects management: any logic or execution that wont rerender the component
// will be called after each render

import React, { useEffect, useRef } from 'react';
import ReusableCol from '../firstSection/ReusableCol';

const EffectHook = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current?.focus();
  });

  useEffect(() => {
    document.title = 'Test App';
  });

  return (
    <>
      <ReusableCol>
        <h4>Into to Effect Hook </h4>
        <input ref={ref} type="text" className="form-control" />
      </ReusableCol>
    </>
  );
};

export default EffectHook;
