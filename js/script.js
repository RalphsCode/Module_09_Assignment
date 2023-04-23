// GET THE ARRAY OF EMPLOYEES FROM MODULES

import { employees } from "/js/modules/init.js"                                      // SITE ROOT RELATIVE PATH

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees')
let empCount    = document.querySelector('#empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex)
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')

    // LOOP THROUGH THE JSON ARRAY OF EMPLOYEES
    employees()
    .then(employeeArray => {                                                        // USE .THEN() TO PROCESS THE RETURNED JSON OBJECT
            
    // REBUILDING THE ROW STRUCTURE
    for (let employee of employeeArray.employees) {                                 // LOOP THROUGH THE JSON ARRAY RETURNED FROM THE MODULE
        tbody.innerHTML += 
        `
        <tr>
            <td>${employee.empName}</td>
            <td>${employee.empID}</td>
            <td>${employee.empExt}</td>
            <td><a href="mailto:${employee.empEmail}">${employee.empEmail}</a></td>
            <td>${employee.empRole}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
                }
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${employeeArray.employees.length})`;
                            })
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);
        };