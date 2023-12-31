import { LogicalLoopComponent } from './1.LogicalLoopComponent';
import { EventsComponent } from './2.EventsComponents';
import { StateManagementComponent } from './3.StateManagementComponent';
import { PropsParentComponent } from './5.PropsParentComponent';
import PassChildrenComponent from './6.PassingChildrenComponent';
import { Fruits } from '../../../utils/data';

const FirstSection = () => {
  const fruits: string[] = Fruits;
  return (
    <>
      <div className="row mt-3">
        <hr />
        <h4 className="mb-3">Section One</h4>
        <LogicalLoopComponent></LogicalLoopComponent>
        <EventsComponent></EventsComponent>
        <StateManagementComponent></StateManagementComponent>
        <PropsParentComponent></PropsParentComponent>
        <PassChildrenComponent title="Children Props">
          <ul className="list-group">
            {fruits.map((furit) => (
              <li className="list-group-item" key={furit}>
                {furit}
              </li>
            ))}
          </ul>
        </PassChildrenComponent>
      </div>
    </>
  );
};

export default FirstSection;
