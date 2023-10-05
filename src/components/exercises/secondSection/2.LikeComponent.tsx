import { useState } from 'react';
import ReusableCol from '../../classes/firstSection/ReusableCol';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface Like {
  onClickLike: () => void;
}

export const LikeComponent = ({ onClickLike }: Like) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <ReusableCol>
        <span
          onClick={() => {
            setClicked(!clicked);
            onClickLike();
          }}
          style={{ cursor: 'pointer' }}
        >
          {!clicked && <AiOutlineHeart size={30} />}
          {clicked && <AiFillHeart size={30} color="red" />}
        </span>
      </ReusableCol>
    </>
  );
};
