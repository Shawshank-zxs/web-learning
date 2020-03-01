<template>
    <div>
        <i class="el-icon-circle-plus-outline" @click="dialogFormVisible = true"></i>
        <el-dialog title="Add/Modify book" :visible.sync="dialogFormVisible" @close="clear">
            <el-form v-model="form" style="text-align: left" ref="dataForm">
                <el-form-item label="Title" :label-width="formLabelWidth" prop="title">
                    <el-input v-model="form.title" placeholder="Do not need guillemet"></el-input>
                </el-form-item>
                <el-form-item label="Author" :label-width="formLabelWidth" prop="author">
                    <el-input v-model="form.author"></el-input>
                </el-form-item>
                <el-form-item label="Date" :label-width="formLabelWidth" prop="date">
                    <el-input v-model="form.date"></el-input>
                </el-form-item>
                <el-form-item label="Press" :label-width="formLabelWidth" prop="press">
                    <el-input v-model="form.press"></el-input>
                </el-form-item>
                <el-form-item label="Cover" :label-width="formLabelWidth" prop="cover">
                    <el-input v-model="form.cover" placeholder="The URL of the picture"></el-input>
                    <img-upload @onUpload="uploadImg" ref="imgUpload"></img-upload>
                </el-form-item>
                <el-form-item label="Abstract" :label-width="formLabelWidth" prop="abs">
                    <el-input type="textarea" v-model="form.abs"></el-input>
                </el-form-item>
                <el-form-item label="Category" :label-width="formLabelWidth" prop="cid">
                    <el-select v-model="form.category.id" placeholder="Please choose category">
                        <el-option label="Literature" value="1"></el-option>
                        <el-option label="Popular"    value="2"></el-option>
                        <el-option label="Culture"    value="3"></el-option>
                        <el-option label="Life"       value="4"></el-option>
                        <el-option label="Business"   value="5"></el-option>
                        <el-option label="Technology" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="id" style="height: 0">
                    <el-input type="hidden" v-model="form.id" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="onSubmit">Confirm</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import ImgUpload from './ImgUpload'
export default {
    name: 'EditForm',
    components: {
        ImgUpload
    },
    data () {
        return {
            dialogFormVisible: false,
            form: {
                id: '',
                title: '',
                author: '',
                date: '',
                press: '',
                cover: '',
                abs: '',
                category: {
                    id: '',
                    name: ''
                }
            },
            formLabelWidth: '120px'
        }
    },
    methods: {
        clear () {
            this.form = {
                id: '',
                title: '',
                author: '',
                date: '',
                press: '',
                cover: '',
                abs: '',
                category: {
                    id: '',
                    name: ''
                }
            }
            this.$refs.imgUpload.clear()
        },
        onSubmit () {
            this.$axios
            .post('api/books', {
                id: this.form.id,
                title: this.form.title,
                author: this.form.author,
                date: this.form.date,
                press: this.form.press,
                cover: this.form.cover,
                abs: this.form.abs,
                category: this.form.category
            })
            .then(resp => {
                if (resp && resp.status === 200) {
                    this.dialogFormVisible = false
                    this.$emit('onSubmit')
                }
            })
        },
        uploadImg () {
            this.form.cover = this.$refs.imgUpload.url
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-icon-circle-plus-outline {
    margin: 50px 0 0 20px;
    font-size: 100px;
    float: left;
    cursor: pointer;
}

</style>
