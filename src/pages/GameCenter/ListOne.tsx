import React, { useState, useEffect, useRef } from 'react'
import Added from './Alert/Added';
import './scss/index.scss'
import { Pagination, ConfigProvider, Table, Button, Space } from 'antd';
const { Column, ColumnGroup } = Table;
export default function ListOne() {
	const modal: any = useRef(null)
	let [date, setdate] = useState([]) as any
	let [row, setrow] = useState()
	let [title, settitles] = useState()
	useEffect(() => {
		window.api.signin.province.list().then((res: any) => {
			setdate(res.data.list.map((value: any, index: any) => {
				return {
					...value,
					key: index + 1
				}
			}))
		})
	}, [modal])
	const update = (type: string, row: any) => {
		if (type === '新增数据') {
			Object.assign(row,{key: Math.random()* 1000})
			setdate([row,...date])
		} else {
			let newa=date.map((v: any, i: any) => {
				if (v.key === row.key) v=row
				return {
					...v,
				}	
			})
			setdate(newa)
		}
	}
	return (
		<div>
			<ATable date={date} modal={modal} settitles={settitles} setrow={setrow} setdate={setdate} />
			<Added ref={modal} title={title} row={row} update={update} />
		</div>
	)
}
const ATable = (props: any) => {
	const { date, modal, settitles, setrow, setdate } = props
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [loading, setLoading] = useState(false);

	const start = () => {
		setLoading(true);
		setTimeout(() => {
			setSelectedRowKeys([]);
			setLoading(false);
		}, 1000);
	};
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
			render: (_: any, date: any) => {
				return (
					<div>
						<Button type="link" onClick={() => add('修改数据', date)}>修改</Button>
						<Button type="link" danger onClick={() => Delete(date.key)}>删除</Button>
					</div>
				)
			},
		},
	];
	const onSelectChange = (newSelectedRowKeys: any, selectedRows: any, info: any) => {

		setSelectedRowKeys(newSelectedRowKeys);
	};

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};

	const add = (trpe?: string, row?: any) => {
		settitles(trpe)
		setrow(row)
		modal.current?.showModal()
	}
	const Delete = (id: string) => {
		setdate(date.filter((v: any) => v.key !== id))
	}
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
					<Button style={{ marginRight: 18 }} type="primary" onClick={() => add('新增数据')}>
						新增
					</Button>
				</div>
			</div>

			<Table bordered rowSelection={rowSelection} columns={columns} dataSource={date} pagination={{
				total: date.length,
				defaultCurrent: 1,
				pageSize: 10,
				showSizeChanger:false,
				showQuickJumper: true,
				showTotal: (total) => `共 ${total} 条`
			}}>

			</Table>
		</div>
	);
}