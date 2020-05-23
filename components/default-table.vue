<template>
  <div>
    <el-table
      :data="tableOption.tableData"
      border
      tooltip-effect="dark"
      style="width: 100%">

      <template v-if="tableHeader && tableHeader.length > 0">
        <el-table-column
          v-if="isNativeComponents(tableHeader[0])"
          :type="tableHeader[0].type || ''"
          :width="tableHeader[0].width || ''">
        </el-table-column>
        <template v-for="(item, index) in tableContentHeader">
           <el-table-column
            :key="index"
            :label="item.label"
            align="center"
            :prop="item.param"
            :width="item.width ? item.width : ''">
            <template slot-scope="scope">
              <div v-if="item.type === 'button'">
                <el-button
                  v-for="(btnItem, btnIndex) in item.btnArr"
                  :key="btnIndex"
                  size="mini"
                  :type="btnItem.type"
                  :icon="btnItem.icon"
                  @click="btnEvent(scope.$index, scope.row, btnItem.eventName)"
                >{{ btnItem.text }}</el-button>
              </div>
              <div v-if="item.render">
                {{item.render(scope.row)}}
              </div>
              <div v-else-if="!item.type">{{ scope.row[item.param] }}</div>
            </template>
          </el-table-column>
        </template>
      </template>
    </el-table>
    <div v-if="totalOption.show" class="pagination">
      <el-pagination
        background
        layout="total, prev, pager, next, jumper"
        :total="totalOption.total"
        :page-size="totalOption.pageSize"
        :current-page.sync="totalOption.currentPage"
        @current-change="currentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "default-table",
  props: {
    tableOption: {
      type: Object,
      default() {
        return {
          tableData: [],
          tableHeader: [],
          totalOption: { show: true, total: 0, currentPage: 0, pageSize: 10 }
        };
      }
    }
  },
  computed: {
    tableHeader() {
      return this.tableOption.tableHeader;
    },
    totalOption() {
      return this.tableOption.totalOption;
    },
    tableContentHeader() {
      return this.tableHeader.filter(item => {
        return (
          item.type !== "selection" &&
          item.type !== "index" &&
          item.type !== "expand"
        );
      });
    },
    isNativeComponents() {
      return item => {
        return (
          item.type === "selection" ||
          item.type === "index" ||
          item.type === "expand"
        );
      };
    }
  },
  methods: {
    currentChange(val) {
      this.$emit(this.totalOption.eventName, val);
    },
    btnEvent(index, data, name) {
      this.$emit(name, { index, data });
    }
  }
}
</script>
<style scoped>
  .pagination{
    float: right;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
