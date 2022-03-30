import { SearchOutlined } from '@ant-design/icons';
import React from 'react'
import styles from './styles.module.scss'

interface FilterProps {
    value:string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FilterInput: React.FC<FilterProps> = ({value, handleChange}:FilterProps) => {
    return (
        <div className={styles.filterInput}>
        <SearchOutlined />
            <input 
            value={value}
            onChange={handleChange}
            type="text" />
        </div>
    )
}

export default FilterInput
