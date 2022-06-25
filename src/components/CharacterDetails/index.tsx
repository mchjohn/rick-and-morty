import Image from 'next/image';

import { ICharacter, IResponseApi } from '../../pages';

import { getCharacter } from '../../pages/api/searchCharacters';

import { Container, Infos, Title, InfoText } from './styles';

type CharacterCardProps = {
  id: number;
  character: ICharacter;
}

export async function getStaticProps(id: number) {
  const character: ICharacter = await getCharacter(id)

  return {
    props: { character }
  }
}

export function CharacterDetails({ id, character }: CharacterCardProps) {
  const location = character.location.name

  const city = location.includes('Replacement Dimension') ?
    location.replace('(Replacement Dimension)', '') : location

  return (
    <Container>
      <Image
        src={character.image}
        alt="Rick"
        width='100%'
        height='100%'
        style={{ borderRadius: 8 }}
      />

      <Title>{character.name}</Title>
      
      <Infos>
        <InfoText>Specie: {character.species}</InfoText>
        <InfoText>Status: {character.status}</InfoText>
        <InfoText>Gender: {character.gender}</InfoText>
        <InfoText>City: {city}</InfoText>
      </Infos>
    </Container>
  )
}