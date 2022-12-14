import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import { Image, Table, Button } from 'antd'
import Context from '../Context'
import { useNavigate } from 'react-router-dom'

function Product() {
  const navigate = useNavigate()
  const { setValue } = useContext(Context)
  const [data, setData] = useState([])
  const [columns] = useState([
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (rec1, rec2) => rec1.id - rec2.id
    },
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      render: (path) => <Image src={path} height={50} width={50} />
    },
    {
      title: 'Brand',
      dataIndex: 'brand'
    },
    {
      title: 'Name',
      dataIndex: 'title'
    },
    {
      title: 'Category',
      dataIndex: 'category',
      sorter: (rec1, rec2) => rec1.category.length - rec2.category.length 
    },
    {
      title: 'Price ($)',
      dataIndex: 'price',
      sorter: (rec1, rec2) => rec1.price - rec2.price
    }
    , {
      title: 'Discount (%)',
      dataIndex: 'discountPercentage',
      sorter: (rec1, rec2) => rec1.discountPercentage - rec2.discountPercentage
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      sorter: (rec1, rec2) => rec1.rating - rec2.rating
    },
    {
      title: 'Action',
      render: (ele) => <Button type="primary" onClick={() => {
        setValue(prev => [...prev, ele]);
        navigate('/compare');
      }}>Compare</Button>
    }
  ])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((resp) => {
        setData(resp.products)
      })
  }, [])

  return (
    <div className='product'>
      <h2>Product Details Page</h2>
      <Table columns={columns} dataSource={data} pagination={true}></Table>
    </div>
  )
}

export default Product