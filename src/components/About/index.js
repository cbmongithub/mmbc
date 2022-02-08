export default function About() {
  return (
    <section
      id='about'
      className='h-screen sm:h-screen w-full pt-20 flex flex-col items-center justify-center'
    >
      <div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
        <div className='flex flex-col lg:flex-row justify-between gap-8'>
          <div className='w-full lg:w-5/12 flex flex-col justify-center'>
            <div className='lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-left text-gray-800 dark:text-white pb-10'>
              <h1>About Us</h1>
            </div>
            <p className='font-normal text-base leading-6 text-gray-600 '>
              M&M Business Consulting provides a wide range of financial
              services that are specifically designed to encourage business and
              personal growth. This is not a one-size-fits-most approach. When
              working with MMBC, you receive only the unique services you
              require.
            </p>
          </div>
          <div className='w-full lg:w-8/12 '>
            <img
              className='w-full h-full'
              src='https://i.ibb.co/FhgPJt8/Rectangle-116.png'
              alt='A group of People'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
