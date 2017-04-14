const login = function(resolve) {
	require(['../../page/login.vue'], resolve)
}

const index = function(resolve) {
	require(['../../page/index.vue'], resolve)
}

const bns = function(resolve) {
	require(['../../page/bns/index.vue'], resolve)
}

const user_manage_index = function(resolve) {
	require(['../../page/bns/sys_manage/user_manage/index.vue'], resolve)
}

const create_role = function(resolve) {
	require(['../../page/bns/sys_manage/role_manage/create_role.vue'], resolve)
}

const eqt = function(resolve) {
	require(['../../page/eqt/index.vue'], resolve)
}

const eqt_type = function(resolve) {
	require(['../../page/eqt/eqt_type.vue'], resolve)
}

const money = function(resolve) {
	require(['../../page/money/index.vue'], resolve)
}

const ic_card = function(resolve) {
	require(['../../page/money/ic_card.vue'], resolve)
}

export {login, index, bns, eqt, eqt_type, money, ic_card, create_role, user_manage_index};