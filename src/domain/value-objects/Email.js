class Email {
  constructor(email) {
    if (!this.validateEmail(email)) {
      throw new Error('Invalid email');
    }
    this.email = email;
  }

  validateEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  }
}

module.exports = Email;