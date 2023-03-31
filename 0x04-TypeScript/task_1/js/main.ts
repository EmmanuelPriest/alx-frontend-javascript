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
