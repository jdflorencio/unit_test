 class Person{
    fullName
    email
    birthDay

    constructor(fullName, email, birthDay) {
        this.fullName = fullName;
        this.email = email;
        this.birthDay = birthDay;
    }
}

class Employee extends Person {
    salary;

    constructor(fullName, email, birthDay, salary) {
        super(fullName, email, birthDay);
        this.salary = salary;
    }
}

class Client extends Person {
    adress;

    constructor(fullName, email, birthDay, adress) {
        super(fullName, email, birthDay);
        this.adress = adress;
    }
}

module.exports = {Person, Employee, Client}