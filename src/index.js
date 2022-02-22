import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {autorun, makeObservable, observable} from 'mobx'


const isLogin = observable(true);

const person = observable({
  name: 'Seyoung',
  age: 28,
});

class PersonStore {
  @observable
  name= "Jang Seyoung";

  @observable
  age = 29;

  constructor() {
    makeObservable(this);
  }
}

const personStore = new PersonStore();

autorun(() => {
  console.log(isLogin.get());
  console.log(person.age);
  console.log(personStore.age);
});

isLogin.set(false);
person.age = 30;
personStore.age = 31;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
