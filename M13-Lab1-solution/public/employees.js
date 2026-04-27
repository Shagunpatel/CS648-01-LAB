"use strict";

var employees = [{ name: "John Doe", department: "IT" }, { name: "Jane Smith", department: "HR" }, { name: "Mike Johnson", department: "Finance" }];

function App() {
  return React.createElement("div", null, React.createElement("h2", null, "Employee List"), React.createElement("ul", null, employees.map(function (employee, index) {
    return React.createElement("li", { key: index }, employee.name + " - " + employee.department);
  })));
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));