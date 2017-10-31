'use strict'

const fs = require('fs')

class Employee {
  constructor (name, title, salary) {
    this._name = name;
    this._title = title;
    this._salary = salary
  }

  get name () {
    return this._name;
  }

  set name (name) {
    this._name = name;
  }

  get title () {
    return this._title;
  }

  set title (title) {
    this._title = title;
  }

  get salary () {
    this._salary;
  }

  set salary (salary) {
    this._salary = salary;
  }

  static parseFromFilePath(file) {
    const employee = JSON.parse(fs.readFileSync(file).toString())
    return new Employee(employee.name, employee.title, employee.salary);
  }

  promote(title, salary) {
    this._title = title;
    this._salary = salary;
  }
}

// TODO ???

module.exports = {
  Employee
}
