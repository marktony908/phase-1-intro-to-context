// Your code 
// index.js

// Function to create a single employee record
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Function to create multiple employee records
  function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
  }
  
  // Function to add a timeIn event to an employee record
  function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date
    });
  
    return employee;
  }
  
  // Function to add a timeOut event to an employee record
  function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date
    });
  
    return employee;
  }
  
  // Function to calculate hours worked on a specific date
  function hoursWorkedOnDate(employee, date) {
    const timeInEvent = employee.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employee.timeOutEvents.find(event => event.date === date);
  
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  }
  
  // Function to calculate wages earned on a specific date
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
  }
  
  // Function to calculate total wages for an employee
  function allWagesFor(employee) {
    const datesWorked = employee.timeInEvents.map(event => event.date);
  
    return datesWorked.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
  }
  
  // Function to calculate payroll for all employees
  function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor(employee), 0);
  }
  
