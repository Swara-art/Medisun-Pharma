document.getElementById('showLogin').onclick = () => {
  document.getElementById('loginForm').classList.add('active');
  document.getElementById('signupForm').classList.remove('active');
};

document.getElementById('showSignup').onclick = () => {
  document.getElementById('signupForm').classList.add('active');
  document.getElementById('loginForm').classList.remove('active');
};

// LOGIN
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    email: document.getElementById('loginEmail').value,
    password: document.getElementById('loginPassword').value,
  };

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (res.ok && result.token) {
      localStorage.setItem('authToken', result.token);
      alert('Login successful!');
      location.href = 'index.html';
    } else {
      alert(result.message || 'Login failed');
    }
  } catch {
    alert('Error during login');
  }
});

// SIGNUP
document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('signupEmail').value,
    password: document.getElementById('signupPassword').value,
  };

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    alert(result.message || 'Signup successful!');
  } catch {
    alert('Error during signup');
  }
});
