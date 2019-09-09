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
            <el-button type="primary" size="small">修改</el-button>
            <el-button size="small">删除</el-button>
            </div>
  </div>
</template>

<script>
export default {
    props:{
        currentNode:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    }
}
</script>

<style>

</style>