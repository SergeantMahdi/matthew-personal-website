import stackService from "../../services/stack.service.js"

export async function getStacks(req, res) {
    const stacks = await stackService.getAllSacks();
    res.status(200).json({ stacks });
}

export async function createNewStack(req, res) {
    const { name } = req.body;
    const newStack = await stackService.createStack(name);
    res.status(200).json({ message: "Stack created successfully" });
}

export async function updateStack(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const updatedStack = await stackService.updateStackById(id, name)
    res.status(200).json({ message: "Stack updated successfully", updatedStack });
}

export async function deleteStack(req, res) {
    const { id } = req.params;
    const deletedStack = await stackService.deleteStackById(id);
    res.status(200).json({ message: "Stack deleted successfully" });
}