import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={
          (e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle')) // говорим что в качестве пропса мы ещё прокинем ф-ию, которая в зависимости от
        } // дата атрибута будет подставлять свойство в вытаскиваемый изменяемый объект.
      /> //После изменнеия это добро ляжет в новый массив объектов, т.к. он не иммутыбл и поэтому ему  создаем копию
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
