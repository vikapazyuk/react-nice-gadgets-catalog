import './Footer.scss';
import { FC, useCallback, useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../Icon';
import { icons } from '../../../constants/icons.config';
import { GlobalContext } from '../../../context/GlobalContext';
import { FooterLink } from './types/types';

const FOOTER_LINKS: FooterLink[] = [
  {
    href: 'https://github.com/vikapazyuk',
    label: 'Github',
    hasRel: true,
  },
  {
    href: 'https://www.linkedin.com/in/viktoriia-paziuk-417958333/',
    label: 'Contacts',
    hasRel: true,
  },
  { href: '/', label: 'rights' },
];

export const Footer: FC = () => {
  const { theme, favorites } = useContext(GlobalContext);
  const { pathname } = useLocation();

  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const isFavoritesPage = pathname.toLowerCase().includes('favorites');

  // Перевірка, чи сторінка достатньо довга для кнопки
  useEffect(() => {
    const updateBackToTop = () => {
      const isScrollable =
        document.documentElement.scrollHeight > window.innerHeight;

      // На Favorites кнопка тільки якщо є товари
      const showButton =
        isScrollable && (!isFavoritesPage || favorites.length > 0);

      setShowBackToTop(showButton);
    };

    updateBackToTop(); // перевірка при завантаженні

    window.addEventListener('resize', updateBackToTop);
    window.addEventListener('load', updateBackToTop); // після завантаження контенту

    return () => {
      window.removeEventListener('resize', updateBackToTop);
      window.removeEventListener('load', updateBackToTop);
    };
  }, [pathname, favorites.length, isFavoritesPage]);

  const logoSrc = theme === 'light' ? 'logo.svg' : 'logo_dark.svg';

  return (
    <div className="footer">
      <div className="footer__container">
        <a href="#" className="footer__logo-container">
          <img src={logoSrc} alt="Nice Gadgets" className="footer__logo" />
        </a>

        <div className="footer__items">
          {FOOTER_LINKS.map(({ href, label, hasRel }) => (
            <Link
              key={label}
              to={href}
              className="footer__link"
              target="_blank"
              {...(hasRel && { rel: 'noopener noreferrer' })}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="footer__block">
          {showBackToTop && (
            <div className="footer__button-wrapper" onClick={scrollToTop}>
              <button className="footer__button">
                <Icon icon={icons.arrow_left[theme]} />
              </button>
              <span className="footer__button-title">Back to top</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
