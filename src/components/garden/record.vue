<template>
  <div>
    <h4 class="record_tit">提现记录</h4>
    <div class="record_tab">
      <el-table
        :data="this.list"
        border
        style="width: 100%;">
        <el-table-column
          prop="name"
          label="创建时间"
          align="center"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="class"
          label="金额（元）"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="收款账户"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column
          prop="sumPrice"
          label="操作人"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column
          prop="billType"
          label="状态"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column
          prop="beizhu"
          label="备注"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <span>导出Excel</span>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "record",
    data() {
      return {
        list: [],
        // tableData:[],
        tableData: [{
          name: '王小虎1',
          class: '小一班',
          phone: '17710320074',
          sumPrice: '1000',
          billType: '缴费成功'
        }, {
          name: '王小虎2',
          class: '小二班',
          phone: '17710320074',
          sumPrice: '800',
          billType: '缴费成功'
        }, {
          name: '王小虎3',
          class: '中三班',
          phone: '17710320074',
          sumPrice: '200',
          billType: '缴费成功',
        }, {
          name: '王小虎4',
          class: '大一班',
          phone: '17710320074',
          sumPrice: '500',
          billType: '缴费成功',
        }, {
          name: '王小虎5',
          class: '小一班',
          phone: '17710320074',
          sumPrice: '1000',
          billType: '缴费成功'
        }, {
          name: '王小虎6',
          class: '小二班',
          phone: '17710320074',
          sumPrice: '800',
          billType: '缴费成功'
        }, {
          name: '王小虎7',
          class: '中三班',
          phone: '17710320074',
          sumPrice: '200',
          billType: '缴费成功',
        }, {
          name: '王小虎8',
          class: '大一班',
          phone: '17710320074',
          sumPrice: '500',
          billType: '缴费成功',
        }, {
          name: '王小虎9',
          class: '小一班',
          phone: '17710320074',
          sumPrice: '1000',
          billType: '缴费成功'
        }, {
          name: '王小虎10',
          class: '小二班',
          phone: '17710320074',
          sumPrice: '800',
          billType: '缴费成功'
        }, {
          name: '王小虎11',
          class: '中三班',
          phone: '17710320074',
          sumPrice: '200',
          billType: '缴费成功',
        }, {
          name: '王小虎12',
          class: '大一班',
          phone: '17710320074',
          sumPrice: '500',
          billType: '缴费成功',
        }, {
          name: '王小虎13',
          class: '小一班',
          phone: '17710320074',
          sumPrice: '1000',
          billType: '缴费成功'
        }, {
          name: '王小虎14',
          class: '小二班',
          phone: '17710320074',
          sumPrice: '800',
          billType: '缴费成功'
        }, {
          name: '王小虎15',
          class: '中三班',
          phone: '17710320074',
          sumPrice: '200',
          billType: '缴费成功',
        }, {
          name: '王小虎16',
          class: '大一班',
          phone: '17710320074',
          sumPrice: '500',
          billType: '缴费成功',
        }, {
          name: '王小虎17',
          class: '小一班',
          phone: '17710320074',
          sumPrice: '1000',
          billType: '缴费成功'
        }, {
          name: '王小虎18',
          class: '小二班',
          phone: '17710320074',
          sumPrice: '800',
          billType: '缴费成功'
        }, {
          name: '王小虎19',
          class: '中三班',
          phone: '17710320074',
          sumPrice: '200',
          billType: '缴费成功',
        }, {
          name: '王小虎20',
          class: '大一班',
          phone: '17710320074',
          sumPrice: '500',
          billType: '缴费成功',
        }, {
          name: '王小虎21',
          class: '小一班',
          phone: '17710320074',
          sumPrice: '1000',
          billType: '缴费成功'
        }, {
          name: '王小虎22',
          class: '小二班',
          phone: '17710320074',
          sumPrice: '800',
          billType: '缴费成功'
        }, {
          name: '王小虎23',
          class: '中三班',
          phone: '17710320074',
          sumPrice: '200',
          billType: '缴费成功',
        }, {
          name: '王小虎24',
          class: '大一班',
          phone: '17710320074',
          sumPrice: '500',
          billType: '缴费成功',
        }],
        currentPage4: 1
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleCurrentChange(val) {
        this.showList(val, this.tableData)
      },
      showList(page, data) {
        this.list = data.slice(10 * (page - 1), 10 * (page - 1) + 10)
      },
    },
    mounted() {
      this.showList(1, this.tableData)
    }
    // computed:{
    //   this.showList(1, this.tableData)
    // }

  }
</script>

<style scoped>
  h4 {
    margin: 0;
    padding: 0
  }

  .record_tit {
    line-height: 40px;
    font-size: 20px;
  }

  .record_tab{
    margin-top:20px;
  }
  .page{
    margin-top: 20px;
    font-size: 14px;
  }
  .page span{
    float: left;
    width: 80px;
    height: 32px;
    background: blueviolet;
    color: #fff;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
    border-radius: 4px;
  }
  .page .el-pagination{
    float: right;

    margin-right: 20px;
  }


</style>
