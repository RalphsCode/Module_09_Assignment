export async function employees() {                                         // CREATE AND EXPORT AN ASYNC FUNCTION
    try {
        const response = await fetch('/js/data/employees.json');            // SITE ROOT RELATIVE PATH
        const employeeArray = await response.json();
        return employeeArray;
                       
    } catch (error) {
        console.error(error);                                               // FUNCTION IS IN MODULE FOLDER
                    }
                                };