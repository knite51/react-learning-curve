import { useState } from 'react';

interface ExpandableTextProps {
  maxChar?: number;
  children: string;
}

const ExpandableText = ({ maxChar = 100, children }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChar) return children;

  const stipped = !isExpanded
    ? children.substring(0, maxChar) + '...'
    : children;

  return (
    <>
      {stipped}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        Read {isExpanded ? 'less' : 'more'}
      </button>
    </>
  );
};

export default ExpandableText;
