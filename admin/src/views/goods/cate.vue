<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="7">
        <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />
        <el-tree
          ref="tree2"
          :data="treeData"
          :props="defaultProps"
          :filter-node-method="filterNode"
          class="filter-tree"
          default-expand-all
          check-on-click-node
          @node-click="checkedMethod"
        />
      </el-col>
      <el-col :span="17">
        <div v-if="currentNode.title">
          <span class="title">{{currentNode.title}}</span>
          <p>添加时间：{{currentNode.add_time}}</p>
          <p>状态：{{currentNode.status}}</p>
          <p>排序：{{currentNode.sort}}</p>
          <p>状态：{{currentNode.link}}</p>
          <p>副标题：{{currentNode.sub_title}}</p>
          <p>关键字：{{currentNode.keywords}}</p>
          <div class="mt10 text-center">
            <el-button type="primary" size="small">修改</el-button>
            <el-button size="small">保存</el-button>
          </div>
        </div>

        <div v-else>
          <span class="title">新增一级分类</span>
          <!-- <el-input v-model="title" placeholder="请输入分类名称"></el-input> -->
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="分类名称">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="一级分类">
              <el-select v-model="form.region" placeholder="please select your zone">
                <el-option label="新鲜水果" value="shanghai" />
                <el-option label="蔬菜市场" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="启用状态">
              <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="关键字">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="Online activities" name="type" />
                <el-checkbox label="Promotion activities" name="type" />
                <el-checkbox label="Offline activities" name="type" />
                <el-checkbox label="Simple brand exposure" name="type" />
              </el-checkbox-group>
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      filterText: "",
      form: {},
      title: "",
      currentNode: {},
      data: [],
      defaultProps: {
        children: "children",
        label: "title"
      }
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },
  computed: {
    ...mapGetters(["token"]),
    treeData() {
      let cloneData = JSON.parse(JSON.stringify(this.data));
      return cloneData.filter(f => {
        let branchArr = cloneData.filter(c => f.id == c.pid);
        branchArr.length > 0 ? (f.children = branchArr) : ""; //如果存在子级，则给父级添加一个children属性，并赋值
        return f.pid == 0; //返回第一层
      });
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    checkedMethod() {
      this.currentNode = this.$refs.tree2.getCurrentNode();
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.title.indexOf(value) !== -1;
    },
    initData() {
      api.getGoodsCat(this.token).then(res => {
        this.data = res.data;
      });
    }
  }
};
</script>

<style lang="scss">
.mt10 {
  margin-top: 10px;
}
.mt20 {
  margin-top: 20px;
}
.hidden {
  display: none;
}
.title {
  line-height: 40px;
  font-weight: 600;
}
</style>