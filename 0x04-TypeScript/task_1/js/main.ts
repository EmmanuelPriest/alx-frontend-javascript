class Teacher {
  private firstName_: string;
  private lastName_: string;
  private fullTimeEmployee_: boolean = true;
  private yearsOfExperience_?: number;
  private location_: string;

  constructor(firstName: string, lastName: string, location: string) {
    this.firstName_ = firstName;
    this.lastName_ = lastName;
    this.location_ = location;
  }

  get firstName() {
    return this.firstName_;
  }

  get lastName() {
    return this.lastName_;
  }

  get fullTimeEmployee() {
    return this.fullTimeEmployee_;
  }

  get yearsOfExperience() {
    return this.yearsOfExperience_;
  }

  set yearsOfExperience(value: number | undefined) {
    this.yearsOfExperience_ = value;
  }

  get location() {
    return this.location_;
  }

  [key: string]: any;
}


interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
