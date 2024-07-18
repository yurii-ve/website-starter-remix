import classNames from 'classnames';
import styles from './header.module.scss';
import { ROUTES } from '~/router/config';
import { Link } from '@remix-run/react';
import CommonStyles_module from '~/styles/common-styles.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Link to="/" className={styles.logo}>
                LOGO
            </Link>
            <div className={styles.menu}>
                <Link
                    to="/"
                    className={classNames(CommonStyles_module.secondaryButton, styles.menuButton)}
                >
                    Home
                </Link>
                <Link
                    to={ROUTES.about.to()}
                    className={classNames(CommonStyles_module.secondaryButton, styles.menuButton)}
                >
                    About
                </Link>
            </div>
        </div>
    );
};
