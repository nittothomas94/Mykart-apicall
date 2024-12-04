import { Skeleton } from 'antd';

import './cardskelton.css';

const CardSkelton = () => {
  return (
    <div className="card">
      <Skeleton active={true}/>
      <br />
      <Skeleton />
      <br />
      <Skeleton />
    </div>
  );
};

export default CardSkelton;
