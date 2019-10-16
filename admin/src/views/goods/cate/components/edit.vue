<template>
  <div>
    <!-- <el-input v-model="title" placeholder="请输入分类名称"></el-input> -->
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="大类选择" v-show="isRootNode">
        <el-select v-model="form.pid" clearable placeholder="不选默认为添加大类">
          <el-option v-for="item in rootNode" :key="item.id" :label="item.title" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称" prop="name" required>
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="启用状态">
        <el-switch v-model="form.status" 
        active-value='0'
        inactive-value='1'
        />
      </el-form-item>
      <el-form-item label="排序">
        <el-input type="number" v-model.number="form.sort" style="width:200px;"/>
      </el-form-item>
      <el-form-item label="关键字">
        <el-select
              v-model="form.keyWords"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="请选择文章标签">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.keyWords"
              :value="item.keyWords">
              </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import rules from '../validate.js'
export default {
  props:{
    rootNode:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
  data(){
      return {
        isRootNode:false,
        form:{
        },
        options:[
        ],
        rules:{}
      }
  },
  created() {
    this.isRootNode= this.rootNode.length>0
    this.rules={...rules}
    console.log(this.rules)
  },
  methods:{
      onCancel(){
          this.$emit('on-cancel')
      },
      onSubmit(){
        if(!this.form.pid){
          this.form.pid=0
        }
        this.$refs['form'].validate((valid) => {
          console.log(valid)
          if (valid) {
            this.$emit('on-submit',this.form)
          } else {
            return false;
          }
        });
      }
  }
}
</script>

<style>

</style>