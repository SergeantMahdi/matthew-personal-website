import UserModel from "../models/user.model.js"

class UserRepository {

    async findById(id) {
        const user = await UserModel.findById(id);
        return user;
    }
    async findByUsername(username) {
        const user = await UserModel.findOne({ username });
        return user;
    }
    async findByIdAndUpdate(id, data) {
        const updatedUser = await UserModel.findByIdAndUpdate(id, { ...data }, { new: true });
        return updatedUser;
    }

    async findByPasswordResetToken(token) {
        const user = await UserModel.findOne({ passwordResetToken: token });
        return user;
    }

    async findByEmail(email) {
        const user = await UserModel.findOne({ email });
        return user;
    }

    async create(data) {
        const newUser = new UserModel({ ...data });
        await newUser.save();
        return newUser
    }

    async setPasswordResetToken(id, token) {
        const updatedUser = await UserModel.findByIdAndUpdate(id, { passwordResetToken: token }, { new: true });
        return updatedUser;
    }

    async updateUsername(id, newUsername) {
        const updatedUser = await UserModel.findByIdAndUpdate(id, { username: newUsername }, { new: true });
        return updatedUser;
    }

    async updatePassword(id, newPassword) {
        const updatedUser = await UserModel.findByIdAndUpdate(id, { password: newPassword }, { new: true });
        return updatedUser;
    }

    async setRole(id, role) {
        const updatedUser = await UserModel.findByIdAndUpdate(id, { role }, { new: true });
        return updatedUser;
    }

    async updateEmail(id, newEmail) {
        const updatedUser = await UserModel.findByIdAndUpdate(id, { email: newEmail }, { new: true });
        return updatedUser;
    }
}

export default new UserRepository();