import Link from 'next/link'
import Head from 'next/head'
import type { NextPage } from 'next'

import { getCharacters } from './api/searchCharacters'

import { Header } from '../components/Header'
import { CharacterCard } from '../components/CharacterCard'

import { Content, Title, Footer, Button } from './styles'

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
  };
  image: string;
}

export interface IResponseApi {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }
  results: ICharacter[]
}

type Characters = {
  character: ICharacter[];
}

type HomeProps = Pick<IResponseApi, 'info'> & {
  results: ICharacter[];
}

export async function getStaticProps() {
  let page = 0

  const { info, results }: IResponseApi = await getCharacters(page)

  return {
    props: { info, results }
  }
}

const Home: NextPage<HomeProps> = ({ info, results }) => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <link rel="icon" href="/morty.svg" />
      </Head>
      
      <div>
        <Header />

        <Content>
          <Title>Search for your favorite Rick and Morty character.</Title>

          <Link href="/character-details">
            <a>Ver detalhes do personagem</a>
          </Link>

          <section className='content'>
            {results.map(character =>
              <CharacterCard
                key={character.id}
                character={character}
              />
            )}
          </section>
        </Content>

        <Footer>
          <Button>{'<'}</Button>
          <Button>{'>'}</Button>
        </Footer>
      </div>
    </>
  )
}

export default Home
