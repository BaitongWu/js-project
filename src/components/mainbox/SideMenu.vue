<template>
    <el-aside width="200px">
        <el-menu>
            <el-menu-item index="/home">
                <el-icon><icon-menu /></el-icon>
                <span>Home</span>
            </el-menu-item>
            <el-menu-item index="/center">
                <el-icon><icon-menu /></el-icon>
                <span>Center</span>
            </el-menu-item>
            <el-sub-menu index="/user-manage">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>User Management</span>
                </template>
                <el-menu-item index="/user-manage/adduser">Add User</el-menu-item>
                <el-menu-item index="/user-manage/userlist">User List</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/news-manage">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>News Management</span>
                </template>
                <el-menu-item index="/news-manage/addnews">Add News</el-menu-item>
                <el-menu-item index="/news-manage/newslist">News List</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/product-manage">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Product Management</span>
                </template>
                <el-menu-item index="/news-manage/addnews">Add Product</el-menu-item>
                <el-menu-item index="/product-manage/addproduct">Product List</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>
<style lang ="scss" scoped>
.el-aside {
    height: 100vh;
}
</style>