// Get the form element
const form = document.getElementById('registrationForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from actually submitting
    event.preventDefault();

    // Get the input values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const college = document.getElementById('college').value;
    const description = document.getElementById('course').value;

    // Create an object to store the student data
    const student = {
        name: name,
        email: email,
        college: college,
        description: description
    };

    // Get existing students from local storage or create an empty array if none exist
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Add the new student to the array
    students.push(student);

    // Save the updated array back to local storage
    localStorage.setItem('students', JSON.stringify(students));

    // Optionally, you can display an alert or success message
    alert('Student registered successfully!');

    // Reset the form after submission
    // form.reset();
    location.reload();
});
