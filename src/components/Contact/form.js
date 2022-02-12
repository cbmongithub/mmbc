import { useState } from 'react'
import * as emailjs from 'emailjs-com'

const Form = () => {
  const [formData, setFormdata] = useState({
    email: '',
    name: '',
    companyName: '',
    country: '',
    message: '',
    loading: false,
    show: false,
    alertmessage: '',
    variant: '',
  })

  const variants = {
    success: 'bg-indigo-100 border-indigo-500 text-indigo-700',
    error: 'bg-red-100 border-red-500 text-red-700',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormdata({ loading: true })
    console.log(e)

    const templateParams = {
      from_email: formData.email, // Users email
      user_name: formData.name, // Users name
      company_name: formData.companyName, // Users company name
      country: formData.country, // Users country
      to_name: process.env.REACT_APP_EMAIL_TO, // To admin
      message: formData.message, // Users message
    }

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        console.log(result)
        setFormdata({
          loading: false,
          alertmessage: 'Thanks for your message! Will respond asap.',
          alerttitle: 'Message sent!',
          failed: false,
          message: '',
          variant: variants.success,
          show: true,
        })
      })
      .catch((error) => {
        console.log(error.text)
        setFormdata({
          loading: false,
          alertmessage: `Failed to send!, ${error.text}`,
          alerttitle: 'Failed to send',
          failed: true,
          variant: variants.error,
          show: true,
        })
      })
  }

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    })
    console.log(e.target.name, e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      {formData.show ? (
        <div
          className={`${
            !formData.failed ? variants.success : variants.error
          } border-t border-b  px-4 py-3`}
          role='alert'
        >
          <p className='font-bold'>{formData.alerttitle}</p>
          <p className='text-sm'>{formData.alertmessage}</p>
        </div>
      ) : (
        ''
      )}
      <div className='md:flex items-center mt-12'>
        <div className='md:w-72 flex flex-col'>
          <label
            htmlFor='name'
            className='text-base font-semibold leading-none text-gray-800'
          >
            Name*
          </label>
          <input
            tabIndex={0}
            arial-label='Please input name'
            type='text'
            className='text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
            placeholder='Please input  name'
            name='name'
            value={formData.name || ''}
            required
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
        <div className='md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4'>
          <label
            htmlFor='email'
            className='text-base font-semibold leading-none text-gray-800'
          >
            Email Address*
          </label>
          <input
            tabIndex={0}
            arial-label='Please input email address'
            type='email'
            className='text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
            name='email'
            value={formData.email || ''}
            required
            autoComplete='off'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='md:flex items-center mt-8'>
        <div className='md:w-72 flex flex-col'>
          <label
            htmlFor='companyName'
            className='text-base font-semibold leading-none text-gray-800'
          >
            Company name*
          </label>
          <input
            tabIndex={0}
            arial-label='Please input company name'
            type='text'
            className='text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 '
            name='companyName'
            value={formData.companyName || ''}
            required
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
        <div className='md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4'>
          <label
            htmlFor='country'
            className='text-base font-semibold leading-none text-gray-800'
          >
            Country*
          </label>
          <input
            tabIndex={0}
            arial-label='Please input country name'
            type='text'
            className='text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
            placeholder='Please input country name'
            name='country'
            value={formData.country || ''}
            required
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
      </div>
      <div>
        <div className='w-full flex flex-col mt-8'>
          <label
            htmlFor='message'
            className='text-base font-semibold leading-none text-gray-800'
          >
            Message*
          </label>
          <textarea
            tabIndex={0}
            aria-label='leave a message'
            type='text'
            className='h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none'
            name='message'
            placeholder='Write message...'
            rows='5'
            value={formData.message}
            autoComplete='off'
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='flex items-center justify-center w-full'>
        <button
          type='submit'
          className='mt-9 text-base inline-flex items-center font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none'
        >
          {formData.loading ? (
            <>
              <svg
                className='animate-spin ml-3 h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
              SENDING...
            </>
          ) : (
            'SUBMIT'
          )}
        </button>
      </div>
    </form>
  )
}

export default Form
