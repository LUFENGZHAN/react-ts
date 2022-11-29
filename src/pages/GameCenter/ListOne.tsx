import React, { useState, useEffect } from 'react'
import './scss/index.scss'
import { Pagination, ConfigProvider, Table, Button, Space } from 'antd';
import text from '../../../text.json';
const { Column, ColumnGroup } = Table;
export default function ListOne() {
	let [date,setdate] = useState([])
	useEffect(()=>{
		window.api.signin.province.list().then((res:any) => {
			setdate(res.data.list.map((value: any, index: any) => {
				return {
					...value,
					key:index
				}
			}))
		  })
	},[])
	return (
		<div>
			<ATable date={date}/>
		</div>
	)
}
const ATable = ({date}:any) => {
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [loading, setLoading] = useState(false);
	const start = () => {
		console.log(selectedRowKeys);

		setLoading(true);
		setTimeout(() => {
			setSelectedRowKeys([]);
			setLoading(false);
		}, 1000);
	};

	const onSelectChange = (newSelectedRowKeys: any, selectedRows: any, info: any) => {

		setSelectedRowKeys(newSelectedRowKeys);
	};

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};
	const hasSelected = selectedRowKeys.length > 0;
	return (
		<div>
			<div className='layout'>
				<div style={{ marginBottom: 16 }}>
					<Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
						选择
					</Button>
					<span style={{ marginLeft: 8 }}>
						{hasSelected ? ` ${selectedRowKeys.length} 条` : ''}
					</span>
				</div>
				<div>
					<Button style={{ marginRight: 18 }} type="primary" onClick={add}>
						新增
					</Button>
				</div>
			</div>

			<Table bordered rowSelection={rowSelection} columns={columns} dataSource={date} pagination={{
				total: data.length,
				defaultCurrent: 1,
				pageSize: 10,
				showQuickJumper: true,
				showTotal: (total) => `共 ${total} 条`
			}}>

			</Table>
		</div>
	);
}
const columns: any = [
	{
		title: '标题',
		dataIndex: 'title',
		key: 'title',
		width: 200,
		align: 'center'
	},
	{
		title: '内容',
		dataIndex: 'value',
		key: 'value',
		width: 200,
		align: 'center'

	},
	{
		title: '操作',
		key: 'action',
		width: 200,
		align: 'center',
		render: () => {
			return (
				<div>
					<Button type="link">修改</Button>
					<Button type="link" danger>删除</Button>
				</div>
			)
		},
	},
];
let data: any = [];

const add = () => {

}