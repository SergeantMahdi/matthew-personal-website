import StackModel from "../models/stack.model.js"

class StackRepository {

    async create(name) {
        const newStack = new StackModel({ name: name.toUpperCase() })
        const result = await newStack.save();
        return result;
    }

    async findOneByName(name) {
        const foundStack = await StackModel.findOne({ name: name.toUpperCase() });
        return foundStack;
    }

    async findByIdAndDelete(id) {
        const result = await StackModel.findByIdAndDelete(id);
        return result;
    }
    async findOneByNameAndDelete(name) {
        const result = await StackModel.findOneAndDelete({ name: name.toUpperCase() });
        return result;
    }

    async findByIdAndUpdate(id) {
        const result = await StackModel.findByIdAndUpdate(id, { new: true });
        return result
    }

    async findOneByNameAndUpdate(name) {
        const result = await StackModel.findOneAndUpdate({ name: name.toUpperCase() }, { new: true });
        return result
    }
}

export default new StackRepository();