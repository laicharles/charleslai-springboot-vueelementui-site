<template>
	<div style="padding: 20px;">
        <!-- -------------------------------------------查询条件--------------------------------------------- -->
		<el-collapse v-model='activeCollapse'>
			<el-collapse-item title='查询条件' name='search'>
				<el-form ref='searchCondition' :model='filter' label-width='100px' label-position=‘left’>
					<el-row>
            <el-col :span='3'>
              <el-form-item label='日志时间' prop='logLevel'>
                <el-input v-model='filter.firstSvrTime' :clearable='true' placeholder="请选择日期"
                          suffix-icon="el-icon-date"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span='3'>
              <el-form-item label='日志时间' prop='logLevel'>
                <el-input v-model='filter.endSvrTime' :clearable='true' placeholder="请选择日期"
                          suffix-icon="el-icon-date"></el-input>
              </el-form-item>
            </el-col>

						<el-col :span='3'>
							<el-form-item label='日志级别' prop='logLevel'>
								<el-input v-model='filter.logLevel' :clearable='true'></el-input>
							</el-form-item>
						</el-col>
            <el-col :span='3'>
							<el-form-item label='服务类别' prop='svrType'>
								<el-input v-model='filter.svrType' :clearable='true'></el-input>
							</el-form-item>
						</el-col>
            <el-col :span='3'>
							<el-form-item label='服务器IP' prop='svrIP'>
								<el-input v-model='filter.svrIP' :clearable='true'></el-input>
							</el-form-item>
						</el-col>
						<el-col :span='3' style="marginLeft:20px;">
                            <el-button @click='handleSearch' type='primary'>查询</el-button>
					        <el-button @click='resetForm("searchCondition")'>重置</el-button>
						</el-col>
					</el-row>
				</el-form>
			</el-collapse-item>
		</el-collapse>
		<!-- -------------------------------------------数据列表--------------------------------------------- -->
			<div>
        <el-row type='flex' justify='end'>
          <el-pagination
            @size-change='handlePageSizeChange'
            @current-change='handleCurrentChange'
            :current-page='pagination.currentPage'
            :page-sizes='[10, 20, 50, 100]'
            :page-size='pagination.pageSize'
            :total='pagination.totalNum'
            layout='prev,pager,next,jumper,total,sizes'
          ></el-pagination>
        </el-row>
				<div style='margin-bottom: 20px'>
					<el-table :data='systemLogData' width='100%' border>
						<el-table-column  label="序列" type='index' width='65'></el-table-column>
						<el-table-column label='服务时间' prop='svrTime' width='200'></el-table-column>
						<el-table-column label='日志级别' prop='logLevel' width='200'></el-table-column>
						<el-table-column label='服务器类别' prop='svrType' width='200'></el-table-column>
						<el-table-column label='服务器IP' prop='svrIP' width='200'></el-table-column>
					</el-table>
				</div>

			</div>
	</div>
</template>
<script type="text/javascript">
    import data from './data'
    import methods from './method'
	  export default{
		data(){
			return data.init();
		},
		methods:methods,
		mounted(){
			this.getTableData();
		}
	}
</script>
<style type="text/css">
</style>
