<template>
  <div class="app-container">
    <el-button @click="addGoods"> 新增</el-button> 
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {

  data() {
    return {
      filterText: '',
      tableData: [{
        date: '2019-11-05',
        name: '将将',
        address:'三里屯'
        }]
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    addGoods(){
      this.$router.push({name:'add'})
    }
  }
}
</script>

