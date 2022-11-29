import React, { useState, useEffect } from 'react'
import './scss/index.scss'
import { Pagination, ConfigProvider, Table, Button, Space } from 'antd';
import text from '../../../text.json';
const { Column, ColumnGroup } = Table;
export default function ListOne() {
	return (
		<div>
			<ATable />
		</div>
	)
}
const ATable = () => {
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

			<Table bordered rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{
				total: data.length,
        defaultCurrent:1,
        pageSize:10,
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
		dataIndex: 'name',
    key: 'name',
    width:200,
    align:'center'
	},
	{
		title: '内容',
		dataIndex: 'age',
    key: 'age',
    width:200,
    align:'center'

	},
	{
		title: '操作',
    key: 'action',
    width:200,
    align:'center',
    render: () => {
      return(
        <div>
          <Button type="link">修改</Button>
          <Button type="link" danger>删除</Button>
        </div>
      )
    },
	},
];
const data: any = [
	{
		name: '123',
		age: '123,',
		key: 1,
		address: '123,'
	},
	{
		name: '123321',
		key: 2,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 3,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 2645,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 72,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 26,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 95,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 752,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 92,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 2641565,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 26456,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 642,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 2987,
		age: '123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 2456,
		age: '645123213,',
		address: '12123213,'
	},
	{
		name: '123321',
		key: 9782,
		age: '123213,',
		address: '12123213,'
	},
];

const add = () => {

}