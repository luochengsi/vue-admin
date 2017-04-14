// import state from './state';
// import mutations from './mutations';
// import getters from './getters';
// import actions from './actions';

var state = require('./state');
var mutations = require('./mutations');
var getters = require('./getters');
var actions = require('./actions');

module.exports = {
    state,
    mutations,
    getters,
    actions
};