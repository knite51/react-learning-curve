import CssModule from './1.CssModule';
import { LikeComponent } from './2.LikeComponent';

export const SecondSectionEx = () => {
  return (
    <>
      <div className="row mt-3">
        <hr />
        <h4 className="mb-3">Section Two Exercise</h4>
        <CssModule></CssModule>
        <LikeComponent
          onClickLike={() => console.log('clicked')}
        ></LikeComponent>
      </div>
    </>
  );
};
