
import Home from './Home'
import systemLog from './sytemLog/sytemLog'
let router = [
/*   {
      path: '/',
      name: '日志分析系统',
      component: Home,
      redirect: '/systemLog',
	  iconCls: 'fa fa-id-card-o',
	  children: [
    		{ path: '/systemLog', component: systemLog, name: '日志管理' }
    	//	{ path: '/student', component: student, name: '分析管理' }
      ]
    },*/
   {
      path: '/',
      name: '日志分析系统',
      component: Home,
      redirect: '/systemLog',
	  iconCls: 'fa fa-id-card-o',
	  children: [
    		{ path: '/systemLog', component: systemLog, name: '日志管理' }
    	//	{ path: '/student', component: student, name: '分析管理' }
      ]
    }
];
export default router;
