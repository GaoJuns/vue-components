<template>
  <div id="Plugins">
    <!-- 显示提示框 -->
    <div><button @click="showToast()">显示提示框</button></div>

	<br>

    <!-- 显示对话框(两种方式) -->
    <!-- 方式一 -->
    <div><button @click="showMessagebox()">显示对话框</button></div>
    <!-- 方式2 -->
    <gl-Messagebox v-model="isShowMessageBox1" title="支付信息提示" :changeWidth="447">
      <div class="messageBox-content" slot="content">
        <p class="messageBox-name">
          <span></span>
          <span>微信支付</span>
        </p>
        <p>请您在打开的微信支付页面上完成支付</p>
        <p>支付完成前请不要关闭此窗口</p>
        <p>完成支付后请点击下面的按钮</p>
      </div>
      <div class="messageBox-footer" slot="footer">
        <span class="finish-pay button0" @click="isShowMessageBox1 = false">已完成支付</span>
      </div>
    </gl-Messagebox>



    <!-- 步骤条 -->
    <gl-steps :active='step' :steps='stepArr'></gl-steps>
    <button @click="addStep()">下一步</button>
  </div>
</template>
<script>
export default {
  name: 'Plugins',
  data() {
    return {
      isShowMessageBox1: false,

      step:1,
      stepArr:[
      	{num:1,title:'步骤一'},
      	{num:2,title:'步骤二'},
      	{num:3,title:'步骤三'},
      ]
    }
  },
  mounted() {

  },
  created() {

  },
  methods: {
    // 显示提示框
    showToast() {
      this.$gltoast({
        position: 'bottom',
      })
    },



    // 显示对话框
    showMessagebox() {
      // this.isShowMessageBox1 = true;
      this.$glmessage({
        content: '确定删除该信息？',
        callBack: function() {
          alert('执行了回调')
        }
      })
    },


    addStep(){
    	this.step++;
    	if(this.step > this.stepArr.length){
    		this.step = 1
    	}
    }
  },
  components: {
    
  },
  watch: {

  }
}

</script>
<style scoped>


</style>
