const UserRepository = require('../../domain/repositories/UserRepository');

class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();
    this.users = new Map();
  }

  findUserById(id) {
    return this.users.get(id);
  }

  saveUser(user) {
    this.users.set(user.id, user);
  }
}

module.exports = InMemoryUserRepository;