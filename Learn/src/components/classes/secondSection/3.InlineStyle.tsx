import ReusableCol from '../firstSection/ReusableCol';

const InlineStyle = () => {
  return (
    <ReusableCol colDigit="2">
      <button
        style={{
          backgroundColor: 'pink',
          color: 'black',
          borderRadius: '5px',
          border: 'none',
          padding: '5px 8px',
        }}
      >
        Inline Styles
      </button>
    </ReusableCol>
  );
};

export default InlineStyle;
