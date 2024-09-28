// Get the form element
const form = document.querySelector('.registration-form form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from actually submitting
    event.preventDefault();

    // Get the input values from the form
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const college = document.getElementById('college').value;
    const description = document.getElementById('course').value;

    // Get existing students from local storage
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Find the student with the matching email
    const studentIndex = students.findIndex(student => student.email === email);

    if (studentIndex !== -1) {
        // Update the existing student data
        students[studentIndex] = {
            name: name,
            email: email,
            college: college,
            description: description
        };

        // Save the updated array back to local storage
        localStorage.setItem('students', JSON.stringify(students));

        // Display a success message
        alert('Student information updated successfully!');
    } else {
        alert('No student found with that email address.');
    }

    // Reset the form after submission
    form.reset();
});

// Pre-fill the form with existing student data on input change
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function() {
    const email = emailInput.value;
    let students = JSON.parse(localStorage.getItem('students')) || [];

    const student = students.find(student => student.email === email);

    if (student) {
        document.getElementById('name').value = student.name;
        document.getElementById('college').value = student.college;
        document.getElementById('course').value = student.description;
    } else {
        // Clear the form fields if no student is found
        document.getElementById('name').value = '';
        document.getElementById('college').value = '';
        document.getElementById('course').value = '';
    }
});