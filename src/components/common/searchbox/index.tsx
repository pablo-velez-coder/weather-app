import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useForecast } from 'context/provider';
import styles from './styles.module.scss'

export const SearchBox = () => {

  const {setCityName} = useForecast()
  const navigate = useNavigate()

    const onFinish = ({city}:{city:string}) =>{
      setCityName(city)
      navigate(`/${city}`)
    }

  return (
    <Form
      className={styles.searchboxForm}
      name="form"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="city"
        rules={[{ required: true,
          pattern:new RegExp(/^[a-z _]+$/gi),
          message: 'Please input a valid text!' }]}
      >
        <Input 
        placeholder="Enter a city"
        className={styles.searchboxFormInput}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button
        ghost
        icon={<ArrowRightOutlined />}
        shape="circle"
        className={styles.searchboxFormButton}
        />
      </Form.Item>
    </Form>
  )
}
