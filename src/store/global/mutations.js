// import * as types from './mutations_types'
// import local from '../../util/local.js'

var types = require('./mutations_types.js')
var local = require('../../util/local.js')

module.exports = {
    [types.SHOW_LOADING](state) {
        state.ajax_loading = true;
    },

    [types.HIDE_LOADING](state) {
        state.ajax_loading = false;
    },

    [types.GET_NAV](state) {
        state.navList = local.get('navlist') || [];
    },

    [types.SAVE_NAV](state, list) {
        local.set('navlist', list);
    },

    [types.REMOVE_NAV](state) {
        local.remove('navlist', list);
        state.navList = [];
    },
};