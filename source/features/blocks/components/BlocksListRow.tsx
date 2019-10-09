import { observer } from 'mobx-react-lite';
import moment from 'moment';
import styles from './BlocksListRow.scss';

export interface IBlocksListRowProps {
  block: number;
  createdAt: number;
  createdBy: string;
  epoch: number;
  output: number;
  size: number;
  slots: number;
  transactions: number;
}

const BlocksListRow = (props: IBlocksListRowProps) => (
  <div className={styles.blocksListRowContainer}>
    <div className={styles.epoch}>{props.epoch}</div>
    <div className={styles.blocksSlots}>{props.block}</div>
    <div className={styles.createdAt}>
      {moment(props.createdAt).format('YYYY/MM/DD HH:mm:ss')}
    </div>
    <div className={styles.transactions}>{props.transactions}</div>
    <div className={styles.output}>{props.output}</div>
    <div className={styles.size}>{props.size}</div>
    <div className={styles.createdBy}>{props.createdBy}</div>
  </div>
);

export default observer(BlocksListRow);