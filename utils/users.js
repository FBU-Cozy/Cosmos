const users = [];

// Join user to chat (id is socketID)
function userJoin(id, userID, space) {
  const user = {id, userID, space};

  users.push(user);

  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves activity
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get users in space activity
function getSpaceUsers(space) {
  return users.filter(user => user.space === space)[0];
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getSpaceUsers
};
