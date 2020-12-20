import Link from 'next/link'
import Layout from '../components/Layout'
import TodoContainer from '../components/Todo/TodoContainer'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>
      Hello Next.js{' '}
      <span role="img" aria-labelledby="WavingHand">
        👋
      </span>
    </h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <TodoContainer />
  </Layout>
)

export default IndexPage
