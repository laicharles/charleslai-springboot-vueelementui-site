export default{
	init:function(){
		let filter = {
      firstSvrTime: '2018-08-05 17:31:18.0',
      endSvrTime: '2018-08-05 17:31:18.0',
      logLevel:'DEBUG',
      svrType:'',
      svrIP:''
		};
		return{
      systemLogData:[
               {
                 firstSvrTime: '',
                 endSvrTime: '',
                 logLevel:'',
                 svrType:'DEBUG',
                 svrIP:'',
               }
			],
      filter: filter,													//查询条件
			activeCollapse: 'search',								//开关查询折叠面板
			pagination: {
        totalNum: 0,
        currentPage: 1,
				pageSize: 10
			},
			editVisible: false
		}
	}
}
