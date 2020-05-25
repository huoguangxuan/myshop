<template>
  <div class="app-container">
    <el-form ref="form" :rules="rules" :model="form" label-width="120px">
      <el-form-item required prop="name" label="用户名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.tel" />
      </el-form-item>
      <el-form-item  label="地址">
        <el-input v-model="form.address" />
      </el-form-item>
      <el-form-item required prop="level" label="供货质量等级">
        <el-select v-model="form.level" placeholder="请选择">
          <el-option label="高" value="0" />
          <el-option label="中" value="1" />
          <el-option label="普通" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="备注">
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
import rules from '../validate.js'
import api from '@/api'
export default {
  data() {
    return {
      form: {
        name:'',
        address:'',
        tel:'',
        level:'',
        desc: '',
        rules:{}
      }
    }
  },
  created(){
    this.rules={...rules}
  },
  methods: {
    onSubmit() {
    this.$refs['form'].validate((valid) => {
        if (valid) {
            console.log('验证通过')
            api.addUser(this.form).then((res)=>{
                console.log('提交了')
            }).catch(e=> console.log(e))
        } else {
        return false;
        }
    });
      this.$message('submit!');
      console.log(this.form)
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

