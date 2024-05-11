<template>
   
    
    <el-container>
      <SideMenus/>
      <el-container direction = "vertical">
        <TopHeaders/>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
</template>
<script setup>
import TopHeaders from '../components/mainbox/TopHeader'
import SideMenus from '../components/mainbox/SideMenu.vue'
</script>