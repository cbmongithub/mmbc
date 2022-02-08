export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='h-full sm:h-screen w-full pt-20 flex flex-col items-center justify-center'
    >
      <div className='xl:px-20 px-8 2xl:mx-auto 2xl:container relative z-40'>
        <div className='lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-left text-gray-800 dark:text-white'>
          <h1>Testimonial</h1>
        </div>

        <div className='flex'>
          <div className='mt-14 md:flex'>
            <div className='relative lg:w-1/2 sm:w-96 xl:h-96 h-80'>
              <img
                src='/assets/testimonial.jpg'
                alt='anna'
                className='w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded'
              />
              <div className='w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full'>
                <img
                  src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg'
                  alt='commas'
                />
              </div>
            </div>
            <div className='md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between'>
              <div>
                <p className='text-base font-medium leading-6 mt-4 text-gray-600'>
                  For me, I can say that your services you have rendered to
                  VDCWorx have been absolutely crucial for our success so far.
                  <br />
                  <br />
                  There are many things that I do not have time for and you have
                  always been there to help with anything we need, no matter how
                  weird or odd the request was.
                  <br />
                  <br />
                  You have shown nothing but professionalism and that you are
                  trust worthy.
                </p>
              </div>
              <div className='md:mt-0 mt-8'>
                <p className='text-base font-medium leading-4 text-gray-800'>
                  Chad Owen
                </p>
                <p className='text-base leading-4 mt-2 mb-4 text-gray-600'>
                  Lead Coordinator, VDCWorx
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
