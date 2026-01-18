// Handles login validation logic
// Prevents invalid login attempts before API calls

import bcrypt from "bcrypt";

/**
 * Validate login credentials
 * @param {string} username
 * @param {string} password
 * @returns {object} validation result
 */
export function validateLogin(username, password) {
  if (!username || !password) {
    return { valid: false, message: "Username and password are required." };
  }

  if (password.length < 6) {
    return { valid: false, message: "Password must be at least 6 characters." };
  }

  return { valid: true, message: "Login validation passed." };
}

/**
 * Handles login submission logic
 * NOTE: In real apps, password should be verified with server-side hashing.
 * This function simulates that behavior for the assignment.
 *
 * @param {string} username
 * @param {string} password
 * @param {string} storedHash - hashed password from DB
 * @returns {boolean} login result
 */
export async function handleLogin(username, password, storedHash) {
  const result = validateLogin(username, password);

  if (!result.valid) {
    console.error(formatAuthError(result.message));
    return false;
  }

  // Compare password with hashed password from DB
  const isValidPassword = await bcrypt.compare(password, storedHash);

  if (!isValidPassword) {
    console.error(formatAuthError("Invalid username or password."));
    return false;
  }

  console.log(`User ${username} logged in successfully`);
  return true;
}

// Formats authentication error messages consistently
export function formatAuthError(message) {
  return `AUTH ERROR: ${message}`;
}

