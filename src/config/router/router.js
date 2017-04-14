// import * as names from './router_names.js';

var names = require('./router_names.js')

module.exports = [
	  {
      path: '/login',
      name: 'login',
      routerName: '登录',
      icon: 'el-icon-message',
      component: names.login
    },
    {
      path: '/',
      name: 'index',
      routerName: '首页',
      icon: 'el-icon-message',
      component: names.index,
      children: [
        {
          path: '/bns',
          name: 'bns',
          routerName: '综合管理',
          icon: 'el-icon-message',
          component: names.bns,
          children: [
            {
              path: '/bns/create_role',
              name: 'create_role',
              routerName: '新增角色',
              icon: 'el-icon-message',
              component: names.create_role,
            },
            {
              path: '/bns/user_manage_index',
              name: 'user_manage_index',
              routerName: '用户管理',
              icon: 'el-icon-message',
              component: names.user_manage_index,
            },
          ]
        },
        {
          path: '/eqt',
          name: 'eqt',
          routerName: '设备管理',
          icon: 'el-icon-message',
          component: names.eqt,
          children: [
            {
              path: '/eqt/eqt_type',
              name: 'eqt_type',
              routerName: '设备类型',
              icon: 'el-icon-message',
              component: names.eqt_type, 
            },
          ]
        },
        {
          path: '/money',
          name: 'money',
          routerName: '结算',
          icon: 'el-icon-message',
          component: names.money,
          children: [
            {
              path: '/money/ic_card',
              name: 'ic_card',
              routerName: 'IC卡',
              icon: 'el-icon-message',
              component: names.ic_card, 
            }
          ]
        },
      ]
    }
]
