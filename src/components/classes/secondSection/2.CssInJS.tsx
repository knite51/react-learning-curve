// CssinJS: controversial as all css and logic are written together. Local scope.
// Styling based on props or state.
// Libraries include Styled components(In Use), Emotion, Polished.

import { useState } from 'react';
import ReusableCol from '../firstSection/ReusableCol';
import styled from 'styled-components';

// Noticed the naming convention must be CamelCase as well.
const Btn = styled.button`
  background: #9f2d4c5e;
  padding: 2px 8px;
  border-radius: 4px;
`;

const Anchor = styled.a`
  text-decoration: none;
`;

// Styling based on props or state;
interface Btn2Props {
  setStyle: boolean;
}

const Btn2 = styled.button<Btn2Props>`
  background: ${(props) => (props.setStyle ? 'purple' : '#9f2d4c5e')};
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: 5px;
`;

const CssInJS = () => {
  const [styleState, setStyleState] = useState(true);
  return (
    <ReusableCol>
      <div className="row">
        <ReusableCol colDigit="3">
          <Btn>
            <Anchor href="#" target="_blank">
              CSSInJS
            </Anchor>
          </Btn>
        </ReusableCol>
        <ReusableCol colDigit="9">
          <Btn2 className="btn mt-5" setStyle={styleState}>
            CSSInJS Managed by State
          </Btn2>
        </ReusableCol>
      </div>
    </ReusableCol>
  );
};

export default CssInJS;
