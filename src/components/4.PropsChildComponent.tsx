// Props (Parent to Child data)
// Props Function (Child to parent data)
import { PropsParentChildData } from '../interface/interface';

export const PropsChildComponent = ({
  title,
  className,
  onNotifyParent,
  listTitle,
}: PropsParentChildData) => {
  return (
    <>
      <div className={className}>
        <h5>{title}</h5>
        <ul className="list-group">
          <li
            className="list-group-item"
            onClick={() => {
              onNotifyParent('Child Data');
            }}
          >
            {listTitle}
          </li>
        </ul>
      </div>
    </>
  );
};
