import { ICharacter } from '..'

type Data = {
  name: string
}

const baseURL = 'https://rickandmortyapi.com/api'

export async function getCharacters<IResponseApi>(page: number): Promise<IResponseApi> {
  const res = await fetch(`${baseURL}/character?page=${page}`)

  return res.json()
}

export async function getAllCharacterIds<IResponseApi>(id: number): Promise<IResponseApi> {
  const res = await fetch(`${baseURL}/character/${id}`)
  const characters = await res.json()

  return characters.map((character: ICharacter) => {
    return {
      params: {
        id: character.id,
      },
    };
  });
}
