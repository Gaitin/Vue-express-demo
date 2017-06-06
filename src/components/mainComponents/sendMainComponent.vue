<template>
  <div class="sendMain">
    <div class="sendForm">
      <mu-paper>
        <mu-sub-header>寄件人信息</mu-sub-header>
        <div class="formLine">
          <span class="FormTitle">姓名</span>
          <mu-text-field hintText="请输入姓名" class="demo-divider-form" :underlineShow="false"/>
        </div>
        <mu-divider/>
        <div class="formLine">
          <span class="FormTitle">手机号码</span>
          <mu-text-field hintText="请手机号码" type="number" class="demo-divider-form" :underlineShow="false"/>
        </div>
        <mu-divider/>
        <div class="formLine">
          <span class="FormTitle" >选择地区</span>
          <selectAddressInput></selectAddressInput>
          <!--<mu-text-field hintText="选择地区" class="demo-divider-form" :underlineShow="false" @focus="openAddressBottomSheet" :value="address"/>-->
        </div>
        <mu-divider/>
        <div class="formLine">
          <span class="FormTitle">详细地址</span>
          <mu-text-field hintText="详细地址" multiLine :rows="3" :rowsMax="5" class="demo-divider-form"
                         :underlineShow="false"/>
        </div>
      </mu-paper>
    </div>
    <div class="receiverForm">
      <mu-paper>
        <mu-sub-header>收件人信息</mu-sub-header>
        <div class="formLine">
          <span class="FormTitle">姓名</span>
          <mu-text-field hintText="请输入姓名" class="demo-divider-form" :underlineShow="false"/>
        </div>
        <mu-divider/>
        <div class="formLine">
          <span class="FormTitle">手机号码</span>
          <mu-text-field hintText="请手机号码" type="number" class="demo-divider-form" :underlineShow="false"/>
        </div>
        <mu-divider/>
        <div class="formLine">
          <span class="FormTitle" >选择地区</span>
          <selectAddressInput></selectAddressInput>

          <!--<mu-text-field hintText="选择地区" class="demo-divider-form" :underlineShow="false"-->
                         <!--@focus="openAddressBottomSheet" :value="address"/>-->
        </div>
        <mu-divider/>
        <div class="formLine">
          <span class="FormTitle">详细地址</span>
          <mu-text-field hintText="详细地址" multiLine :rows="3" :rowsMax="5" class="demo-divider-form"
                         :underlineShow="false"/>
        </div>
      </mu-paper>
    </div>
    <div class="selectExpress">
      <mu-list>
        <mu-list-item :title="expressName" @click="openBottomSheet">
          <mu-avatar :src="expressImg" slot="leftAvatar"/>
          <mu-icon value="keyboard_arrow_right" slot="right"/>
        </mu-list-item>
      </mu-list>
      <mu-divider/>
    </div>
    <div class="sendType">
      <mu-paper>
        <div class="formLine">
          <span class="FormTitle">寄件类型</span>
          <!--<mu-text-field hintText="请输入姓名" class="demo-divider-form" :underlineShow="false"/>-->
          <mu-select-field v-model="listDefault" :labelFocusClass="['label-foucs']" class="demo-divider-form" :underlineShow="true">
            <mu-menu-item v-for="text,index in listType" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </div>

      </mu-paper>
    </div>
    <div class="PayType">
      <mu-paper>
        <div class="formLine">
          <span class="FormTitle">付款方式</span>
          <!--<mu-text-field hintText="请输入姓名" class="demo-divider-form" :underlineShow="false"/>-->
          <mu-select-field v-model="PayDefault" :labelFocusClass="['label-foucs']" class="demo-divider-form" :underlineShow="true">
            <mu-menu-item v-for="text,index in PayType" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </div>
        <div class="formLine">
          <span class="FormTitle">保价金额</span>
          <mu-text-field hintText="请输入保价金额" type="number" class="demo-divider-form" :underlineShow="false"/>
        </div>
      </mu-paper>
    </div>
    <div class="Thing">
      <mu-paper>
        <div class="formLine">
          <span class="FormTitle">物品名称</span>
          <mu-text-field hintText="请输入物品名称"  class="demo-divider-form" :underlineShow="false"/>
        </div>
        <div class="formLine">
          <span class="FormTitle">取件地址</span>
          <mu-text-field hintText="请输入取件地址"  class="demo-divider-form" :underlineShow="false"/>
        </div>
      </mu-paper>
    </div>
    <div class="btnBox">
      <mu-raised-button label="立即下单" fullWidth backgroundColor="#3481ED" class="demo-raised-button" />
    </div>
    <div class="expressSelect">
      <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
        <div class="demo-picker-container">
          <div class="BSHeader">
            <a href="javascript:;" @click="closeBottomSheet">取消</a>
            <a href="javascript:;" @click="closeBottomSheet">确定</a>
          </div>
          <mu-picker :slots="expressSlots" :visible-item-count="5" @change="expressChange" :values="express"/>
        </div>
      </mu-bottom-sheet>
    </div>
  </div>
