import StackRepository from "../repositories/stack.repository.js"

class StackService {
    async createIfNotExists(name) {
        try {
            const stackExists = await StackRepository.findOneByName(name);
            if (!stackExists) {
                const stack = await StackRepository.create(name);
                return { statusCode: 200, message: "Stack created successfully", stack };
            }
            return { statusCode: 200, message: "Stack already exists", stack: stackExists }
        }
        catch (error) {
            console.error(colors.bgYellow("[Stack Service][createIfNotExists]: Cannot create the stack"));
            console.error(error.message);
            return { statusCode: 500, message: "Failed to create the stack, try again later", stack: null };
        }
    }
}

export default new StackService();