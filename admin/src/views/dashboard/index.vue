<template>
  <div class="dashboard-container" style="min-width:550px;">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :md="12" :lg="6" class="mb20">
        <el-card class="item " shadow="hover">
          <div class="item-label">客流人数(人)</div>
          <div class="item-date">2019/12/20 - 2019/12/26</div>
          <div class="item-count"><strong>42,680</strong></div>
          <div class="item-ratio">
            <div style="display:inline-block">
              <el-tooltip effect="dark" content="Top Left 提示文字" placement="top-start">
              <div><span class="ratio-label">环比</span ><span class="ratio-label text-red">+8%</span></div>
          </el-tooltip>
              
            </div>
            <div style="display:inline-block">
              <span class="ratio-label">同比</span
            ><span class="ratio-label text-red">+2%</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6" class="mb20">
        <el-card class="item" shadow="hover">
          <div class="item-label">客流人数(人)</div>
          <div class="item-date">2019/12/20 - 2019/12/26</div>
          <div class="item-count"><strong>42,680</strong></div>
          <div class="item-ratio">
            <span class="ratio-label">环比</span
            ><span class="ratio-label text-red">+8%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6" class="mb20">
        <el-card class="item" shadow="hover">
          <div class="item-label">客流人数(人)</div>
          <div class="item-date">2019/12/20 - 2019/12/26</div>
          <div class="item-count"><strong>42,680</strong></div>
          <div class="item-ratio">
            <span class="ratio-label">环比</span
            ><span class="ratio-label text-red">+8%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6" class="mb20">
        <el-card class="item" shadow="hover">
          <div class="item-label">客流人数(人)</div>
          <div class="item-date">2019/12/20 - 2019/12/26</div>
          <div class="item-count"><strong>42,680</strong></div>
          <div class="item-ratio">
            <span class="ratio-label">环比</span
            ><span class="ratio-label text-red">+8%</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" class="mb20">
        <el-card class="item" shadow="hover">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
          </div>
          <div v-for="o in 4" :key="o" class="text list-item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" class="mb20">
        <el-card class="item" shadow="hover">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
          </div>
          <div v-for="o in 4" :key="o" class="text list-item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" class="mb20">
        <el-card class="item" shadow="hover">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
          </div>
          <div v-for="o in 4" :key="o" class="text list-item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
  render(){
    return (
      <div></div>
    )
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.list-item {
  margin-bottom: 18px;
}
.mb20 {
  margin-bottom: 20px;
}
.item {
  font-size: 14px;
  margin: -4px;
  &-label {
    padding: 4px 0 10px;
  }
  &-date {
    padding: 4px 0 10px;
    line-height: 18px;
    color: #999;
  }
  &-count {
    font-size: 28px;
    line-height: 42px;
    padding-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
  }
  &-ratio {
    line-height: 18px;
    padding: 4px 0 0px;
  }
}
.mt20 {
  margin-top: 20px;
}
.ratio {
  &-label {
    margin-right: 15px;
  }
}
.text-red {
  color: red;
}
</style>
