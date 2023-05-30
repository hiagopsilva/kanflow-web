import { AppProps } from 'next/app';
import { globalStyles } from '~/styles/global';
import { MenuContainer } from '~/styles/pages/home';

import logoImg from '~/assets/logo.svg';
import { getInitialWords } from '~/utils/helpers';

globalStyles();

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <main>
      <MenuContainer>
        <img src={logoImg.src} alt="logo kanflow" width={50} height={56} />

        <div className="content">
          {['Casa', 'Trabalho', 'Tarefas', 'Escola'].map((item) => (
            <div key={item} className="item-board">
              <span>{getInitialWords(item)}</span>
            </div>
          ))}
        </div>
      </MenuContainer>
      <Component {...pageProps} />
    </main>
  );
}
