const Task = require('../models/Task');
const asyncHandler = require('../middlewares/asyncHandler');
const ErrorHandler = require('../helpers/ErrorHandler');

exports.getTasks = asyncHandler(async (req, res, next) => {
    const tasks = await Task.find({});
    res.status(200).json({
        success: true,
        tasks
    });
});


exports.addTask = asyncHandler(async (req, res, next) => {
    console.log('add task hit')
    if(!req.body.title || req.body.title.length < 1) {
        return next(new ErrorHandler('title is required', 400));
    }
    const task = await Task.create({
        title: req.body.title
    });

    res.status(201).json({
        success: true,
        task
    });
});


exports.updateTaskById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const task = await Task.findById(id);

    if(!task) {
        return next(new ErrorHandler('Task not found', 404));
    }

    await task.updateOne(req.body);

    res.status(201).json({
        success: true,
        message: 'Successfully updated'
    })
});


exports.deleteTaskById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const task = await Task.findById(id);

    if(!task) {
        return next(new ErrorHandler('Task not found', 404));
    }

    await task.deleteOne();

    res.status(200).json({
        success: true,
        id,
        message: 'Task deleted'
    })
});