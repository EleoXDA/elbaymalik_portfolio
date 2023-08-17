'use client'

import { useState } from 'react'
import Confetti from 'react-confetti'

export const ContactForm = ({ closeModal }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const res = await fetch('api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
      if (res.status === 200) {
        setSubmitted(true)
      }
    } catch (err) {
      console.error('Err', err)
    }
  }

  return isSubmitted ? (
    <div>
      <h1
        className="text-center font-semibold text-3xl
      "
      >
        Thank you for your message!
      </h1>
      <Confetti />
    </div>
  ) : (
    <div className="relative min-w-[50vw] sm:min-w-[40vw] flex justify-between items-center flex-col py-32 bg-light/80 dark:bg-dark/80 rounded-lg backdrop-blur-md">
    {/* Close button */}
    <button 
      onClick={closeModal}
      className="absolute top-0 right-0 m-4 px-2.5 py-1 border-solid border-2 border-dark/40 text-dark/40 rounded-lg dark:text-light/40 dark:border-light/40 hover:border-dark hover:text-dark dark:hover:text-light dark:hover:border-light transition-all duration-300 ease-in-out"

    >
      X
    </button>
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <div className="">
          <label className="label font-semibold">
            <span className="label-text">Full Name</span>
          </label>
          <input
            className="input w-full input-bordered input-primary rounded-lg p-2"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrorMessage('');
            }}
            type="text"
            placeholder="Your name"
            
          />
        </div>
        <div>
          <label className="label font-semibold">
            <span className="label-text">Email</span>
          </label>
          <input
            className="input w-full input-bordered input-primary rounded-lg p-2"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorMessage('');
            }}            type="email"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label className="label font-semibold">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea w-full textarea-primary rounded-lg p-2"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setErrorMessage('');
            }}          
          ></textarea>
        </div>
        {
          errorMessage && (
            <div className="text-red-500 mb-4">
              {errorMessage}
            </div>
          )
        }
        <button className="btn btn-primary px-2.5 py-1 border-solid border-2 border-dark/40 text-dark/40 rounded-lg dark:text-light/40 dark:border-light/40 hover:border-dark hover:text-dark dark:hover:text-light dark:hover:border-light transition-all duration-300 ease-in-out" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}