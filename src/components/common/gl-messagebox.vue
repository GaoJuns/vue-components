<template>
	<transition name="gl-fade-in">
		<div class="gl-messageBoxModel" v-if="visible">
			<div class="gl-messageBox" :style="{'width':changeWidth == 0 ? '':changeWidth+'px'}">
				<header class="gl-messageBox-title" v-if="hasHeader">
					<span>{{title}}</span>
					<span @click="visible = false">X</span>
				</header>
				<section class="gl-messagebox-content">
					<slot name="content"></slot>
					<div class="message-content" v-if="content != ''">{{content}}</div>
				</section>
				<footer class="gl-messagebox-footer" v-if="$slots.footer">
					<slot name="footer"></slot>
				</footer>
				<footer class="gl-messagebox-footer" v-else>
					<span v-for="(item,index) in objButton" :class="'button'+ index" @click="objCallback(index)">
						{{item}}
					</span>
				</footer>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name:'glMessagebox',
		data(){
			return {
				visible:false,   
			} 
		},
		props:{
			value:{	//是否隐藏窗口的值
				type:Boolean,
				default:false
			},
			title:{	// 标题
				type:String,
				default:'提示'
			},
			changeWidth: {
				type: Number,
				default: 0
			},
			hasHeader:{
				type:Boolean,
				default:true
			},
			content:{
				type:String,
				default:''
			},
			objButton:{
				type:Object,
				default:function(){
					return {}
				}
			},
			callBack:{
				type:Function,
				default:function(){

				}
			}
		},
		mounted(){
			
		},
		created(){
			
		},
		methods:{
			objCallback(i){
				if(i == 0){
					this.callBack();
				}
				this.visible = false;
			}
		},
		components:{

		},
		watch:{
			value(val){
				this.visible = val;
			},
			visible(val) {
				this.$emit('input', val);
			}
		}
	}
</script>

<style scoped>
	.gl-fade-in-enter-active,
	.gl-fade-in-leave-active{
		transition: 0.3s ease-out;
	}
	.gl-fade-in-enter{
		opacity: 0;
    	transform: translateY(-2%);
	}
	.gl-fade-in-leave-to{
		opacity: 0;
    	transform: translateY(-2%);
	}
</style>