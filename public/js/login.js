const registerFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-register').value.trim();
  const email = document.querySelector('#email-register').value.trim();
  const password = document.querySelector('#password-register').value.trim();

  if (name && email && password) {
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Registration successful, redirect the user to the login page
        document.location.replace('/login');
      } else {
        // Registration failed, display an error message
        alert('Failed to register');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration');
    }
  }
};

document
  .querySelector('.register-form')
  .addEventListener('submit', registerFormHandler);
