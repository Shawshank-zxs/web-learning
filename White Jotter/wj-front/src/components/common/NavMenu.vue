<template>
    <el-menu :default-active="this.$route.path" :router = "true" mode="horizontal" background-color="white" text-color="#222" active-text-color="red">
        <el-menu-item v-for="(item,i) in navList" :key = "i" :index="item.name">
            {{item.navItem}}
        </el-menu-item>
    <a href="#nowhere">More</a>
    <i class="el-icon-menu"></i>
    <span>White Jotter -- Your Mind Palace</span>
    </el-menu>
</template>

<script>
export default {
    name: 'NabMenu',
    data () {
        return {
            navList: [
                { name: '/index', navItem: 'Home' },
                { name: '/jotter', navItem: 'Notebook' },
                { name: '/library', navItem: 'Library' },
                { name: '/admin', navItem: 'Personal Center' }
            ]
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

el-menu {
    min-width: 1300px;
}

a {
    color: #222;
    float: right;
    padding: 20px;
    text-decoration: none;
}

i {
    float: right;
    font-size: 45px;
    color: #222;
    padding-top: 8px;
}

span {
    position: absolute;
    padding-top: 20px;
    right: 39%;
    font-size: 20px;
    font-weight: bold;
    pointer-events: none;
}
</style>
