<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="tree2"
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />
  </div>
</template>

<script>
export default {

  data() {
    return {
      filterText: '',
      data2: [{
        id: 1,
        label: '新鲜水果',
        children: [{
          id: 4,
          label: '时令水果',
          children: [{
            id: 9,
            label: '柚子'
          }, {
            id: 10,
            label: '冬枣'
          }]
        }]
      }, {
        id: 2,
        label: '蔬菜蛋品',
        children: [{
          id: 5,
          label: '叶类'
        }, {
          id: 6,
          label: '根茎类'
        }]
      },],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
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
    }
  }
}
</script>

