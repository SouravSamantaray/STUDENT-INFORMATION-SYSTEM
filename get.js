document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('studentTableContainer');
    
    // Retrieve student data from local storage
    const students = JSON.parse(localStorage.getItem('students')) || [];

    if (students.length === 0) {
        tableContainer.innerHTML = '<p>No student data available.</p>';
        return;
    }

    // Create table
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>College</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    const tbody = table.querySelector('tbody');

    // Populate table with student data
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.college}</td>
            <td>${student.description}</td>
        `;
        tbody.appendChild(row);
    });

    tableContainer.appendChild(table);
});