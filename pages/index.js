import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className='py-0 px-8'>
        <main className='min-h-[100vh] py-16 px-0 flex flex-1 flex-col justify-center items-center'>
          <h1 className='m-0 leading-[1.15] text-[4rem] hover:underline focus:underline active:underline text-center font-semibold'>
            Welcome to{' '}
            <a className='text-[#0070f3]' href='https://nextjs.org'>
              Next.js!
            </a>
          </h1>
        </main>
      </div>
    </>
  )
}
