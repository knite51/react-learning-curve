import EffectHook from './1.EffectHook';
import EffectRendering from './2.EffectRendering';
import FetchData from './3.FetchData';
import LoadingIndicator from './4.LoadingIndicator';

const FifthSection = () => {
  return (
    <>
      <div className="row mt-3">
        <hr />
        <h4 className="mb-3">Section Fifth</h4>
        {/* <EffectHook></EffectHook> */}
        {/* <EffectRendering></EffectRendering> */}
        {/* <FetchData></FetchData> */}
        <LoadingIndicator></LoadingIndicator>
      </div>
    </>
  );
};

export default FifthSection;
