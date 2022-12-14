import React, { useState, useContext } from 'react'
import Product from './Product'
import { Image, Button, Modal } from 'antd'
import Context from '../Context'



function Compare() {
  const { value, setValue } = useContext(Context)
  const [isModalOpen, setIsModalOpen] = useState(false);
  function showModal() {
    setIsModalOpen(true)
  };
  function handleOk() {
    setIsModalOpen(false)
  };
  function handleCancel() {
    setIsModalOpen(false);
  };
  function remove(id) {
    setValue(value.filter(item => item.id !== id))
  }

  return (
    <div className='compare'>
      <h2>Compare Product Details Page</h2>
      <div className='flexer'>
        {
          value !== []
            ? value.map((curr, i) =>
              <div className='compbox' key={i}>
                <Image src={curr.thumbnail} height={100} width={100} />
                <div className='compare-list'>Brand: {curr.brand}</div>
                <div className='compare-list'>Name: {curr.title}</div>
                <div className='compare-list'>Category: {curr.category}</div>
                <div className='compare-list'>Price (in $): {curr.price}</div>
                <div className='compare-list'>Discount (in %): {curr.discountPercentage}</div>
                <div className='compare-list'>Rating: {curr.rating}</div>
                <div className='compare-list'><Button type='primary' onClick={() => remove(curr.id)}>Delete Product</Button></div>
              </div>
            )
            : null
        }
      </div>
      <div>
        <Button type="primary" onClick={showModal}>Add To Compare</Button>
        <Modal width={1000} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}><Product /></Modal>
      </div>
    </div>
  )
}

export default Compare