<template>
	<div class="gl-steps">
		<div class="gl-step" v-for="(item,index) in steps" :key="index">
			<p class="gl-step-num">
				<span class="gl-step-line">
					<span class="gl-step-number">{{item.num}}</span>
				</span>
			</p>
			<p class="gl-step-title">{{item.title}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:'glSteps',
		props:{
			active:{
				type:Number,
				default:0
			},
			steps:{
				type:Array,
				default: function () {
			        return {}
			      }
			}
		},
		data(){
			return {
				
			}
		},
		mounted(){

		},
		created(){
			
		},
		methods:{
			addList(val){
				let glStepLine = document.querySelectorAll('.gl-step-line');
				let glStepTitle = document.querySelectorAll('.gl-step-title');
				for(var i=0;i<val;i++){
					glStepLine[i].classList.add('active')
					glStepTitle[i].classList.add('activeColor')
				}
			}
		},
		computed:{
		
		},
		components:{

		},
		watch:{
			'active':{
				handler(val){
					this.$nextTick(()=>{
						this.addList(val)
					})
				},
				immediate:true,
			}
		}
	}
</script>

<style>
	.gl-steps{
		display: inline-block;
		overflow:hidden;
		background: #FFF;
	}
	.gl-step{
		float:left;
		width:128px;
		text-align:center;
	}
	.gl-step-num{

	}
	.gl-step-line{
		display: inline-block;
		width: 100%;
		height: 2px;
		background: #c0c4cc;
		position: relative;
	}
	.gl-step-number{
		display: inline-block;
		width: 16px;
		height: 16px;
		color: #FFF;
		text-align: center;
		font-size: 12px;
		line-height: 16px;
		border-radius: 50%;
		background: #c0c4cc;
		position: absolute;
		left: 50%;
	    top: -7px;
	    transform: translateX(-50%);
	}
	.gl-step-title{
		margin-top: 20px;
		font-size:12px ;
		color: #c0c4cc;
	}
	.gl-steps .active,
	.gl-steps .active .gl-step-number{
		background: #42a4ff;
	}
	.gl-steps .activeColor{
		color: #42a4ff;
	}
</style>