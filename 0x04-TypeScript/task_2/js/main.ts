interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

interface Employee {
  empID: number;
  name: string;
  role: string;
}

interface Director extends Employee {
  department: string;
}

function isDirector(employee: Employee): employee is Director {
  return (employee as Director).department !== undefined;
}

function workDirectorTasks(director: Director): void {
  console.log('Getting to director tasks');
}

function workTeacherTasks(): void {
  console.log('Getting to teacher tasks');
}

function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    workDirectorTasks(employee);
  } else {
    workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    throw new Error(`Invalid subject: ${todayClass}`);
  }
}
