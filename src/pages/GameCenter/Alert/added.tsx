import React, { useState, useImperativeHandle, useEffect, forwardRef,useRef } from 'react';
import {Modal, Form, Input } from 'antd';
function Added(props: any, refs: any) {
  const [myForm] = Form.useForm();
  let { title, row, update } = props
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [val, setval] = useState({}) as any;
  useEffect(() => {
       setval({...row})
      myForm.setFieldsValue(row);
       
  }, [row])
  useImperativeHandle(
    refs,
    () => ({
      showModal() {
        showModal()
      },
    })
  )
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {

    update(title,val)
    setval({title:'',value:''})
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values: any) => {
    switch (values.target.id) {
      case 'basic_title':
        setval({ ...val, title: values.target.value })
        break;
      case 'basic_value':
        setval({ ...val, value: values.target.value })
        break;
    }
  };
  return (
    <>
      <Modal title={title} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          form={myForm}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onChange={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入标题!' }]}
          >
            <Input placeholder='请输入标题' />
          </Form.Item>

          <Form.Item
            label="内容"
            name="value"
            rules={[{ required: true, message: '请输入内容!' }]}
          >
            <Input placeholder='请输入内容' />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
export default forwardRef(Added)