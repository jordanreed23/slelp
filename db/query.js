var db = require('./connection');

function createUser(data) {
  return db('users').insert(data);
}

function checkUser(user) {
  return db('users').first().where('username', user.username);
}

function checkGroup(group) {
  return db('groups').first().where('group_code', group);
}

function checkLogin(user) {
  return db('users').first().where({'username': user.username, 'password': user.password});
}

function getGroupName(group_id) {
    return db('groups').first().where('id', group_id);
}

function getHelps(group_id){
  return db('helps').where('group_id', group_id);
}

function getHelpUser(user){
  return db('users').first().where('id', user);
}

function getAnswers(help_id){
  return db('answers').where('help_id', help_id);
}

function getCategory(cat_id){
  return db('categories').where('id', cat_id);
}
<<<<<<< HEAD
////-------------------
=======

function getHelpInfo(help_id) {
  return db('helps').where('id', help_id);
}

function getAnswerUser(id) {
  return db('users').where('id', id);
}

>>>>>>> 6e4ad65a92e47a5ac7e7f52e219074f926bfb83e

module.exports = {
  checkUser,
  createUser,
  checkGroup,
  checkLogin,
<<<<<<< HEAD
//////////////////
=======
>>>>>>> 6e4ad65a92e47a5ac7e7f52e219074f926bfb83e
  getGroupName,
  getHelps,
  getHelpUser,
  getAnswers,
<<<<<<< HEAD
  getCategory
=======
  getCategory,
  getHelpInfo,
  getAnswerUser
>>>>>>> 6e4ad65a92e47a5ac7e7f52e219074f926bfb83e
};
//////-----------------
