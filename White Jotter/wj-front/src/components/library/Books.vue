<template>
    <div>
        <el-row class="row" id="Contents">
            <search-bar @onsearch="searchResult" ref="searchBar"></search-bar>
            <el-tooltip effect="dark" placement="right" v-for="item in books.slice((currentPage - 1) * pageSize, currentPage * pageSize)" :key="item.id">
                <p id="title" slot="content">{{item.title}}</p>
                <p id="basis" slot="content">
                    <span>{{item.author}} / </span>
                    <span>{{item.date}} / </span>
                    <span>{{item.press}}</span>
                </p>
                <p id="abstract" slot="content"> {{item.abs}} </p>
                <el-card class="book" body-style="padding: 10px" shadow="hover">
                    <div class="cover" @click="editBook(item)">
                        <img :src="item.cover" alt="This is the cover of book">
                    </div>
                    <div class="info">
                        <div class="title">
                            <a href="">{{item.title}}</a>
                        </div>
                    </div>
                    <i class="el-icon-delete" @click="deleteBook(item.id)"></i>
                    <div class="author">{{item.author}}</div>
                </el-card>
            </el-tooltip>
            <edit-form @onSubmit="loadBooks()" ref="edit"></edit-form>
        </el-row>
        <el-row>
            <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" :total="books.length"></el-pagination>
        </el-row>
    </div>
</template>

<script>
import EditForm from './EditForm'
import SearchBar from './SearchBar'
export default {
    name: 'Books',
    components: {
        EditForm,
        SearchBar
    },
    data () {
        return {
            books: [],
            currentPage: 1,
            pageSize: 17
        }
    },
    mounted () {
        this.loadBooks()
    },
    methods: {
        loadBooks () {
            var _this = this
            this.$axios
            .get('api/books')
            .then(resp => {
                if (resp && resp.status === 200) {
                    _this.books = resp.data
                    _this.currentPage = 1
                }
            })
        },
        handleCurrentChange (currentPage) {
            this.currentPage = currentPage
        },
        searchResult () {
            this.$axios
            .post('api/search', {
                keywords: this.$refs.searchBar.keywords
            })
            .then(resp => {
                if (resp && resp.status === 200) {
                    this.books = resp.data
                }
            })
        },
        deleteBook (id) {
            this.$confirm('This operation will delete this book forever, continue?', 'Tip', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            })
            .then(() => {
                this.$axios
                .post('api/delete', { id: id })
                .then(resp => {
                    if (resp && resp.status === 200) {
                        this.loadBooks()
                    }
                })
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Operation cancelled'
                })
            })
        },
        editBook (item) {
            this.$refs.edit.dialogFormVisible = true
            this.$refs.edit.form = {
                id: item.id,
                cover: item.cover,
                title: item.title,
                author: item.author,
                date: item.date,
                press: item.press,
                abs: item.abs,
                category: {
                    id: item.category.id.toString(),
                    name: item.category.name
                }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#Contents {
    height: 840px;
}

#title {
    font-size: 14px;
    margin-bottom: 6px;
}

#basis {
    font-size: 13px;
    margin-bottom: 6px;
}

#abstract {
    display: block;
    line-height: 17px;
    width: 300px;
    word-wrap: break-word;
}

.book {
    width: 135px;
    margin-bottom: 20px;
    height: 233px;
    float: left;
    margin-right: 15px
}

.cover {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
}

img {
    width: 115px;
    height: 172px;
}

.title {
    font-size: 14px;
    text-align: left;
}

.author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
}

.el-icon-delete {
    float: right;
    cursor: pointer;
}

.row {
    min-width: 400px;
}

a {
    text-decoration: none;
}

a:link, a:visited, a:focus {
    color: #3377aa;
}

</style>
