<template>
    <body id="poster">
        <el-form class="login-container" label-position="left" label-width="0px">
            <h3 class="login_title">System Login</h3>
            <el-form-item>
                <el-input type="text" v-model="loginForm.username" placeholder="Account" :clearable="true"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="loginForm.password" placeholder="Password" :clearable="true"></el-input>
            </el-form-item>
            <el-form-item style="width: 100%">
                <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">Login</el-button>
            </el-form-item>
    </el-form>
    </body>
</template>

<script>
export default {
    name: 'Login',
    props: {
    },
    data: function () {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            responseResult: []
        }
    },
    methods: {
        login () {
            this.$axios
            .post('api/login', {
                username: this.loginForm.username,
                password: this.loginForm.password
            })
            .then(successfulResponse => {
                if (successfulResponse.data.code === 200) {
                    this.$store.commit('login', this.loginForm)
                    var path = this.$route.query.redirect
                    this.$router.replace({ path: path === '/' || path === undefined ? '/index' : path })
                    this.loginForm.username = ''
                    this.loginForm.password = ''
                }
            })
            .catch(failResponse => {
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: white;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}

#poster {
    background: url("../assets/eva.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;

}

body {
    margin: 0px;
}

</style>
