const uid = require("uid-safe");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const strUid = uid.sync(18);
  res.json({ id: strUid });
});

module.exports = router;
