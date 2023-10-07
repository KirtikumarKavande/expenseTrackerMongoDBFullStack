const express = require("express");
const expense=require('../controllers/expenseController')

const AuthMiddleware = require('../middleware/Auth')


const router = express.Router();

router.post("/addexpense",AuthMiddleware.authenticate, expense.addExpense);
router.get("/show-expense",AuthMiddleware.authenticate, expense.showExpenses);
router.get("/delete-expense/:id",AuthMiddleware.authenticate, expense.deleteExpense);
router.get("/leaderboad", expense.leaderboad);




module.exports = router;