// import * as types from './mutations_types'

var types = require('./mutations_types.js')

module.exports = {
    [types.SET_MENU_OPEN](state) {
        state.width = '150px';
        state.menu_flag = true;
    },
    [types.SET_MENU_CLOSE](state) {
        state.width = '90px';
        state.menu_flag = false;
    },
};