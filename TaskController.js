const TaskModel = require ('./TaskModel');

// GET

module.exports.getTask = async (req, res) => {
	const Task = await TaskModel.find();
	res.send(Task)
}
// POST

module.exports.saveTask = async (req,res) => {
	const { title } = req.body;
	TaskModel.create ({ title })
	.then((data) => {
		console.log('Task added')
		res.send(data)
	})
}

// DELETE

module.exports.deleteTask = async (req,res) => {
	const {_id} = req.body;
	TaskModel.findByIdAndDelete(_id)
	.then(() => res.send('Task deleted'))
}

// PUT

module.exports.editTask = async (req,res) => {
	const { _id, title } = req.body
	TaskModel.findByIdAndUpdate(_id,{ title })
	.then(() => res.send('Task edited'))
}