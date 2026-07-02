const User = require('../../domain/entities/User');
const UserRepository = require('../../domain/repositories/UserRepository');

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(dto) {
    const user = new User(dto.id, dto.name, dto.email);
    this.userRepository.saveUser(user);
    return user;
  }
}

module.exports = CreateUser;