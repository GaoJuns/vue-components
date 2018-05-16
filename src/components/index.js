import Plugins from '@/utils/glPlugin'

import GlMessageBox from './common/gl-messagebox.vue'
import GlSteps from './common/gl-step.vue'


const components = [
	GlMessageBox,
	GlSteps
]

const install = function(Vue) {
	if(install.installed) return;
	// Vue.use(Directive);//注册指令
	Vue.use(Plugins);//引用插件
	components.map(component => {
		Vue.component(component.name, component);//安装组件
	});
};


export default {
	install
}