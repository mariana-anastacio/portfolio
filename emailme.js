document.querySelectorAll('.input-label').forEach(label => {
    label.addEventListener('click', function() {
        const inputField = document.getElementById(label.getAttribute('for'));
        inputField.focus(); // Focus the input field
    });
});

// Function to manage label visibility on input field blur
document.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('blur', function() {
        if (input.value === '') {
            const label = document.querySelector(`label[for="${input.id}"]`);
            label.style.display = 'block'; // Show label if input is empty
        }
    });
});
