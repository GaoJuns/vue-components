import toast from '@/components/common/gl-toast.vue'
import messagebox from '@/components/common/gl-messagebox.vue'


let gl_plug = {};
gl_plug.install=function(Vue,options){
	
	// toast
	Vue.prototype.$gltoast = (params) => {
		if(document.getElementsByClassName('gl-toast').length){
			return;
		}
		let option = {
			title:params.title || '这是提示',
			position:params.position || 'top',
			duration:params.duration || 2500,
		}
		let toastOpt = Vue.extend(toast);
		let toastTpl = new toastOpt().$mount();
		toastTpl.visible = true;
		toastTpl.message = option.title;
		toastTpl.position = option.position;
		document.body.appendChild(toastTpl.$el);
		setTimeout(function () {
            toastTpl.visible = false
        }, option.duration)
	}

	// messagebox
	Vue.prototype.$glmessage = (params) =>{
		let option = {
			title:params.title || '提示',
			content:params.content || '这是内容',
			objButton:params.objButton || ['确定','取消'],
			callBack:params.callBack
		}
		let messageOpt = Vue.extend(messagebox);
		let messageTpl = new messageOpt().$mount();
		messageTpl.visible = true;
		messageTpl.title = option.title;
		messageTpl.content = option.content;
		messageTpl.objButton = option.objButton;
		messageTpl.callBack = option.callBack;
		document.body.appendChild(messageTpl.$el);

	}
}


export default gl_plug;
