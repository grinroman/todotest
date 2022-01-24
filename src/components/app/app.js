import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  // onToggleIncrease = (id) => {
  //   // сам метод смены increse у нашего объекта из массива объектов
  //   this.setState(({ data }) => {
  //     //используем функцию для изменения состояния
  //     const index = data.findIndex((el) => el.id === id); //определяем индекс элемента с таким айдишником, на который будем нажимать
  //     const newItem = { ...data[index], increase: !data[index].increase }; //в новый объект первым параметром закидываем все его свойства и далее делаем замену одного из свойств
  //     const newArr = [
  //       //формируем новый массив объеков на основе того, что заменили одн из них
  //       ...data.slice(0, index),
  //       newItem,
  //       ...data.slice(index + 1),
  //     ];

  //     return { data: newArr };
  //   });
  // };

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  onToggleProp = (id, prop) => {
    // мы взяли ещё один параметр - под него будетт подставляться наш аттрибут в зависимсоти от того какой узел будет вызываться
    this.setState(({ data }) => ({
      //в компоненте каждого листайтема есть дата-атрибут  data-toggle="increase" или rise и в зависимости от этого будет определено какое свойство нам подставится
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter((el) => el.increase).length;

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
