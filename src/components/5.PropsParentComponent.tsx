// Props (Parent to Child data)
// Props Function (Child to parent data)

import { useState } from 'react';
import { PropsChildComponent } from './4.PropsChildComponent';

export const PropsParentComponent = () => {
  const title = 'Props - Parent to Child to Parent)';
  const [listTitle, setListTitle] = useState('Parent Data');

  const handleChildData = (text: string) => {
    setListTitle(text);
  };

  return (
    <>
      <PropsChildComponent
        title={title}
        className="col-md-3"
        onNotifyParent={handleChildData}
        listTitle={listTitle}
      ></PropsChildComponent>
    </>
  );
};
