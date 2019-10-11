<template>
  <div>
     <span class="title">{{currentNode.title}}</span>
          <p>添加时间：{{currentNode.add_time}}</p>
          <p>状态：{{currentNode.status}}</p>
          <p>排序：{{currentNode.sort}}</p>
          <p>状态：{{currentNode.link}}</p>
          <p>副标题：{{currentNode.sub_title}}</p>
          <p>关键字：{{currentNode.keywords}}</p>
          <div class="mt10 text-center">
            <el-button type="primary"  @click="modify" size="small">修改</el-button>
            <el-button size="small"  @click="destroy(currentNode.id)">删除</el-button>
            </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
    props:{
        currentNode:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    },
    methods:{
        modify(){},
        destroy(cate_id){
            api.goods.destroyCate(cate_id)
            .then(res=>{
                this.$message.success('删除成功')
            })
        }
    }
}
</script>

<style>

</style>