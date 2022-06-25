import Head from 'next/head'

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}

export default function CharacterDetails() {
  return (
    <>
      <Head>
        <title>Rick</title>
        <link rel="icon" href="/morty.svg" />
      </Head>

      <div>
        <p>Detalhes do personagem</p>
      </div>
    </>
  )
}