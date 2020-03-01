<template>
    <div style="margin-bottom: 30px;display: flex; justify-content: center; align-items: center; margin-left: 20%; margin-right: 15%">
        <el-input @keyup.enter.native="searchClick" placeholder="Search through title or author" prefix-icon="el-icon-search" size="small" v-model="keywords"></el-input>
        <el-button style="margin-left: 25px; margin-right: 100px;" size="small" type="primary" icon="el-icon-search" @click="searchClick">Search</el-button>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data () {
        return {
            keywords: '',
            books: [],
            cardLoading: []
        }
    },
    methods: {
        searchClick () {
            this.$emit('onsearch')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
