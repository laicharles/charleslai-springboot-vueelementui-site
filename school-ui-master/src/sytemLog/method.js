import {getSystemLogList} from '../api/systemLog'

export default{
       //条件搜索
		handleSearch() {
			this.pagination.currentPage = 1;
			this.getTableData()
		},
		//重置搜索条件
		resetForm(formName) {
	        this.$refs[formName].resetFields();
	    },
	     //设置分页大小
		handlePageSizeChange(pageSize) {
			this.pagination.pageSize = pageSize;
			this.getTableData();
		},
		//设置页码
		handleCurrentChange (currentPage) {
			this.pagination.currentPage = currentPage;
			this.getTableData();
		},
		delStu(scope){                            //---------------------删除
	        this.$confirm('此操作将删除选中项, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		     }).then(() => {
		     	 this.removeStudent(scope);
		     }).catch(() => {
		          this.$message({
		            type: 'warning',
		            message: '已取消删除'
		          });
		     });
		},
		removeStudent(scope){
    const params = {
				id: scope.row.id
			};
			console.log(scope);
	/*		removeStudentById(params).then((res) => {
				this.getTableData();
				this.$message({
					type: 'info',
					message: '删除成功'
				});
			}).catch((err) => {
				console.log(err);
			})*/
		},
		getTableData(){  //---------------------获取列表数据
		  let para = {
        currentPage: this.pagination.currentPage,
				pageSize: this.pagination.pageSize,
				...this.filter
			};
			console.log(para);
      getSystemLogList(para).then((res) => {
        console.log(res);
        this.systemLogData = res.data.items;
        this.pagination.totalNum = res.data.totalNum;
      });

    }



}
