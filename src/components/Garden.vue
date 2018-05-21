<template>
  <div>
    <div class="list record">
      <v-custom :tit_span="'提现记录'" @custom-event="record"></v-custom>
      <h2>
        <i class="el-icon-edit"></i>
        988.65
      </h2>
      <p>可提现金额：<span>666.53</span></p>
    </div>
    <div class="list remind">
      <v-custom :tit="'代缴提醒'" :tit_span="'查看'" @custom-event="remind"></v-custom>
      <div class="remind_text">
        <p>未收齐（人）</p>
        <p>30</p>
      </div>
      <div class="remind_text">
        <p>未收齐（元）</p>
        <p>8900</p>
      </div>
      <span class="remind_span">一键催费提醒</span>
    </div>
    <div class="list collec">
      <v-custom :tit="'今日收款'" :tit_span="'查看'" @custom-event="collec"></v-custom>
      <h2>
        <i class="el-icon-edit"></i>
        988.65
      </h2>
      <div>
        <p class="left">线上缴费：<span>666.53</span></p>
        <p class="right">线下缴费：<span>800.00</span></p>
      </div>
    </div>
    <div class="list qrcode">
      
      <ol>
        <li class="qr_one">园缴费码</li>
        <li class="qr_down" @click ="down" ref="downLoad" id="downLoad">下载</li>
        <li class="qr_print" @click="doPrint">打印</li>
      </ol>
      <!--startprint-->
      <div class="qrcode_text" id="qrcode_text">
        <h3>园所收费二维码</h3>
        <p>使用支付宝钱包扫一扫下面二维码</p>
        <p>输入手机号学生姓名查询账单缴费</p>
        <vue-qr text="y2.bbtree.com" class="ddd"></vue-qr>
        <span>(智慧树新考勤学校)</span>
        <div class="hide" id="hide">
          隐藏
        </div>
      </div>
      <!--endprint-->
    </div>
  </div>
</template>

<script>
  import vCustom from './garden/custom'
  import VueQr from 'vue-qr'
  import jquery from './common/js/jquery'
  import html2canvas from 'html2canvas'
  import erweima from './common/js/erweima'
  export default {
      components:{
          vCustom,
          VueQr
      },
      methods:{
        record(){
          console.log("点击的是缴费记录")
          this.$router.push({name:"record"})
        },
        remind(){
          console.log("点击的是代缴提醒")
          this.$router.push({name:"remind"})
        },
        collec(){
          console.log("点击的是今日收款")
          this.$router.push({name:"collec"})
        },
        down(){
          //document.getElementById("hide").style.display = 'block';
          html2canvas(document.querySelector('#qrcode_text'),
           document.getElementById("hide").style.display = 'block').then(canvas => {
             let imgUri = canvas.toDataURL("image/png");
             let imgData = imgUri;
             this.downloadFile('测试.png', imgData);
             document.getElementById("hide").style.display = 'none';
            //window.location.href= imgUri // 下载图片
          });
         
        },
        downloadFile(fileName, content) {
          let aLink = document.createElement('a');
          let blob = this.base64ToBlob(content); //new Blob([content]);

          //let evt = document.createEvent("HTMLEvents");
          //evt.initEvent("click", true, true);//initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
          aLink.download = fileName;
          aLink.href = URL.createObjectURL(blob);

          // aLink.dispatchEvent(evt);
          aLink.click();
        },
        //base64转blob
        base64ToBlob(code) {
          let parts = code.split(';base64,');
          let contentType = parts[0].split(':')[1];
          let raw = window.atob(parts[1]);
          let rawLength = raw.length;

          let uInt8Array = new Uint8Array(rawLength);

          for (let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
          }
          return new Blob([uInt8Array], {type: contentType});
        }, 
        doPrint () {
          var newstr = document.getElementsByClassName('qrcode_text')[0].innerHTML
          document.body.innerHTML = newstr;
          window.print();
          // 重新加载页面，以刷新数据
          window.location.reload()
        },
      },
      data(){
        return {
          pageSize: 20,
          currentPage: 1,
          total: 0,
          dataList: [],
          loading: true,
        }
      }
  }
</script>

<style>
  ol,li{
    list-style: none;
    margin:0;padding: 0;
  }
  .list{
    width: 36%;
    height: 280px;
    padding:20px;
    background:#f5f5f5;
    float:left;
    margin:2% 5%;
    overflow: hidden;
  }
.record h2,.collec h2{
  font-size: 30px;
  color: rgba(255, 153, 0, 1);
}
  .record h2 i,.collec h2 i{
    padding:0px  40px;
    padding-left:80px;
  }
  .record p{
    text-align: center;
  }
  .collec div p.left{
    float: left;
  }
  .collec div p.right{
     float: right;
   }
  .remind div.remind_text{
    float: left;
    width: 50%;
    text-align: center;
  }
  .remind_span{
    display: inline-block;
    width: 150px;
    background: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 8px;
    font-size: 14px;
    color: #333;
    border:1px solid #ccc;
    height: 30px;
    cursor: pointer;
    margin-left:34%;
    margin-top: 20px;
  }
  .qrcode ol{
    float: left;
    width: 130px;
    margin-left: 20px;
  }
  .qrcode_text{
    float: left;
    text-align: center;
    color: #333;
  }
  .qr_one{
    line-height: 30px;
  }
  .qr_down{
    margin-top: 50px;
    width: 60px;
    height: 30px;
    border:1px solid #ccc;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
  }
  .qr_print{
    margin-top: 20px;
    width: 60px;
    height: 30px;
    border:1px solid #ccc;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
  }
  .qrcode_text h3{
    /* font-size: 20px; */
    line-height: 30px;
    border-bottom: 1px solid #ccc;
  }
  .qrcode_text p{
    font-size: 12px;
    line-height: 20px;
  }
  .qrcode_text h3,.qrcode_text p{
    margin:0;padding:0;
  }
  .qrcode_text span{
    font-size: 12px;
  }
  .ddd{
    width: 200px;
    height: 200px;
  }
  .hide{
    display: none;
    margin-top: 30px;
  }
  @media print {
    body{
      text-align: center;
    }
    .ddd{
      margin:0 auto;
    }
    .hide{
      display: block;
    }
  }
  
</style>


