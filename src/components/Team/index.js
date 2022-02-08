export default function Team() {
  return (
    <section
      id='team'
      className='h-full sm:h-screen w-full pt-20 flex flex-col items-center justify-center'
    >
      <div className='lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white mb-20'>
        <h1>Our Team</h1>
      </div>
      <div className='w-full px-10 pt-10'>
        <div className='container mx-auto'>
          <div className='lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around'>
            <div className='xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5'>
              <div className='rounded overflow-hidden shadow-md bg-white'>
                <div className='absolute -mt-20 w-full flex justify-center'>
                  <div className='h-32 w-32'>
                    <img
                      src='https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif'
                      alt='imgg'
                      className='rounded-full object-cover h-full w-full shadow-md'
                    />
                  </div>
                </div>
                <div className='px-6 mt-16'>
                  <div className='font-bold text-3xl text-center pb-1'>
                    Scott Mackenzie
                  </div>
                  <p className='text-gray-800 text-sm text-center'>
                    Business Manager
                  </p>
                  <p className='text-center text-gray-600 text-base py-5 font-normal'>
                    Scott has over 10 years of experience in business management
                    and operations experience. He manages activity, workflows,
                    and operational objectives.
                  </p>
                </div>
              </div>
            </div>
            <div className='xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5'>
              <div className='rounded overflow-hidden shadow-md bg-white'>
                <div className='absolute -mt-20 w-full flex justify-center'>
                  <div className='h-32 w-32'>
                    <img
                      src='https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif'
                      alt='img2'
                      className='rounded-full object-cover h-full w-full shadow-md'
                    />
                  </div>
                </div>
                <div className='px-6 mt-16'>
                  <div className='font-bold text-3xl text-center pb-1'>
                    Shaunte Mackenzie
                  </div>
                  <p className='text-gray-800 text-sm text-center'>
                    Accountant
                  </p>
                  <p className='text-center text-gray-600 text-base py-5 font-normal'>
                    Shaunte holds an impressive track record of 15 years doing
                    clerical and bookkeeping work. She currently attends Weber
                    State, where she is pursuing her finance degree.
                  </p>
                </div>
              </div>
            </div>
            <div className='xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5'>
              <div className='rounded overflow-hidden shadow-md bg-white'>
                <div className='absolute -mt-20 w-full flex justify-center'>
                  <div className='h-32 w-32'>
                    <img
                      src='/assets/christian.jpg'
                      alt='img3'
                      className='rounded-full object-cover h-full w-full shadow-md'
                    />
                  </div>
                </div>
                <div className='px-6 mt-16'>
                  <div className='font-bold text-3xl text-center pb-1'>
                    Christian Martinez
                  </div>
                  <p className='text-gray-800 text-sm text-center'>
                    Web Developer
                  </p>
                  <p className='text-center text-gray-600 text-base py-5 font-normal'>
                    Christian has 6 years of experience building modern web
                    apps. He currently attends SLCC, where he pursuing his
                    Associates degree in Computer Science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
