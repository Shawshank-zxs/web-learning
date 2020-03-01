<template>
   <el-upload
    class="img-upload"
    ref="upload"
    action="http://wj.front.com/api/covers"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-success="handleSuccess"
    :on-exceed="handleExceed"
    :multiple="true"
    :limit="1"
    :file-list="fileList">
        <el-button size="small" type="primary">Upload</el-button>
        <div slot="tip" class="el-upload_tip">Only supports uploading <b>jpg / png</b> files, and no more than 500kb</div>
    </el-upload>
</template>

<script>
export default {
    name: 'ImgUpload',
    data () {
        return {
            fileList: [],
            url: ''
        }
    },
    methods: {
        handleRemove (file, fileList) {
        },
        handlePreview (file) {
        },
        handleExceed (files, fileList) {
            this.$message.warning(`Currently restricted to select 1 file, this time ${files.length} files are selected, a total of ${files.length + fileList.length} files are selected.`)
        },
        beforeRemove (file, fileList) {
            this.$confirm(`Are you sure you want to remove ${file.name}?`)
        },
        handleSuccess (response) {
            this.url = response
            this.$emit('onUpload')
            this.$message.warning('Upload Successfully!')
        },
        clear () {
            this.$refs.upload.clearFiles()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
