<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item required label="商品名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item required label="商品售价">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item required label="商品分类">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
     
      <el-form-item label="状态">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="规格">
        <el-radio-group v-model="form.resource">
          <el-radio label="斤" />
          <el-radio label="个" />
          <el-radio label="件" />
          <el-radio label="袋" />
          <el-radio label="包" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

