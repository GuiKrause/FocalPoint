import Logo from './assets/logo.svg'
export default function Home() {
  return (
    <>
      <header className='bg-white'>
        <div className='flex flex-col gap-2 border-b-2 border-grey-500 mb-6'>
          <Logo width={150} height={35} />
          <p className='text-black'>Bem-vindo de volta, Marcus</p>
          <p>Segunda, 01 de dezembro de 2025</p>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
