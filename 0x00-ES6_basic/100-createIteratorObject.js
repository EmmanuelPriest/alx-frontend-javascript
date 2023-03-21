export default function createIteratorObject(report) {
  const emps = [];
  // eslint-disabled-next-line
    for (const dep of Object.keys(report.allEmployees)) {
    // eslint-disabled-next-line
        for (const emp of report.allEmployees[dep]) {
      emps.push(emp);
    }
  }

  return emps;
}
