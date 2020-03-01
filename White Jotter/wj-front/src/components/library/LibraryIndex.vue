<template>
    <el-container>
        <el-aside width = "150px">
            <SideMenu @index-select="listByCategory" ref="sideMenu"></SideMenu>
        </el-aside>
        <el-main>
            <books class="books-area" ref="booksArea"></books>
        </el-main>
    </el-container>
</template>

<script>
import SideMenu from './SideMenu'
import Books from './Books'
export default {
    name: 'AppLibrary',
    components: {
        SideMenu,
        Books
    },
    methods: {
        listByCategory () {
            var _this = this
            var cid = this.$refs.sideMenu.cid
            var url = 'api/categories/' + cid + '/books'
            this.$axios.get(url).then(resp => {
                if (resp && resp.status === 200) {
                    _this.$refs.booksArea.books = resp.data
                    _this.$refs.booksArea.currentPage = 1
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.books-area {
    min-width: 990px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

</style>
