import { getRoles, getCompanies } from "./modules/salaryData.js";
import {
  getAverageSalaryByRole,
  getAverageSalaryByCompany,
  getSalaryAtCompany,
  getIndustryAverageSalary,
} from "./modules/workAroundModule.js";

const companies = getCompanies();
const roles = getRoles();

// Create input buttons for every company and role represented in the data.
renderInputButtons(companies, "company");
renderInputButtons(roles, "role");

// This function will create a new <section> with radio
// inputs based on the data provided in the labels array.
function renderInputButtons(labels, groupName) {
  const container = document.createElement("section");
  container.setAttribute("id", `${groupName}Inputs`);

  let header = document.createElement("h3");
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach((label) => {
    // For each label...
    // Create the radio input element.
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "option");

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("name", groupName);
    inputElement.setAttribute("value", label);
    divElement.appendChild(inputElement);

    // Create a label for that radio input element.
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    // Update the results when the input is selected.
    inputElement.addEventListener("click", updateResults);

    container.appendChild(divElement);
  });

  document.querySelector("main").prepend(container);
}

let currentChart = null;
function updateResults() {
  if (currentChart) {
    currentChart.destroy(); // Destroy the current chart if it exists
  }
  // Get the current selected company and role from the radio button inputs.
  const company = document.querySelector("input[name='company']:checked").value;
  const role = document.querySelector("input[name='role']:checked").value;

  // If either the company or role is unselected, return.
  if (!company || !role) {
    return;
  }

  // TODO: Use the workAroundModule functions to calculate the needed data.
  const averageSalaryByRole = getAverageSalaryByRole(role);
  const averageSalaryByCompany = getAverageSalaryByCompany(company);
  const salary = getSalaryAtCompany(role, company);
  const industryAverageSalary = getIndustryAverageSalary();

  // Render them to the screen.
  document.getElementById(
    "salarySelected"
  ).innerText = `The salary for ${role}s at ${company} is \$${salary}`;
  document.getElementById(
    "salaryAverageByRole"
  ).innerText = `The industry average salary for ${role} positions is \$${averageSalaryByRole}`;
  document.getElementById(
    "salaryAverageByCompany"
  ).innerText = `The average salary at ${company} is \$${averageSalaryByCompany}`;
  document.getElementById(
    "salaryAverageIndustry"
  ).innerText = `The average salary in the Tech industry is \$${industryAverageSalary}`;

  // Render the chart.
  const salaryData = [
    parseFloat(salary),
    parseFloat(averageSalaryByRole),
    parseFloat(averageSalaryByCompany),
  ];
  const labels = [
    `Payed ${company} for ${role}`,
    `Average  ${role} in the industry`,
    `Average in ${company}`,
  ];

  renderChart(salaryData, labels);
}

function renderChart(data, labels) {
  const ctx = document.getElementById("salaryChart").getContext("2d");

  currentChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "", // Remove the label stupid bar still there
          data: data,
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
          barThickness: 20, // Weight each bar
          borderRadius: 10,
          hoverBorderRadius: 10,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      legend: {
        display: false,
      },
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return labels[tooltipItem[0].index];
          },
          label: function (tooltipItem, data) {
            return `Salary: $${tooltipItem.yLabel}`;
          },
        },
      },
    },
  });
}
