import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = () => {
  const jsonFromServ = [
    { name: 'Jora', salary: 1000, premia: true, id: 1 },
    { name: 'Petka', salary: 800, premia: false, id: 2 },
    { name: 'Valerii', salary: 600, premia: true, id: 3 },
  ];

  return (
    <ul className="app-list list-group">
      {jsonFromServ.map((worker) => {
        const { id, ...itemProps } = worker;
        return <EmployeesListItem {...itemProps} key={id} />;
      })}
    </ul>
  );
};

export default EmployeesList;
