"use client";
import { useTranslations } from "next-intl";
import css from "./Header.module.css";
import Link from "next/link";
const Hero = () => {
  const t = useTranslations("StyleSection");
  return (
    <header className={css.section}>
      <div className="container">
        <div className={css.header}>
          <Link href="/" aria-label={t("home")} className={css.logoLink}>
            {/* <svg width="84" height="36" aria-hidden="true">
              <use href="/symbol-defs.svg#icon-company-logo"></use>
            </svg> */}
          </Link>
        </div>
      </div>
    </header>
  );
};
