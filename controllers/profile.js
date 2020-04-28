const handleProfileGet = db => (req, res) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then((user) => {
      // if user.length means if user exists (either equal to 1 or bigger than 1), then print the user, if not, then show error not found
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("Not found");
      }
    })
    .catch((err) => res.status(400).json("error getting user"));
};

module.exports = {
  handleProfileGet: handleProfileGet,
};