</template>

<script>

  const express = {
    '请选择快递': 'http://app.toon.mobi/images/3003/button_ip.png',
    "顺丰标准": "http://cdn.kuaidi100.com/images/all/36/shunfeng.png",
    "顺丰特惠": "http://cdn.kuaidi100.com/images/all/36/shunfeng.png",
    "京东": "https://cdn.kuaidi100.com/images/all/36/jd.png",
    "德邦物流": "https://cdn.kuaidi100.com/images/all/36/debangwuliu.png",
    "韵达": "https://cdn.kuaidi100.com/images/all/36/yunda.png",
    "申通": "https://cdn.kuaidi100.com/images/all/36/shentong.png",
    "圆通": "https://cdn.kuaidi100.com/images/all/36/yuantong.png",
    "汇通": "https://cdn.kuaidi100.com/images/all/36/huitongkuaidi.png",
    "中通": "https://cdn.kuaidi100.com/images/all/36/zhongtong.png",
    "优速": "https://cdn.kuaidi100.com/images/all/36/youshuwuliu.png"
  };
  import SelectAddressInput from '../commonComponents/SelectAddressInput.vue'
  export default {
    components: {
      'selectAddressInput': SelectAddressInput
    },
    data () {
      return {
        listDefault: 0,
        listType: ['个人件','公司件'],
        PayDefault: 0,
        PayType: ['寄付','到付'],
        bottomSheet: false,
        expressSlots: [
          {
            width: '100%',
            textAlign: 'left',
            values: Object.keys(express)
          }
        ],
        express: ['请选择快递', 'http://app.toon.mobi/images/3003/button_ip.png'],
        expressName: '请选择快递',
        expressImg: 'http://app.toon.mobi/images/3003/button_ip.png',
      }
    },
    methods: {
      closeBottomSheet () {
        this.bottomSheet = false
      },
      openBottomSheet () {
        this.bottomSheet = true
      },
      closeAddressBottomSheet () {
        this.AddressBottomSheet = false
      },
      openAddressBottomSheet () {
        this.AddressBottomSheet = true
      },
      expressChange (value, index) {
        switch (index) {
          case 0:
            this.expressName = value;
            this.expressImg = express[value];
            break
        }
        this.express = [this.expressName, this.expressImg]
      },
      addressChange (value, index) {
        switch (index) {
          case 0:
            this.addressProvince = value
            const arr = address[value]
            this.addressSlots[1].values = arr
            this.addressCity = arr[0]
            break
          case 1:
            this.addressCity = value
            break
        }
        this.address = [this.addressProvince, this.addressCity]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .sendType,.PayType,.Thing,.btnBox{
    margin: 5px 0;
  }
  .BSHeader {
    display: flex;
    justify-content: space-between;
    background-color: #eee;
    a {
      padding: 10px;
      color: #3481ED;
    }
  }

  .selectExpress {
    background-color: #fff;
    margin: 5px 0;
  }

  .sendForm {
    margin: 5px 0;
    background-color: #fff;

  }

  .demo-divider-form {
    margin-bottom: 0;
    margin-left: 20px;
  }

  .formLine {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .FormTitle {
    height: 27px;
    width: 60px;
  }
  .btnBox{
    background-color: #fff;
    padding: 5px;
  }
</style>
