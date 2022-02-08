export default function Contact() {
  return (
    <section
      id='contact'
      className='h-full sm:h-screen w-full pt-20 flex flex-col sm:items-center justify-center mb-20'
    >
      <div className='bg-white lg:px-28 px-8'>
        <div className='lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white mb-20'>
          <h1>Let's Chat</h1>
        </div>
        <div className='md:flex items-center mt-12'>
          <div className='md:w-72 flex flex-col'>
            <label className='text-base font-semibold leading-none text-gray-800'>
              Name
            </label>
            <input
              tabIndex={0}
              arial-label='Please input name'
              type='name'
              className='text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
              placeholder='Please input  name'
            />
          </div>
          <div className='md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4'>
            <label className='text-base font-semibold leading-none text-gray-800'>
              Email Address
            </label>
            <input
              tabIndex={0}
              arial-label='Please input email address'
              type='name'
              className='text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
              placeholder='Please input email address'
            />
          </div>
        </div>
        <div className='md:flex items-center mt-8'>
          <div className='md:w-72 flex flex-col'>
            <label className='text-base font-semibold leading-none text-gray-800'>
              Company name
            </label>
            <input
              tabIndex={0}
              arial-label='Please input company name'
              type='name'
              className='text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 '
              placeholder='Please input company name'
            />
          </div>
          <div className='md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4'>
            <label className='text-base font-semibold leading-none text-gray-800'>
              Country
            </label>
            <input
              tabIndex={0}
              arial-label='Please input country name'
              type='name'
              className='text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
              placeholder='Please input country name'
            />
          </div>
        </div>
        <div>
          <div className='w-full flex flex-col mt-8'>
            <label className='text-base font-semibold leading-none text-gray-800'>
              Message
            </label>
            <textarea
              tabIndex={0}
              aria-label='leave a message'
              type='name'
              className='h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none'
              defaultValue={''}
            />
          </div>
        </div>
        <div className='flex items-center justify-center w-full'>
          <button className='mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none'>
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  )
}
