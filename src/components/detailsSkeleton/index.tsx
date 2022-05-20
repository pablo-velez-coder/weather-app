import { Skeleton } from 'antd';
import styles from './styles.module.scss';

export const DetailsSkeleton = () => {
  return             <>
  <Skeleton  active />
  <Skeleton.Button style={{width:'90vw', height:'163px'}} active size='large' shape="round"  />
  <div className={styles.cityDetails__list}>
  {Array(7).fill( 1).map((_, i)=>(<Skeleton.Button key={i} style={{width:'95px', height:'197px'}} active size='large' shape="round" />))}
  </div>
  </>
};