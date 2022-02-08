export default function Services() {
  return (
    <section
      id='services'
      className='lg:h-screen sm:h-full w-full pt-20 flex flex-col items-center justify-center'
    >
      <div className='flex justify-center items-center flex-col'>
        <div className='lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white'>
          <h1>Services</h1>
        </div>
        <div className='pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0'>
          <div className='cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col'>
            <div className='mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                enableBackground='new 0 0 24 24'
                height={32}
                viewBox='0 0 24 24'
                width={32}
                fill='#6366F1'
              >
                <g>
                  <rect fill='none' height={32} width={32} />
                </g>
                <g>
                  <path d='M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12.88,17.76V19h-1.75v-1.29 c-0.74-0.18-2.39-0.77-3.02-2.96l1.65-0.67c0.06,0.22,0.58,2.09,2.4,2.09c0.93,0,1.98-0.48,1.98-1.61c0-0.96-0.7-1.46-2.28-2.03 c-1.1-0.39-3.35-1.03-3.35-3.31c0-0.1,0.01-2.4,2.62-2.96V5h1.75v1.24c1.84,0.32,2.51,1.79,2.66,2.23l-1.58,0.67 c-0.11-0.35-0.59-1.34-1.9-1.34c-0.7,0-1.81,0.37-1.81,1.39c0,0.95,0.86,1.31,2.64,1.9c2.4,0.83,3.01,2.05,3.01,3.45 C15.9,17.17,13.4,17.67,12.88,17.76z' />
                </g>
              </svg>
            </div>
            <div className='text-gray-800 dark:text-white text-2xl font-semibold text-center'>
              <h2>Payroll</h2>
            </div>
            <div className='text-gray-600 dark:text-gray-300 mt-2 text-lg text-center '>
              <p>
                State, Federal, Workers Comp, Insurance, Withholdings... We take
                care of it all, so your payroll goes smoothly every time.
              </p>
            </div>
          </div>
          <div className='cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col'>
            <div className='mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                enableBackground='new 0 0 24 24'
                height={32}
                viewBox='0 0 24 24'
                width={32}
                fill='#6366F1'
              >
                <g>
                  <rect fill='none' height={32} width={32} />
                </g>
                <g>
                  <g />
                  <g>
                    <path d='M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z' />
                    <g>
                      <path d='M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z' />
                      <path d='M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z' />
                      <path d='M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z' />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className='text-gray-800 dark:text-white text-2xl font-semibold text-center'>
              <h2>Bookkeeping</h2>
            </div>
            <div className='text-gray-600 dark:text-gray-300 mt-2 text-lg text-center'>
              <p>
                Keeping track of your accounts doesn't have to be a burden. Let
                us neatly organize your books each month and optimize them to
                focus on your bottom line.
              </p>
            </div>
          </div>
          <div className='cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col'>
            <div className='mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height={32}
                viewBox='0 0 24 24'
                width={32}
                fill='#6366F1'
              >
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z' />
              </svg>
            </div>
            <div className='text-gray-800 dark:text-white text-2xl font-semibold text-center'>
              <h2>Accounting</h2>
            </div>
            <div className='text-gray-600 dark:text-gray-300 mt-2 text-lg text-center'>
              <p>
                Taxes laws can be confusing and overwhelming, and they're always
                changing. We stay on top of these changes and update you along
                the way.
              </p>
            </div>
          </div>
          <div className='cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col'>
            <div className='mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                enableBackground='new 0 0 24 24'
                height={32}
                viewBox='0 0 24 24'
                width={32}
                fill='#6366F1'
              >
                <g>
                  <path d='M0,0h24v24H0V0z' fill='none' />
                </g>
                <g>
                  <path d='M7,9H2V7h5V9z M7,12H2v2h5V12z M20.59,19l-3.83-3.83C15.96,15.69,15.02,16,14,16c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5 c0,1.02-0.31,1.96-0.83,2.75L22,17.59L20.59,19z M17,11c0-1.65-1.35-3-3-3s-3,1.35-3,3s1.35,3,3,3S17,12.65,17,11z M2,19h10v-2H2 V19z' />
                </g>
              </svg>
            </div>
            <div className='text-gray-800 dark:text-white text-2xl font-semibold text-center'>
              <h2>Business Analysis</h2>
            </div>
            <div className='text-gray-600 dark:text-gray-300 mt-2 text-lg text-center'>
              <p>
                It can be difficult to figure out exactly what's not working
                sometimes! Let our analysts show you what they can do to
                effectively optimize your business strategy.
              </p>
            </div>
          </div>
          <div className='cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col'>
            <div className='mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                enableBackground='new 0 0 24 24'
                height={32}
                viewBox='0 0 24 24'
                width={32}
                fill='#6366F1'
              >
                <g>
                  <rect fill='none' height={32} width={32} x='0' />
                </g>
                <g>
                  <g>
                    <g>
                      <path d='M20,7h-4V5c0-0.55-0.22-1.05-0.59-1.41C15.05,3.22,14.55,3,14,3h-4C8.9,3,8,3.9,8,5v2H4C2.9,7,2,7.9,2,9v11 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9C22,7.9,21.1,7,20,7z M10,5h4v2h-4V5z M11,18.5l-1-1l3-3l-3-3l1-1l4,4L11,18.5z' />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className='text-gray-800 dark:text-white text-2xl font-semibold text-center'>
              <h2>Business Planning</h2>
            </div>
            <div className='text-gray-600 dark:text-gray-300 mt-2 text-lg text-center'>
              <p>
                The solutions we provide can be off-the-shelf or custom made
                tools to help you manage the most complicated parts of running
                your unique business.
              </p>
            </div>
          </div>
          <div className='cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col'>
            <div className='mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                enableBackground='new 0 0 24 24'
                height={32}
                viewBox='0 0 24 24'
                width={32}
                fill='#6366F1'
              >
                <g>
                  <path d='M0,0h24v24H0V0z' fill='none' />
                </g>
                <g>
                  <g>
                    <circle cx='10' cy='8' r='4' />
                    <path d='M10.67,13.02C10.45,13.01,10.23,13,10,13c-2.42,0-4.68,0.67-6.61,1.82C2.51,15.34,2,16.32,2,17.35V20h9.26 C10.47,18.87,10,17.49,10,16C10,14.93,10.25,13.93,10.67,13.02z' />
                    <path d='M20.75,16c0-0.22-0.03-0.42-0.06-0.63l1.14-1.01l-1-1.73l-1.45,0.49c-0.32-0.27-0.68-0.48-1.08-0.63L18,11h-2l-0.3,1.49 c-0.4,0.15-0.76,0.36-1.08,0.63l-1.45-0.49l-1,1.73l1.14,1.01c-0.03,0.21-0.06,0.41-0.06,0.63s0.03,0.42,0.06,0.63l-1.14,1.01 l1,1.73l1.45-0.49c0.32,0.27,0.68,0.48,1.08,0.63L16,21h2l0.3-1.49c0.4-0.15,0.76-0.36,1.08-0.63l1.45,0.49l1-1.73l-1.14-1.01 C20.72,16.42,20.75,16.22,20.75,16z M17,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S18.1,18,17,18z' />
                  </g>
                </g>
              </svg>
            </div>
            <div className='text-gray-800 dark:text-white text-2xl font-semibold text-center'>
              <h2>Business Management</h2>
            </div>
            <div className='text-gray-600 dark:text-gray-300 mt-2 text-lg text-center'>
              <p>
                Things can get tedious and it can be hard to scale. Let us
                manage your business for you, so you can work <i>on</i> your
                business, not <i>in</i> your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
