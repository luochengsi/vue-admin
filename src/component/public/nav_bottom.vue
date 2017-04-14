<template>
	<div class="nav-bottom flex-x-end">

      <div class="nav-item" v-for="item in navList"  
        :class="{active: name === item.caption}"
        @click="changeCate(item.caption, item.defaultUrl)">
        <div class="flex-x-center flex-y-center nav-icon">
          <i class="el-icon-menu"></i>
        </div>                        
        <div class="flex-x-center nav-name">{{item.name}}</div>
      </div>
    
    </div> 
</template>
<script>
import local from '../../util/local.js'
import jz from '../../JZ.js'
	export default {
    data() {
      return {
        navList: local.get('navlist')
      }
    },
		props: ['name'],
		methods: {
      changeCate(catename, pagename) {
      	if(catename !== this.name) {
      		this.$router.replace({
            name: pagename
          })
      	}	        
      },
    },
    // mounted() {
    //   var vm = this
    //   $.post({
    //     url: jz.initMenusService,
    //     data: {
    //       userId: 1,
    //       sysId: 1,
    //     },
    //     async: false,
    //   })
    //   .then(function(d) {
    //     vm.navList = d.aaData
    //     local.set('navlist', vm.navList)
    //   })
    // }
	}
</script>