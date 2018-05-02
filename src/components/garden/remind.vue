<template>
  <div>
    <div class="collec_top">园所缴费 > 缴费记录查询
    </div>
    <div class="collec_head">
      <label>
        <span class="">学生姓名：</span>
        <el-input v-model="queryData.childName" class="child_name"></el-input>
      </label>
      <label><span class="">班级：</span>
        <el-select v-model="queryData.className" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </label>
      <label>
        <span class="">家长手机号：</span>
        <el-input v-model="queryData.parentPhone" class="child_phone"></el-input>
      </label>
      <label>
        <span class="">账单状态：</span>代缴费
      </label>
      <label>
        <el-select v-model="queryData.billType">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </label>
      <label>
        <span>日期：</span>
        <el-date-picker
          v-model="queryData.openServiceTime"
          type="daterange"
          size="small"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
          @focus="whenFocus"
        >
        </el-date-picker>
      </label>
      <label>
        <span>收费方式</span>
        <el-select v-model="queryData.payType">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </label>
      <label>
        <span class='search' @click="search">查询</span>
      </label>
    </div>
    <div class="sum">
      合计：<span>80</span>笔&nbsp;&nbsp;&nbsp;&nbsp;<span>100000.235</span>元
    </div>
    <div class="collec_table">
      <el-table
        :data="this.list"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="学生姓名"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column
          prop="class"
          label="班级"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="家长手机号"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column
          prop="sumPrice"
          label="收费总额（元）"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column
          prop="billType"
          label="账单状态"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">查看
            </el-button>
            <el-button
              size="mini"
              @click="handleDelete(scope.$index, scope.row)">催费
            </el-button>
            <el-button size="mini" disabled>今日已催费</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
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
    name: "remind",
    data() {
      return {
        queryData: {
          childName: '',
          className: '',
          parentPhone: '',
          billType: '账单创建日期',
          openServiceTime: null,
          payType: '支付宝缴费'
        },
        input: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value1: '账单付款日期',
        value2: '支付宝缴费',
        phone: '',
        list: [],
        // tableData:[],
        options1: [
          {
            value: 1,
            label: '账单付款日期'
          }, {
            value: 0,
            label: '账单创建日期'
          }],
        options2: [{
          value: 0,
          label: '支付宝缴费'
        }, {
          value: 1,
          label: '现金'
        }, {
          value: 2,
          label: 'POS机'
        }, {
          value: 3,
          label: '银行汇款'
        }, {
          value: 4,
          label: '微信转账'
        }, {
          value: 5,
          label: '支付宝转账'
        }, {
          value: 6,
          label: '其他'
        }],
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
      search() {
        if (this.queryData.billType === "账单创建日期") {
          this.queryData.billType = 0
        }
        if (this.queryData.payType === "支付宝缴费") {
          this.queryData.payType = 0
        }
        let data = {
          childName: this.queryData.childName,
          className: this.queryData.className,
          parentPhone: this.queryData.parentPhone,
          billType: this.queryData.billType,
          openServiceTimeL: this.queryData.openServiceTime !== null ? this.queryData.openServiceTime[0] : '',
          openServiceTimeR: this.queryData.openServiceTime !== null ? this.queryData.openServiceTime[1] : '',
          payType: this.queryData.payType
        }
        console.log(data)
        this.list = this.tableData
      },
      whenFocus() {
        if (this.queryData.openServiceTime === null || this.queryData.openServiceTime.length !== 2) {
          this.queryData.openServiceTime = []
        }
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
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

<style>
  .collec_top {
    font-size: 16px;
    color: #333;
    line-height: 50px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }

  .collec_head {
    font-size: 14px;
    color: #333;
    background: #fff;
    line-height: 30px;
    overflow: hidden;
  }

  .collec_head label {
    float: left;
    margin-left: 20px;
    margin-top: 10px;
  }

  .collec_head label input {
    height: 32px;
    width: 150px;
  }

  .child_name, .child_phone {
    width: auto;
  }

  .search {
    /*float: right;*/
    display: inline-block;
    width: 70px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    background: #32c296;
    border-radius: 4px;
    cursor: pointer;
  }

  .search:hover {
    background: #27b68a;
    color: #fff;
  }

  .sum {
    line-height: 40px;
    font-size: 14px;
    background: #f5f5f5;
    margin: 20px 0;
  }

  .page {
    float: right;
    margin-top: 20px;
    margin-right: 20px;
  }

  .el-select .el-input.is-focus .el-input__inner {
    font-size: 14px;
    border-color: #32c296;
  }

  .el-select .el-input__inner:focus {
    border-color: #32c296;
  }

  .el-select-dropdown__item.selected {
    background-color: #32c296;
    color: #fff;
    font-weight: 100;
  }

  .el-pager li.active {
    color: #32c296;
    cursor: default;
  }

  .el-pager li:hover {
    color: #32c296;
  }
</style>
