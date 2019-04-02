<template>
<div class="nav">
    
      <!-- <nuxt-link to="profile">profile</nuxt-link>
      <nuxt-link to="admin">admin</nuxt-link> -->
  <el-tabs v-model="activeName" @tab-click="handleClick">
      
    <el-tab-pane v-for="(item,index) in menu" :key="index" :label="item.title" :to="item.to" >
        {{item.title}}
    </el-tab-pane>
    <!-- admin1</nuxt-link> -->
    <!-- <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane> -->
  </el-tabs>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        menu:[
            {to:"/",title:"Home"},
            {to:"/admin",title:"Admin"},

        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        var vm = this;
        var route = tab.$attrs.to;
        // console.log("ROUTE TAB",this.$route);
        vm.$router.push({path:route});
      }
    }
  };
</script>