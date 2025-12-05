"use client";
import { useTranslations } from "next-intl";
import css from "./Header.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <header className={css.section}>
      <div className="container">
        <div className={css.header}>
          <Link href="/" className={css.logoLink}>
            {/* <svg width="84" height="36" aria-hidden="true">
              <use href="/symbol-defs.svg#icon-company-logo"></use>
            </svg> */}
          </Link>
        </div>
      </div>
      <div className={css.navContainer}>
        <nav aria-label="Main Navigation" className={css.navigationList}>
          <ul className={css.navigation}>
            <li className={css.navigationItem}>
              <Link href="/" className={css.navigationLink}>
                {/* {t('home')} */}
              </Link>
            </li>
            <li className={css.navigationItem}>
              <Link href="/products" className={css.navigationLink}>
                {/* {t('goods')} */}
              </Link>
            </li>
            <li className={css.navigationItem}>
              <Link href="/categories" className={css.navigationLink}>
                {/* {t('categories')} */}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
