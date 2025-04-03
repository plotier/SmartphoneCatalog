import Link from 'next/link';
import styles from './navbar.module.css';
import Icon from '@/components/ui/Icon';
import CartIconCounter from '../Cart/CartIconCounter';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.flexList}>
        <li>
          <Link href="/" aria-label="home-link" data-testid="home-link">
            <Icon name={'logo'} width={74} height={24} data-testid="icon" />
          </Link>
        </li>
        <li>
          <Link href="/cart" aria-label="cart-link" data-testid="cart-link">
            <CartIconCounter data-testid="cart-icon-counter" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
