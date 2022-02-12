export default function Hero() {
  return (
    <section
      id='home'
      className='h-screen sm:h-screen w-full flex flex-col items-center justify-center bg-no-repeat bg-center bg-fixed bg-cover z-0'
      style={{
        backgroundImage: "url('/assets/hero.jpg')",
      }}
    >
      <div className='container-fluid z-1 flex justify-center items-center flex-col px-5 bg-gradient-to-b from-transparent via-white to-white w-full h-full'>
        <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10'>
          We are a full service
          <br />
          <span className='text-indigo-700'> Business </span>
          Agency
        </h1>
        <p className='mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center sm:text-lg'>
          We elimate the financial burden of professional services to small
          businesses, allowing our clients to focus and prosper.
        </p>
        <div className='mt-5 sm:mt-10 flex justify-center items-center'>
          <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm'>
            <a href='#about'>Learn More</a>
          </button>
        </div>
      </div>
    </section>
  )
}
