<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="7" class="bg-gray leftpanel">
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
        <el-button type="primary" class="mt20" @click="addCate" size="small">新增分类</el-button>
      </el-col>
      <el-col :span="17">
        <info v-if="currentNode.title" @to-cate="updataView" :destroy-view="destroyView" :current-node="currentNode">
        </info>
      </el-col>
    </el-row>
    <el-dialog title="新增分类" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
      <edit :root-node="rootNode" :current-node="currentNode" @on-cancel="onCancel" @on-submit="onSubmit"/>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api";
import { mapGetters } from "vuex";
import info from './components/cateinfo.vue'
import edit from './components/edit.vue'
export default {
  data() {
    return {
      filterText: "",
      form: {},
      dialogFormVisible:false,
      title: "",
      rootNode:[],
      currentPid:0,
      currentNode: {},
      data: [],
      destroyView:false,
      defaultProps: {
        children: "children",
        label: "title"
      }
    };
  },
  components:{
    info,edit
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
      api.goods.getGoodsCat(this.token)
      .then(res => {
        this.data = res.data;
        this.rootNode=  res.data.filter(f=>f.pid==0)
      });
    },
    updataView(){
      this.initData()
      this.destroyView=true
    },
    onSubmit(val){
      api.goods.addCate(val).then(res=>{
        if(res.data){
          this.$message.success('添加成功')
          this.initData()
          this.dialogFormVisible = false
        }else{
          this.$message.info('分类已经存在，请查证后再添加')
        }   
      })
    },
    onCancel(){
       this.dialogFormVisible = false
    },
    addCate(){
     this.dialogFormVisible = true
    }
  }
};
</script>

<style lang="scss">
.leftpanel{
  padding:10px 0
}
.text-center{
  text-align: center
}
.bg-gray{
  background-color: #f7f8f9
}
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