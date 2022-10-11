
export function validateEmail(mail) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail);
}

export function validateUsername(username) {
    return username.length > 2;
}

export function validatePassword(password) {
    return password.length > 5;
}