const CreateUser = require('../../application/use-cases/CreateUser');
const InMemoryUserRepository = require('../../infrastructure/repositories/InMemoryUserRepository');

class UserController {
  constructor() {
    this.userRepository = new InMemoryUserRepository();
    this.createUserUseCase = new CreateUser(this.userRepository);
  }

  createUser(req, res) {
    const user = this.createUserUseCase.execute(req.body);
    res.status(201).json(user);
  }
}

module.exports = UserController;