// JWT Audience Claims.
// You could add Audience claimns either in env file or in constant like following..
module.exports.JWT_OPTIONS = {
  MEMBER_AUDIENCE: ["SHOW_FAVORITE", "LOGIN", "SHOW_BOOKS"],
  ADMIN_AUDIENCE: [
    "SHOW_FAVORITE",
    "LOGIN",
    "SHOW_BOOKS",
    "ADD_BOOK",
    "SHOW_USERS",
  ],
};

module.exports.ADD_BOOK = "ADD_BOOK";
module.exports.SHOW_USERS = "SHOW_USERS";
