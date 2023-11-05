// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyC3vcSB4nu9H1daBl_oq07-gwm15LHBt14',
//   authDomain: 'gir-hackathon-project.firebaseapp.com',
//   projectId: 'gir-hackathon-project',
//   storageBucket: 'gir-hackathon-project.appspot.com',
//   messagingSenderId: '314220607360',
//   appId: '1:314220607360:web:a443625f2160ec104cf365'
// };

// firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', function() {
    // Signup Page Elements
    const signupForm = document.getElementById('signup-form');
    const alumniFields = document.getElementById('alumni-fields');
    const studentFields = document.getElementById('student-fields');
    const signupSuccessMessage = document.getElementById('signup-success-message');

    // Function to show or hide fields based on the selected category
    function toggleFields() {
        const category = document.querySelector('input[name="category"]:checked').value;

        if (category === 'Alumni') {
            alumniFields.classList.remove('hidden-fields');
            studentFields.classList.add('hidden-fields');
        } else if (category === 'Student') {
            studentFields.classList.remove('hidden-fields');
            alumniFields.classList.add('hidden-fields');
        }
    }

    // Add event listener to the radio buttons on the signup page
    const signupRadioButtons = document.querySelectorAll('input[name="category"]');
    signupRadioButtons.forEach(function(radio) {
        radio.addEventListener('change', toggleFields);
    });

    // Initial toggle when the signup page loads
    toggleFields();

    // Handle signup form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Your signup form submission logic here

        // For demonstration purposes, we'll simulate success and error messages
        const signupSuccess = true; // Replace with your actual success condition

        if (signupSuccess) {
            signupSuccessMessage.textContent = 'Congratulations! Sign up successful.';
            // You can also redirect the user or perform other actions on success
        } else {
            signupSuccessMessage.textContent = 'Error: Sign up failed. Please try again.';
            // You can display a more specific error message based on the failure reason
        }
    });

    // Login Page Elements
    const loginForm = document.getElementById('login-form');
    const loginErrorMessage = document.getElementById('login-error-message');

    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Your login form submission logic here

        // For demonstration purposes, we'll simulate success and error messages
        const loginSuccess = true; // Replace with your actual success condition

        if (loginSuccess) {
            // Redirect the user to their dashboard or another page on success
            window.location.href = 'dashboard.html';
        } else {
            loginErrorMessage.textContent = 'Error: Invalid username or password. Please try again.';
        }
    });

    // Forgot Password Page Elements
    const resetForm = document.getElementById('forgot-password-form');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const resetMessage = document.getElementById('reset-message');

    resetForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Your forgot password form submission logic here

        // For demonstration purposes, we'll simulate sending a reset link
        // You should handle actual email sending logic in your application
        const resetSuccess = true; // Replace with your actual success condition

        if (resetSuccess) {
            resetMessage.textContent = 'Password reset link sent to your email.';
        } else {
            resetMessage.textContent = 'Error: Failed to send reset link. Please try again.';
        }
    });
});
