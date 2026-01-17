// Handles login validation logic
// Prevents invalid login attempts before API calls

export function validateLogin(username, password) {
  if (!username || !password) {
    return { valid: false, message: "Username and password are required." };
  }

  if (password.length < 6) {
    return { valid: false, message: "Password must be at least 6 characters." };
  }

  return { valid: true, message: "Login validation passed." };
}
// Handles login submission logic

export function handleLogin(username, password) {
  const result = validateLogin(username, password);

  if (!result.valid) {
    console.error(result.message);
    return false;
  }

  console.log(`User ${username} logged in successfully`);
  return true;
}
