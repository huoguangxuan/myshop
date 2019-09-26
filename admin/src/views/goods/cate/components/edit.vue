<template>
  <div>
    <!-- <el-input v-model="title" placeholder="请输入分类名称"></el-input> -->
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="大类选择">
        <el-select v-model="form.pid" clearable placeholder="不选默认为添加大类">
          <el-option v-for="item in rootNode" :key="item.id" :label="item.title" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称">
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
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
        form:{
        },
        options:[
        ]
      }
  },
  methods:{
      onCancel(){
          this.$emit('on-cancel')
      },
      onSubmit(){
        if(!this.form.pid){
          this.form.pid=0
        }
        console.log(this.form)
        this.$emit('on-submit',this.form)
      }
  }
}
</script>

<style>

</style>