const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account, User } = require("../db");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({ userId: req.userId });
  res.json({ balance: account.balance });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  const { amount, to } = req.body;
  session.startTransaction();
  const fromaccount = await Account.findOne({ userId: req.userId }).session(
    session
  );
  const toaccount = await Account.findOne({ userId: to }).session(session);

  if (!fromaccount) {
    await session.abortTransaction();
    return res.status(404).json({ err: "Invalid account" });
  }
  if (fromaccount.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  if (!toaccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  await session.commitTransaction();
  await session.endSession();
  res.json({
    message: "Transfer successful",
  });
});

module.exports = router;
