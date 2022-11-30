import React, { useState,useImperativeHandle,useEffect,forwardRef } from 'react';
import { Button, Modal } from 'antd';
 function Added({date}:any,ref:any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useImperativeHandle(
    ref,
    ()=>({
        showModal(){
          showModal() 
        }
    })
  )
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <Modal title="Basic Modal" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  </>
  )
}
export default forwardRef(Added)