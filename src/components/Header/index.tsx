import Image from 'next/image';

import { Container } from './styles';

const logoRick = 'https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-face-kushmastafresh-deviantart-19.png'
const logoMorty = 'https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-morty-face-kushmastafresh-deviantart-27.png'

export function Header() {
  return (
    <Container>
      <Image
        src={logoRick}
        alt="Rick"
        width='100%'
        height='100%'
      />
      <Image
        src={logoMorty}
        alt="Morty"
        width='100%'
        height='100%'
      />
    </Container>
  )
}
