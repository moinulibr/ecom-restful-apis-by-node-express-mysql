class UserInterface{
    constructor(userRepository){
        this.userRepository = userRepository;
        if(this.userRepository === UserInterface){
            throw new Error("Cannot instantiate Abstract Class 'UserInterface' directly. ❌");
        }
    }

    async create(userData) {}
    async findByEmail(email) {}
    async findById(id) {}
    async updateToken(id, token) {}
}

module.exports = UserInterface;