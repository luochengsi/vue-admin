<template>
    <div class="left left-menu" :style="{'width':$store.state.leftmenu.width}" id='admin-left'>
        <div id='left-menu'>
            <el-row class='tac' style="height: 100%;">
                <el-col :span="24" style="height: 100%;">
                    <el-menu :default-active="$route.name" theme="dark" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose">

                        <template v-for="item in routerList">
                            <template v-if="item.hasChildren == 1">
                                <el-submenu :index="item.caption">
                                
                                    <template slot="title">
                                        <mItem :menuname="item.name" icon="el-icon-message"></mItem>
                                    </template>

                                    <template v-for="el in item.children">                                        

                                        <template v-if="el.hasChildren == 1">
                                            <el-submenu :index="el.caption">
                                                <template slot="title">
                                                    <mItem :menuname="el.name" icon="el-icon-message"></mItem>
                                                </template>
                                                <el-menu-item v-for="e in el.children" 
                                                :index="e.caption" 
                                                :style="{'padding-left':$store.state.leftmenu.menu_flag? '30px' : '30px'}">
                                                    <mItem :menuname="e.name" icon="el-icon-message"></mItem>        
                                                </el-menu-item>
                                            </el-submenu>
                                        </template>


                                        <template v-else>
                                            <el-menu-item :index="el.caption" :style="{'padding-left':$store.state.leftmenu.menu_flag? '30px' : '30px'}">
                                                <mItem :menuname="el.name" icon="el-icon-message"></mItem>        
                                            </el-menu-item>
                                        </template>


                                    </template>

                                </el-submenu>
                            </template>


                            <template v-else>
                                <el-menu-item :index="item.caption" :style="{'padding-left':$store.state.leftmenu.menu_flag? '30px' : '30px'}">
                                    <mItem :menuname="item.name" icon="el-icon-message"></mItem>        
                                </el-menu-item>
                            </template>
                        </template>

                    </el-menu>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import mItem from '../public/el_menu.vue'
import local from '../../util/local.js'
import jz from '../../JZ.js'
    export default {
        name: 'left-menu',
        components: {mItem},
        data () {  
            var list = local.get('navlist')
            var arr = []
            var vm = this
            list.forEach(function(d) {
                if(d.caption === vm.name) {
                    arr = d.children
                }
            })          
            return {
                menu_list:[],

                win_size:{
                    height:'',
                },
                routerList: arr,
            }
        },
        // mounted() {
        //     var vm = this            
        //     $.post({
        //         url: jz.initMenusService,
        //         data: {
        //           userId: 1,
        //           sysId: 1,
        //         },
        //         async: false,
        //       })
        //       .then(function(d) {
        //         var list = d.aaData
        //         var arr = []
        //         list.forEach(function(d) {
        //             if(d.caption === vm.name) {
        //                 arr = d.children
        //             }
        //         })
        //         vm.routerList = arr
        //       })
        // },
        props: ['name'],
        methods:{
            setSize(){
                this.win_size.height=$(window).height()+"px";
            },

            toggleMenu(){
                this.$store.dispatch(this.$store.state.leftmenu.menu_flag?'set_menu_close':'set_menu_open');
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(index, indexPath) {
                this.$router.push({name: index})
            },
        },
        created(){
            this.setSize();
            $(window).resize(()=>{
                this.setSize();
            });
        },
    }
</script>

<style scoped>
    .fa{
        margin-right: 8px;
    }
    .left-fixed-right-auto{
        padding-top: 60px;
    }
    .left{
        position:fixed;
        float:left;
        /*width:190px;
        margin-right:-190px;*/
        top:50px;
    }
    .right-content{
        float:right;
        width:100%;
    }
    #left-menu{
        height: 100%;
        background: #34495E;
        position: relative;
        overflow-x: hidden;   
    }
</style>
