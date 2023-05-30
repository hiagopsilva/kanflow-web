import { styled } from '..';

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
});

export const MenuContainer = styled('div', {
  width: 100,
  height: '100vh',
  backgroundColor: '#5E35E7',

  display: 'flex',
  flexDirection: 'column',
  paddingTop: 34,
  alignItems: 'center',

  'div.content': {
    marginTop: 40,
  },

  'div.item-board': {
    display: 'flex',
    background: '#b4b4b4d9',

    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 8,

    justifyContent: 'center',
    alignItems: 'center',

    textTransform: 'uppercase',
  },
});
