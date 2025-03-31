import Link from 'next/link';
import styles from "./navbar.module.css";
import Icon from '@/components/ui/Icon';
import CartIconCounter from '../Cart/CartIconCounter';

const Navbar = () => {

  return (
    <nav className={styles.container}>
      <ul className={styles.flexList}>
        <li>
          <Link href="/">
            <Icon name={'logo'} width={74} height={24} />
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <CartIconCounter />
          </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
