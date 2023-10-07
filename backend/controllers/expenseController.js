const Expense = require("../models/expense");
const User = require("../models/auth");
const addExpense = async (req, res) => {
  const { title, category, amount } = req.body;

  try {
    const expense = new Expense({
      title: title,
      category: category,
      amount: Number(amount),
      userId: req.user._id,
    });

    const data = await expense.save();

    // Update the user's totalExpense
    const user = await User.findById(req.user._id);
    user.totalExpense += Number(amount);
    await user.save();

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
const showExpenses = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    let Items_PER_PAGE = +req.query.choosepagesize;

    let totalItems;
    totalItems = await Expense.countDocuments({ userId: req.user._id });

    const data = await Expense.find({ userId: req.user._id })
      .skip((page - 1) * Items_PER_PAGE)
      .limit(Items_PER_PAGE);
    res.status(201).json({
      expense: data,
      currentPage: page,
      hasNextPage: Items_PER_PAGE * page < totalItems,
      nextPage: page + 1,
      hasPreviousPage: page > 1,
      lastPage: Math.ceil(totalItems / Items_PER_PAGE),
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
const deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const expense = await Expense.findOne({ _id: id });

    const user = await User.findById(req.user._id);
    user.totalExpense -= Number(expense.amount);
    await user.save();

    await Expense.deleteOne({ _id: id });
    return res.status(200).json({ success: true, data: "succefully Deleted" });
  } catch (err) {
    return res.status(200).json({ success: true, err });
  }
};

const leaderboad = async (req,res) => {
  const users = await User.find()  .sort({ totalExpense: -1 }) 
  

  res.status(200).json(users);
};
module.exports = { addExpense, showExpenses, deleteExpense, leaderboad };
