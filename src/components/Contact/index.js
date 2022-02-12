import Form from './form'

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
        <Form />
      </div>
    </section>
  )
}
