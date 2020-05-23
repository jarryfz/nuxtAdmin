<template>
  <div>
    <default-table
      :table-option="tableOption"
      @edit="edit"
      @currentChange="currentChange">

    </default-table>
    <!-- {{list}} -->
  </div>
</template>
<script>
import defaultTable from '~/components/default-table.vue'
export default {
  watchQuery: ['pageNum'],
  components: {
    defaultTable
  },
  async asyncData (context) {
    console.log(context.query);

    const param = {
      pageNum: context.query.pageNum,
      pageSize: 5,
      name: '',
    }
    let { data } = await context.$axios.post('api/v1/news/query',param)
    return {
      list: data
    }

  },
  data() {
    return {
      tableOption: {
        tableData: [],
        tableHeader: [
          {type: 'index'},
          {label: '模块ID',param: 'id'},
          {label: '模块名称', param: 'name'},
          {label: '排序', param: 'sort'},
          {label: '类型', param: 'type', render: row => {
            if(row.type===0){
              return '未审核'
            }
            else if(row.tye === 1){
              return '通过'
            }
          }},
          {
            label: '操作',
            type: 'button',
            width: '280',
            btnArr: [
              {text: '查看',type: 'success', eventName: 'lookOver', icon: 'el-icon-discover'},
              {text: '编辑',type: 'primary', eventName: 'edit', icon: "el-icon-edit"},
              {text: '删除',type: 'danger', eventName: 'deleteBtn', icon: 'el-icon-delete'},
            ]
          }
        ],
        totalOption: {
          show: true,
          total: 0,
          currentPage: 1,
          pageSize: 5,
          eventName: 'currentChange'
        }
      }
    }
  },
  created() {},
  mounted() {
    this.tableOption.tableData = this.list.list;
    this.tableOption.totalOption.total = this.list.total;
  },
  methods: {
    edit() {
      console.log(this.list)
    },
    currentChange(val) {
      console.log(val)
      this.$router.push({
        path:'/news/modules',
        query:{
          pageNum:val
        }
      })
    }
  }
}
</script>
