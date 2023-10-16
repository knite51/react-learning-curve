import VanillaCss from './1.VanillaCss/1.VanillaCss';
import CssInJS from './2.CssInJS';
import InlineStyle from './3.InlineStyle';
import AddIcons from './4.AddIcons';

const SecondSection = () => {
  return (
    <>
      <div className="row mt-3">
        <hr />
        <h4 className="mb-3">Section Two</h4>
        <VanillaCss></VanillaCss>
        <CssInJS></CssInJS>
        <InlineStyle></InlineStyle>
        <AddIcons></AddIcons>
      </div>
    </>
  );
};

export default SecondSection;
