function Footer() {
  return (
    <footer className='my-5 w-full'>
      <div className='mx-auto pt-5 container flex flex-col items-center justify-center'>
        <a href='#home'>
          <img className='w-40 md:w-40' src='/assets/logo.png' alt='logo' />
        </a>
        <div className='py-5 text-sm '>
          Copyright © {new Date().getFullYear()} MMBC &nbsp;
        </div>
      </div>
    </footer>
  )
}

export default Footer
