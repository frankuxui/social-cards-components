import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App () {
  const buttonThemenRef = useRef(null)
  const [theme, setTheme] = useState(false)

  const handleToggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setTheme(!theme)
  }
  useEffect(() => {
    buttonThemenRef.current.addEventListener('click', handleToggleTheme)
    return () => {
      buttonThemenRef.current.removeEventListener('click', handleToggleTheme)
    }
  }
  , [theme])

  return (
    <div className='App pt-16 pb-16 mx-5 '>

      <div className='flex justify-center m-auto mb-3'>
        <button ref={buttonThemenRef} className='rounded-full w-16 h-16 bg-slate-300 text-3xl dark:bg-slate-800'>
          {theme ? '🌞' : '🌙'}
        </button>
      </div>

      <div className='flex justify-center flex-col m-auto mb-16 text-center text-lg dark:text-slate-200'>
        <p className='font-bold mb-1'>Built by <a href='https://allmylinks.com/frankuxui' className='underline dark:text-white'>Frank Esteban</a></p>
        <p>Contact me on the different platforms and social networks</p>
        <div className='flex items-center justify-center space-x-2 mt-4 flex-wrap'>
          <a href='https://www.linkedin.com/in/frankuxui/' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='4.983' cy='5.009' r='2.188' fill='currentColor' />
              <path d='M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://www.figma.com/@frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z' fill='currentColor' />
              <circle cx='15.332' cy='12' r='3.332' />
            </svg>
          </a>
          <a href='https://dribbble.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://codesandbox.io/u/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://codepen.io/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M21.838 8.445c0-.001-.001-.001 0 0l-.003-.004-.001-.001v-.001a.809.809 0 0 0-.235-.228l-9.164-6.08a.834.834 0 0 0-.898 0L2.371 8.214A.786.786 0 0 0 2 8.897v6.16a.789.789 0 0 0 .131.448v.001l.002.002.01.015v.002h.001l.001.001.001.001c.063.088.14.16.226.215l9.165 6.082a.787.787 0 0 0 .448.139.784.784 0 0 0 .45-.139l9.165-6.082a.794.794 0 0 0 .371-.685v-6.16a.793.793 0 0 0-.133-.452zm-9.057-4.172 6.953 4.613-3.183 2.112-3.771-2.536V4.273zm-1.592 0v4.189l-3.771 2.536-3.181-2.111 6.952-4.614zm-7.595 6.098 2.395 1.59-2.395 1.611v-3.201zm7.595 9.311-6.96-4.617 3.195-2.15 3.765 2.498v4.269zm.795-5.653-3.128-2.078 3.128-2.105 3.131 2.105-3.131 2.078zm.797 5.653v-4.27l3.766-2.498 3.193 2.15-6.959 4.618zm7.597-6.11-2.396-1.611 2.396-1.59v3.201z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://tailwindcomponents.com/u/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://github.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://www.instagram.com/frankuxui/' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://dev.to/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='30' height='30' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.73 11.93C7.73 13.65 7.71 13.76 7.5 14C7.31 14.17 7.12 14.23 6.74 14.23L6.23 14.24L6.2 11.97L6.18 9.7H6.7C7.05 9.7 7.3 9.77 7.47 9.91C7.71 10.12 7.73 10.16 7.73 11.93M22 7.5V16.5C22 17.61 21.11 18.5 20 18.5H4C2.89 18.5 2 17.61 2 16.5V7.5C2 6.39 2.89 5.5 4 5.5H20C21.11 5.5 22 6.39 22 7.5M8.93 11.73C8.9 9.89 8.88 9.74 8.64 9.34C8.24 8.66 7.79 8.5 6.28 8.5H5V15.5H6.21C7.54 15.5 8.1 15.33 8.5 14.79C8.91 14.26 9 13.81 8.93 11.73M13.12 8.5H11.64C10.15 8.5 10.14 8.5 9.93 8.78S9.7 9.21 9.7 12V14.96L9.97 15.23C10.22 15.5 10.28 15.5 11.68 15.5H13.12V14.31L12.03 14.27L10.93 14.24V12.6L11.61 12.57L12.27 12.53V11.34H10.88V9.7H13.12V8.5M19 8.56C19 8.5 18.7 8.5 18.34 8.5L17.66 8.56L17.07 10.91C16.69 12.39 16.45 13.18 16.4 13.04C16.32 12.77 15.26 8.6 15.26 8.55C15.26 8.5 14.95 8.5 14.58 8.5H13.89L14.3 10.05C14.5 10.92 14.89 12.33 15.11 13.2C15.45 14.55 15.57 14.85 15.86 15.14C16.06 15.36 16.31 15.5 16.47 15.5C16.8 15.5 17.23 15.16 17.37 14.77C17.5 14.5 19 8.69 19 8.56Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://twitter.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' fill='currentColor' />
            </svg>
          </a>
        </div>
      </div>

      {/** container cards */}
      <div className='box-border m-auto max-w-[75rem] 3xl:max-w-[105rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-4 3xl:columns-4'>

        {/** Card */}
        <article className='mb-4 break-inside p-6 rounded-xl flex flex-col text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex pb-6 items-start justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/men/35.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div>
                  <a className='inline-block text-lg font-bold' href='#'>Wade Warren</a>
                </div>
                <div className='text-slate-500 dark:text-slate-400'> September 22, 2018 </div>
              </div>
            </div>
            <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
              <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <h2 className='text-2xl font-extrabold'> Multiple web Design templates Selection </h2>
          <div className='py-4'>
            <div className='flex justify-between gap-1 mb-1'>
              <a className='flex' href='#'>
                <img
                  className='max-w-full rounded-tl-lg'
                  src='https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='Imagen'
                />
              </a>
              <a className='flex' href='#'>
                <img
                  className='max-w-full'
                  src='https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='Imagen'
                />
              </a>
              <a className='flex' href='#'>
                <img
                  className='max-w-full rounded-tr-lg'
                  src='https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='Imagen'
                />
              </a>
            </div>
            <div className='flex justify-between gap-1'>
              <a className='flex' href='#'>
                <img
                  className='max-w-full rounded-bl-lg'
                  src='https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='Imagen'
                />
              </a>
              <a className='flex' href='#'>
                <img
                  className='max-w-full rounded-br-lg'
                  src='https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='Imagen'
                />
              </a>
            </div>
          </div>
          <p className='text-sm dark:text-slate-200'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div className='py-4'>
            <a className='inline-flex items-center' href='#'>
              <span className='mr-2'>
                <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                  <path
                    d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                  />
                </svg>
              </span>
              <span className='text-lg font-bold'>34</span>
            </a>
          </div>
          <div className='relative'>
            <input
              className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
              type='text' placeholder='Write a comment'
            />
            <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
              <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                />
              </svg>
              <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
              </svg>
            </span>
          </div>
          <div className='pt-6'>
            <div className='flex pb-4 group'>
              <a className='mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/women/82.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Camila Gomez</a>
                  <span className='text-slate-500 dark:text-slate-300'>08 minutes ago</span>
                </div>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur.</p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>12</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='flex pb-4 group'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/men/16.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Xavi Jimenez</a>
                  <span className='text-slate-500 dark:text-slate-300'>3 minutes ago</span>
                </div>
                <p className='text-sm'>Dolor sit ameteiusmod consectetur adipiscing elit permiaso olcanc.</p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>0</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <a
                href='#'
                className='py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75'
              >Show
                more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className='mb-4 break-inside p-6 rounded-xl flex flex-col text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex pb-6 items-center justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/women/9.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <a className='inline-block text-lg font-bold mr-2' href='#'>Esther Howard</a>
                  <span>
                    <svg className='fill-blue-500 dark:fill-slate-50 w-5 h-5' viewBox='0 0 24 24'>
                      <path
                        d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                      />
                    </svg>
                  </span>
                </div>
                <div className='text-slate-500 dark:text-slate-300'> January 22, 2021 </div>
              </div>
            </div>
          </div>
          <h2 className='text-2xl font-extrabold'> Multiple web Design templates Selection </h2>
          <div className='py-4'>
            <a className='flex' href='#'>
              <img
                className='max-w-full rounded-lg'
                src='https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='Imagen'
              />
            </a>
          </div>
          <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div className='py-4'>
            <a className='inline-flex items-center' href='#'>
              <span className='mr-2'>
                <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                  <path
                    d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                  />
                </svg>
              </span>
              <span className='text-lg font-bold'>68</span>
            </a>
          </div>
          <div className='relative'>
            <input
              className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
              type='text' placeholder='Write a comment'
            />
            <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
              <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                />
              </svg>
              <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
              </svg>
            </span>
          </div>
          <div className='pt-6'>
            <div className='flex pb-4 group'>
              <a className='mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/men/84.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Felippe Diogo</a>
                  <span className='text-slate-500 dark:text-slate-300'>1 minut ago</span>
                </div>
                <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod 😀😀😀 </p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>2</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='flex pb-4 group'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/women/74.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Jessica</a>
                  <span className='text-slate-500 dark:text-slate-300'>3 minutes ago</span>
                </div>
                <p className='text-sm'>Dolor sit ameteiusmod consectetur adipiscing elit.</p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>2</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <a
                href='#'
                className='py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75'
              >Show
                more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className='flex flex-col bg-clip-border mb-4 break-inside p-6 rounded-xl text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex pb-6 items-center justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/men/33.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <a className='inline-block text-lg font-bold mr-2' href='#'>Leonard Palenko</a>
                </div>
                <div className='text-slate-500 dark:text-slate-300'> Medical Assistant </div>
              </div>
            </div>
          </div>
          <div className='py-4'>
            <div className='flex justify-between gap-1 mb-1'>
              <a className='flex' href='#'>
                <img
                  className='max-w-full rounded-l-lg'
                  src='https://images.pexels.com/photos/2128028/pexels-photo-2128028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='Imagen'
                />
              </a>
              <a className='flex' href='#'>
                <img
                  className='max-w-full rounded-r-lg'
                  src='https://images.pexels.com/photos/6145852/pexels-photo-6145852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='Imagen'
                />
              </a>
            </div>
          </div>
          <h2 className='text-2xl font-extrabold'> Multiple web Design templates Selection </h2>
          <div className='py-4'>
            <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className='py-4'>
            <a className='inline-flex items-center' href='#'>
              <span className='mr-2'>
                <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                  <path
                    d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                  />
                </svg>
              </span>
              <span className='text-lg font-bold'>15</span>
            </a>
          </div>
          <div className='relative'>
            <input
              className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
              type='text' placeholder='Write a comment'
            />
            <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
              <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                />
              </svg>
              <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
              </svg>
            </span>
          </div>
        </article>

        {/** Card */}
        <article className='mb-4 break-inside p-6 rounded-xl text-sm flex flex-col bg-clip-border bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex pb-6 items-center justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/men/9.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <a className='inline-block text-lg font-bold mr-2' href='#'>Eduardo</a>
                  <span className='text-slate-500 dark:text-slate-300'>25 minutes ago</span>
                </div>
                <div className='text-slate-500 dark:text-slate-300'> General Electric </div>
              </div>
            </div>
          </div>
          <h2 className='text-2xl font-extrabold'> Multiple web Design templates Selection </h2>
          <div className='py-4'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className='py-4'>
            <a className='inline-flex items-center' href='#'>
              <span className='mr-2'>
                <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                  <path
                    d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                  />
                </svg>
              </span>
              <span className='text-lg font-bold'>34</span>
            </a>
          </div>
          <div className='relative'>
            <input
              className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
              type='text' placeholder='Write a comment'
            />
            <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
              <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                />
              </svg>
              <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
              </svg>
            </span>
          </div>
          <div className='pt-6'>
            <div className='flex pb-4 group'>
              <a className='mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/men/54.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Shawn</a>
                  <span className='text-slate-500 dark:text-slate-300'>2 days ago</span>
                </div>
                <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod. </p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>2</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='flex pb-4 group'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/women/54.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Dianne Russell</a>
                  <span className='text-slate-500 dark:text-slate-300'>3 minutes ago</span>
                </div>
                <p className='text-sm'> Dolor sit ameteiusmod Dolor sit ameteiusmod 🐸consectetur adipiscing elitconsecte. </p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>2</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <a
                href='#'
                className='py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75'
              >Show
                more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className='mb-4 break-inside p-6 rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex pb-6 items-center justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/women/43.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <a className='inline-block text-lg font-bold mr-2' href='#'>Anna Bernal</a>
                  <span className='text-slate-500 dark:text-slate-300'>Johnson & Johnson</span>
                </div>
                <div className='text-slate-500 dark:text-slate-300'> General Electric </div>
              </div>
            </div>
          </div>
          <div className='my-4 flex gap-1'>
            <div className='flex flex-col gap-1 flex-1'>
              <a className='flex h-2/4' href='#'>
                <img
                  className='w-full h-full rounded-tl-lg object-cover'
                  src='https://images.pexels.com/photos/327331/pexels-photo-327331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='Imagen'
                />
              </a>
              <a className='flex h-2/4' href='#'>
                <img
                  className='w-full rounded-bl-lg object-cover'
                  src='https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='Imagen'
                />
              </a>
            </div>
            <div className='flex flex-col gap-1 flex-1'>
              <a className='flex h-full' href='#'>
                <img
                  className='w-full rounded-tr-lg rounded-br-lg object-cover'
                  src='https://images.pexels.com/photos/247931/pexels-photo-247931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='Imagen'
                />
              </a>
            </div>
          </div>
          <h2 className='text-2xl font-extrabold'> Multiple web Design templates Selection </h2>
          <div className='py-4'>
            <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className='py-4'>
            <a className='inline-flex items-center' href='#'>
              <span className='mr-2'>
                <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                  <path
                    d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                  />
                </svg>
              </span>
              <span className='text-lg font-bold'>34</span>
            </a>
          </div>
          <div className='relative'>
            <input
              className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
              type='text' placeholder='Write a comment'
            />
            <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
              <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                />
              </svg>
              <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
              </svg>
            </span>
          </div>
          <div className='pt-6'>
            <div className='flex pb-4 group'>
              <a className='mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/women/23.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Jerome Bell</a>
                  <span className='text-slate-500 dark:text-slate-300'>2 days ago</span>
                </div>
                <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod. </p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>2</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='flex pb-4 group'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/women/59.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Eleanor Pena</a>
                  <span className='text-slate-500 dark:text-slate-300'>3 minutes ago</span>
                </div>
                <p className='text-sm'> Dolor sit ameteiusmod Dolor sit ameteiusmod 😍😍✌🤪consectetur adipiscing elitconsectetur adipiscing elit. </p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>2</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
                <div className='mt-4'>
                  <div className='flex pb-4'>
                    <a className='mr-4' href='#'>
                      <img className='rounded-full max-w-none w-10 h-10' src='https://randomuser.me/api/portraits/men/23.jpg' alt='Avatar' />
                    </a>
                    <div className='flex-1 relative pr-10'>
                      <button className='absolute right-0 top-0 flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                        <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                        </svg>
                      </button>
                      <div>
                        <a className='inline-block text-base font-bold mr-2' href='#'>Joseph</a>
                        <span className='text-slate-500 dark:text-slate-300'>Just now</span>
                      </div>
                      <p className='text-sm'>Dolor sit ameteiusmod consectetur.</p>
                      <div className='mt-2 flex items-center'>
                        <a className='inline-flex items-center py-2 mr-3' href='#'>
                          <span className='mr-2'>
                            <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                              <path
                                d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                              />
                            </svg>
                          </span>
                          <span className='text-base font-bold'>8</span>
                        </a>
                        <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                          Repply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <a
                href='#'
                className='py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75'
              >Show
                more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className='mb-4 break-inside p-6 rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex pb-6 items-center justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/men/32.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <a className='inline-block text-lg font-bold mr-2' href='#'>Savannah Nguyen</a>
                </div>
                <div className='text-slate-500 dark:text-slate-300'> January 22, 2021 </div>
              </div>
            </div>
          </div>
          <h2 className='text-2xl font-extrabold'> Multiple web Design templates Selection </h2>
          <div className='py-4'>
            <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className='py-4'>
            <a className='inline-flex items-center' href='#'>
              <span className='mr-2'>
                <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                  <path
                    d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                  />
                </svg>
              </span>
              <span className='text-lg font-bold'>15</span>
            </a>
          </div>
          <div className='relative'>
            <input
              className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
              type='text' placeholder='Write a comment'
            />
            <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
              <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                />
              </svg>
              <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
              </svg>
            </span>
          </div>
        </article>

        {/** Card */}
        <article className='mb-4 break-inside rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex p-6 items-center justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/women/47.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <a className='inline-block text-lg font-bold mr-2' href='#'>Annette Black</a>
                  <span className='text-slate-500 dark:text-slate-300'>3 minutes ago</span>
                </div>
                <div className='text-slate-500 dark:text-slate-300'>
                  Medical Assistant
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 bg-violet-500'>
            <h2 className='text-3xl font-extrabold text-white'>
              Multiple web Design templates Selection
            </h2>
          </div>
          <div className='p-6'>
            <div className='flex justify-between items-center'>
              <a className='inline-flex items-center' href='#'>
                <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                  <img className='w-6' src='https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png' />
                </span>
                <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                  <img className='w-6' src='https://cdn.iconscout.com/icon/free/png-256/love-2387666-1991064.png' />
                </span>
                <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                  <img className='w-6' src='https://cdn.iconscout.com/icon/free/png-256/haha-2387660-1991060.png' />
                </span>
                <span className='text-lg font-bold ml-3'>237</span>
              </a>
              <a className='ml-auto' href='#'>23 comentarios</a>
            </div>
            <div className='mt-6 mb-6 h-px bg-slate-200 dark:bg-slate-700' />
            <div className='flex items-center justify-between mb-6'>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'> Me gusta </button>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'> Comentar </button>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'> Compartir </button>
            </div>
            <div className='relative'>
              <input
                className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
                type='text' placeholder='Write a comment'
              />
              <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
                <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                  />
                </svg>
                <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                  <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
                </svg>
              </span>
            </div>
          </div>
        </article>
        {/** End Card */}

        {/** Card */}
        <article className='mb-4 break-inside rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex p-6 items-center justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/women/33.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <a className='inline-block text-lg font-bold mr-2' href='#'>Cameron Williamson</a>
                  <span>
                    <svg className='fill-blue-500 dark:fill-slate-50 w-5 h-5' viewBox='0 0 24 24'>
                      <path
                        d='M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z'
                      />
                    </svg>
                  </span>
                </div>
                <div className='text-slate-500 dark:text-slate-300'> Software Development Manager </div>
              </div>
            </div>
          </div>
          <p className='text-sm pr-6 pl-6 pb-6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div className='p-6 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <h2 className='text-3xl text-white font-extrabold'> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod. </h2>
          </div>
          <div className='p-6'>
            <a className='inline-flex items-center' href='#'>
              <span className='mr-2'>
                <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                  <path
                    d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                  />
                </svg>
              </span>
              <span className='text-lg font-bold'>68</span>
            </a>
          </div>
          <div className='px-6'>
            <div className='relative'>
              <input
                className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
                type='text' placeholder='Write a comment'
              />
              <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
                <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                  />
                </svg>
                <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                  <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
                </svg>
              </span>
            </div>
          </div>
          <div className='p-6'>
            <div className='flex pb-4 group'>
              <a className='mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/women/83.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Kristin Watson</a>
                  <span className='text-slate-500 dark:text-slate-300'>25 minutes ago</span>
                </div>
                <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit seddo </p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>0</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='flex pb-4 group'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/women/74.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Melvin D. Goodman</a>
                  <span className='text-slate-500 dark:text-slate-300'>3 minutes ago</span>
                </div>
                <p className='text-sm'>Dolor sit ameteiusmod consectetur adipiscing elit.</p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>23</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='flex pb-4 group'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/men/7.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Erik Moore</a>
                  <span className='text-slate-500 dark:text-slate-300'>3 minutes ago</span>
                </div>
                <p className='text-sm'>Dolor sit ameteiusmod consectetur adipiscing elit per toni casmus.</p>
                <div className='py-4'>
                  <a className='flex' href='#'>
                    <img
                      className='max-w-full rounded-lg'
                      src='https://images.pexels.com/photos/61381/pexels-photo-61381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                      alt='Imagen'
                    />
                  </a>
                </div>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>23</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <a
                href='#'
                className='py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75'
              >Show
                more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className='mb-4 break-inside rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex p-6 items-center justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/women/67.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <a className='inline-block text-lg font-bold mr-2' href='#'>Marylin Betancourt</a>
                  <span className='text-slate-500 dark:text-slate-300'>3 minutes ago</span>
                </div>
                <div className='text-sm text-slate-500 dark:text-slate-300'>
                  Marketing Coordinator
                </div>
              </div>
            </div>
          </div>
          <p className='text-sm pr-6 pl-6 pb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmodelit sed do eiusmodelit sed do eiusmodelit
            <a href='#' className='font-medium text-blue-700 dark:text-blue-500'> #ui </a>
            <a href='#' className='font-medium text-blue-700 dark:text-blue-500'> #uxui </a>
            <a href='#' className='font-medium text-blue-700 dark:text-blue-500'> #userinterface </a>
            <a href='#' className='font-medium text-blue-700 dark:text-blue-500'> #webdeveloper </a>
            <a href='#' className='font-medium text-blue-700 dark:text-blue-500'> #card </a>
          </p>
          <div className='p-6 bg-yellow-500'>
            <h2 className='text-3xl font-extrabold text-black'> Multiple web Design templates Selection </h2>
          </div>
          <div className='p-6'>
            <div className='flex justify-between items-center'>
              <a className='inline-flex items-center' href='#'>
                <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                  <img className='w-6' src='https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png' />
                </span>
                <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                  <img className='w-6' src='https://cdn.iconscout.com/icon/free/png-256/angry-2387661-1991061.png' />
                </span>
                <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                  <img className='w-6' src='https://cdn.iconscout.com/icon/free/png-256/wow-2387663-1991062.png' />
                </span>
                <span className='text-lg font-bold ml-3'>237</span>
              </a>
              <a className='ml-auto' href='#'>23 comentarios</a>
            </div>
            <div className='mt-6 mb-6 h-px bg-slate-200 dark:bg-slate-700' />
            <div className='flex items-center justify-between mb-6'>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                Me gusta
              </button>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                Comentar
              </button>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                Compartir
              </button>
            </div>
            <div className='relative'>
              <input
                className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
                type='text' placeholder='Write a comment'
              />
              <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
                <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                  />
                </svg>
                <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                  <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
                </svg>
              </span>
            </div>
          </div>
        </article>
        {/** End Card */}

        {/** Card */}
        <article className='mb-4 break-inside p-6 rounded-xl flex flex-col text-sm group bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex pb-6 items-center justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/men/39.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <a className='inline-block text-lg font-bold mr-2' href='#'>Alexander Mitrovic</a>
                  <span>
                    <svg className='fill-blue-500 dark:fill-slate-50 w-5 h-5' viewBox='0 0 24 24'>
                      <path
                        d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                      />
                    </svg>
                  </span>
                </div>
                <div className='text-slate-500 dark:text-slate-300'> January 22, 2021 </div>
              </div>
            </div>
          </div>
          <h2 className='text-2xl font-extrabold'> Multiple web Design templates Selection </h2>
          <div className='my-4 relative overflow-hidden rounded-xl flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/313791/pexels-photo-313791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Imagen' />
            <div className='absolute top-0 left-0 w-full h-full'>
              <div className='flex justify-between h-full flex-col'>
                <div className='flex justify-end space-x-2 p-6 bg-gradient-to-t from-[#00000000] to-[#000000]'>
                  <button className='flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black'>
                    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z' fill='currentColor' />
                    </svg>
                  </button>
                  <button className='flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black'>
                    <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z' fill='currentColor' />
                    </svg>
                  </button>
                </div>
                <div className='p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
                  <div className='flex items-center flex-row justify-between'>
                    <div className='flex items-center space-x-4'>
                      <img className='flex-none w-10 h-10 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/35.jpg' alt='avatar' />
                      <div className='flex-auto'>
                        <a href='#' className='no-underline font-bold block'>
                          Frank Esteban
                        </a>
                      </div>
                    </div>
                    <button className='flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black'>
                      <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z' fill='currentColor' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div className='py-4'>
            <a className='inline-flex items-center' href='#'>
              <span className='mr-2'>
                <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                  <path
                    d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                  />
                </svg>
              </span>
              <span className='text-lg font-bold'>68</span>
            </a>
          </div>
          <div className='relative'>
            <input
              className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
              type='text' placeholder='Write a comment'
            />
            <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
              <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                />
              </svg>
              <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
              </svg>
            </span>
          </div>
          <div className='pt-6'>
            <div className='flex pb-4 group'>
              <a className='mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/men/83.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Ronald Richards</a>
                  <span className='text-slate-500 dark:text-slate-300'>25 minutes ago</span>
                </div>
                <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod 😀😀😀 </p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>2</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='flex pb-4 group'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/women/74.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Natalia Jímenez</a>
                  <span className='text-slate-500 dark:text-slate-300'>3 minutes ago</span>
                </div>
                <p className='text-sm'>Dolor sit ameteiusmod consectetur adipiscing elit.</p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>2</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <a
                href='#'
                className='py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75'
              >Show
                more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className='mb-4 pb-6 break-inside rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex p-6 items-center justify-between border-b border-b-slate-200 dark:border-b-slate-700'>
            <div className='flex items-center'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-10 h-10' src='https://randomuser.me/api/portraits/men/67.jpg' alt='Avatar' />
              </a>
              <div className='flex items-center text-base'>
                <a className='inline-block font-bold mr-2' href='#'>Frank Smichel</a>
                <div className='flex items-center space-x-1'>
                  <span>shared publication</span>
                  <span>
                    <svg width='20'height='20' viewBox="0 0 24 24">
                      <path fill="currentColor" d="M13 9.8V10.7L11.3 10.9C8.7 11.3 6.8 12.3 5.4 13.6C7.1 13.1 8.9 12.8 11 12.8H13V14.1L15.2 12L13 9.8M11 5L18 12L11 19V14.9C6 14.9 2.5 16.5 0 20C1 15 4 10 11 9M17 8V5L24 12L17 19V16L21 12" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 space-y-6'>
            <div className='rounded-xl border border-slate-200 dark:border-slate-700'>
              <div className='flex p-6 items-center justify-between'>
                <div className='flex'>
                  <a className='inline-block mr-4' href='#'>
                    <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/women/68.jpg' alt='Avatar' />
                  </a>
                  <div className='flex flex-col'>
                    <div className='flex items-center'>
                      <a className='inline-block text-lg font-bold mr-2' href='#'>Paula Lopez</a>
                    </div>
                    <div className='text-sm text-slate-500 dark:text-slate-300'>
                      Marketing Coordinator
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-sm pr-6 pl-6 pb-6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmodelit sed do eiusmodelit sed do eiusmodelit </p>
              <a href='/'>
                <img src='https://images.pexels.com/photos/78793/automotive-defect-broken-car-wreck-78793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='max-w-full object-cover' alt='Imagen' />
              </a>
              <p className='flex items-start p-4 space-x-2 text-slate-400 dark:text-slate-500'>
                <svg width='16' height='16' viewBox="0 0 24 24" className='flex-none'>
                  <path fill="currentColor" d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                </svg>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmodelit</span>
              </p>
            </div>
          </div>
          <div className='px-6'>
            <div className='flex justify-between items-center'>
              <a className='inline-flex items-center' href='#'>
                <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                  <img className='w-5' src='https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png' />
                </span>
                <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                  <img className='w-5' src='https://cdn.iconscout.com/icon/free/png-256/wow-2387663-1991062.png' />
                </span>
                <span className='text-base font-bold ml-3'>171</span>
              </a>
              <a className='ml-auto' href='#'>44 comentarios</a>
            </div>
            <div className='mt-6 mb-6 h-px bg-slate-200 dark:bg-slate-700' />
            <div className='flex items-center justify-between mb-6'>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                Me gusta
              </button>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                Comentar
              </button>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                Compartir
              </button>
            </div>
            <div className='relative'>
              <input
                className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
                type='text' placeholder='Write a comment'
              />
              <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
                <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                  />
                </svg>
                <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                  <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
                </svg>
              </span>
            </div>
          </div>
        </article>
        {/** End Card */}

        {/** Card */}
        <article className='mb-4 break-inside p-6 rounded-xl flex flex-col text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex pb-6 items-start justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/men/32.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div>
                  <a className='inline-block text-lg font-bold' href='#'>Thomas Frank</a>
                </div>
                <div className='flex items-center text-slate-500 dark:text-slate-400 space-x-2'>
                  <span>September 22, 2018 </span>
                  <div className='flex items-center space-x-1'>
                    <span>
                      <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' fill='currentColor' />
                      </svg>
                    </span>
                    <span className='mt-1'>03:15 </span>
                  </div>
                </div>
              </div>
            </div>
            <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <h2 className='text-2xl font-extrabold'>
            Multiple Multiple web Design templates Selection
          </h2>
          <div className='relative overflow-hidden rounded-xl my-4 flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/13007364/pexels-photo-13007364.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Imagen' className='object-cover w-full h-[20rem]' />
            <div className='absolute bottom-0 left-0 w-full p-6 bg-[#000000a8]'>
              <div className='flex items-center flex-row justify-between'>
                <div className='flex flex-col mr-auto'>
                  <span>Artist</span>
                  <a href='https://www.pexels.com/es-es/@anna-panchenko-212558913/' className='font-medium text-xl'>Anna Panchenko</a>
                </div>
              </div>
            </div>
          </div>
          <p className='text-sm dark:text-slate-200'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div className='flex justify-between items-center py-6'>
            <a className='inline-flex items-center' href='#'>
              <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 16 16' fill='none'>
                  <path fill='url(#a)' d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z' />
                  <path fill='#fff' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z' />
                  <defs>
                    <linearGradient id='a' x1='8' x2='8' y2='16' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#18AFFF' />
                      <stop offset='1' stopColor='#0062DF' />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 16 16' fill='none'>
                  <path fill='url(#b)' d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z' />
                  <path fill='#fff' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41Z' />
                  <defs>
                    <linearGradient id='b' x1='8' x2='8' y2='16' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#FF6680' />
                      <stop offset='1' stopColor='#E61739' />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 16 16' fill='none'>
                  <path fill='url(#aa)' d='M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8' />
                  <path fill='url(#bb)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z' />
                  <path fill='url(#cc)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z' />
                  <path fill='#2A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z' />
                  <defs>
                    <linearGradient id='aa' x1='8' x2='8' y1='1.64' y2='16' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#FEEA70' />
                      <stop offset='1' stopColor='#F69B30' />
                    </linearGradient>
                    <linearGradient id='bb' x1='8' x2='8' y1='7' y2='14' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#472315' />
                      <stop offset='1' stopColor='#8B3A0E' />
                    </linearGradient>
                    <linearGradient id='cc' x1='8.005' x2='8.005' y1='11' y2='13.457' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#FC607C' />
                      <stop offset='1' stopColor='#D91F3A' />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className='font-bold ml-3'>162</span>
            </a>
            <a className='ml-auto' href='#'>18 comments</a>
          </div>
          <div className='relative'>
            <input
              className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
              type='text' placeholder='Write a comment'
            />
            <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
              <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                />
              </svg>
              <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
              </svg>
            </span>
          </div>
          <div className='pt-6'>
            <div className='flex pb-4 group'>
              <a className='mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/men/82.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Leslie Alexander</a>
                  <span className='text-slate-500 dark:text-slate-300'>25 minutes ago</span>
                </div>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur.</p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>12</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='flex pb-4 group'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-11 h-11' src='https://randomuser.me/api/portraits/women/76.jpg' alt='Avatar' />
              </a>
              <div className='flex-1 relative pr-10'>
                <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                  </svg>
                </button>
                <div>
                  <a className='inline-block text-base font-bold mr-2' href='#'>Tina Mills</a>
                  <span className='text-slate-500 dark:text-slate-300'>3 minutes ago</span>
                </div>
                <p className='text-sm'>Dolor sit ameteiusmod consectetur adipiscing elit permiaso olcanc.</p>
                <div className='mt-2 flex items-center'>
                  <a className='inline-flex items-center py-2 mr-3' href='#'>
                    <span className='mr-2'>
                      <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                        <path
                          d='M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z'
                        />
                      </svg>
                    </span>
                    <span className='text-base font-bold'>0</span>
                  </a>
                  <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <a
                href='#'
                className='py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75'
              >Show
                more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className='mb-4 break-inside rounded-xl flex flex-col bg-clip-border text-sm py-6 space-y-6 bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex px-6 items-center justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/women/13.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <a className='inline-block text-lg font-bold mr-2' href='#'>Esthel Maria</a>
                  <span className='text-slate-500 dark:text-slate-300'>2 weeks ago</span>
                </div>
                <div className='text-sm text-slate-500 dark:text-slate-300'> Photography expert </div>
              </div>
            </div>
          </div>
          <div className='px-6 space-y-4'>
            <h4 className='mb-2 text-2xl font-extrabold leading-snug'>International exhibition of free photography</h4>
            <span className='text-slate-500 dark:text-slate-400'>September 23, 2021</span>
            <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod.</p>
            <div className='flex flex-row space-x-1'>
              <span className='px-2 text-sm py-1 rounded-md bg-green-600 text-white'>Photography</span>
              <span className='px-2 text-sm py-1 rounded-md bg-green-600 text-white'>Art</span>
              <span className='px-2 text-sm py-1 rounded-md bg-green-600 text-white'>Colors</span>
            </div>
          </div>
          <div className='flex flex-col justify-between space-y-1 text-white'>
            <div className='flex space-x-1'>
              <div className='flex-1 relative'>
                <div className='absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
                  <div className='flex items-center flex-row justify-between'>
                    <div className='mr-auto'>
                      <h3 className='text-lg font-medium'>Card overlay caption</h3>
                      <p>Alternative caption</p>
                    </div>
                    <button className='flex items-center justify-center hover:bg-[#ffffff27] rounded-full p-2 transition-all'>
                      <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                      </svg>
                    </button>
                  </div>
                </div>
                <img src='https://images.pexels.com/photos/1289669/pexels-photo-1289669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full h-full' alt='Imagen' />
              </div>
            </div>
            <div className='flex space-x-1'>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1206967/pexels-photo-1206967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full h-full' alt='Imagen' />
              </a>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1309102/pexels-photo-1309102.jpeg?cs=srgb&dl=pexels-steve-johnson-1309102.jpg&fm=jpg' className='object-cover w-full h-full' alt='Imagen' />
              </a>
            </div>
          </div>
          <div className='px-6'>
            <div className='flex justify-between items-center'>
              <a className='inline-flex items-center' href='#'>
                <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                  <img className='w-6' src='https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png' />
                </span>
                <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                  <img className='w-6' src='https://cdn.iconscout.com/icon/free/png-256/angry-2387661-1991061.png' />
                </span>
                <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                  <img className='w-6' src='https://cdn.iconscout.com/icon/free/png-256/wow-2387663-1991062.png' />
                </span>
                <span className='text-lg font-bold ml-3'>237</span>
              </a>
              <a className='ml-auto' href='#'>23 comentarios</a>
            </div>
            <div className='mt-6 mb-6 h-px bg-slate-200 dark:bg-slate-700' />
            <div className='flex items-center justify-between mb-6'>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                Me gusta
              </button>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                Comentar
              </button>
              <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                Compartir
              </button>
            </div>
            <div className='relative'>
              <input
                className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
                type='text' placeholder='Write a comment'
              />
              <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
                <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                  />
                </svg>
                <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                  <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
                </svg>
              </span>
            </div>
          </div>
        </article>
        {/** End Card */}

        {/** Card */}
        <article className='mb-4 break-inside rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='p-6 flex items-center justify-between'>
            <a className='inline-block mr-4' href='#'>
              <img className='rounded-full max-w-none w-16 h-16' src='https://randomuser.me/api/portraits/women/44.jpg' alt='Avatar' />
            </a>
            <svg width='26' height='26' viewBox="0 0 24 24">
              <path fill="currentColor" d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z" />
            </svg>
            <a className='inline-block mr-4' href='#'>
              <img className='rounded-full max-w-none w-16 h-16' src='https://randomuser.me/api/portraits/men/47.jpg' alt='Avatar' />
            </a>
          </div>
        </article>
        {/** End Card */}

        {/** card */}
        <article className='break-inside relative flex flex-col justify-between overflow-hidden rounded-xl mb-4 bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='relative flex flex-col justify-between text-white bg-black min-h-[10rem]'>
            <img src='https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Imagen' />
            <div className='absolute top-0 p-6'>
              <span className='bg-[#00ff3e] px-3 py-1 rounded-md text-sm font-bold text-black'>NEWS</span>
            </div>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex flex-col space-y-2'>
              <h2 className='text-2xl font-bold'>News</h2>
              <p>16 January 2017</p>
            </div>
            <p>Lorem ipsum dolor sit amt amet de consectetet, consectetur 😋 🤪 😬 adipiscing elit, sed do eiusmod.</p>
            <div className='relative'>
              <input
                className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
                type='text' placeholder='Write a comment'
              />
              <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
                <svg className='mr-2' width='22' height='22' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                  />
                </svg>
                <svg className='fill-blue-500 dark:fill-slate-50' width='22' height='22' viewBox='0 0 24 24'>
                  <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
                </svg>
              </span>
            </div>
            <div className='pt-6'>
              <div className='flex pb-4 group'>
                <a className='mr-4' href='#'>
                  <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/men/10.jpg' alt='Avatar' />
                </a>
                <div className='flex-1 relative pr-10'>
                  <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                    <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                    </svg>
                  </button>
                  <div>
                    <a className='inline-block text-base font-bold mr-2' href='#'>Jhon Fernandez</a>
                    <span className='text-slate-500 dark:text-slate-300'>04 minutes ago</span>
                  </div>
                  <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit sed 😨😩😰 </p>
                  <div className='mt-2 flex items-center'>
                    <a className='inline-flex items-center py-2 mr-3' href='#'>
                      <span className='mr-2'>
                        <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                          <path
                            d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                          />
                        </svg>
                      </span>
                      <span className='text-base font-bold'>2</span>
                    </a>
                    <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                      Repply
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex pb-4 group'>
                <a className='inline-block mr-4' href='#'>
                  <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/women/75.jpg' alt='Avatar' />
                </a>
                <div className='flex-1 relative pr-10'>
                  <button className='hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
                    <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                    </svg>
                  </button>
                  <div>
                    <a className='inline-block text-base font-bold mr-2' href='#'>Alexandra</a>
                    <span className='text-slate-500 dark:text-slate-300'>18 minutes ago</span>
                  </div>
                  <p className='text-sm'>Dolor sit ameteiusmod consectetur adipiscing elit.</p>
                  <div className='mt-2 flex items-center'>
                    <a className='inline-flex items-center py-2 mr-3' href='#'>
                      <span className='mr-2'>
                        <svg className='fill-rose-600 dark:fill-rose-400' width='20' height='20' viewBox='0 0 24 24'>
                          <path
                            d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                          />
                        </svg>
                      </span>
                      <span className='text-base font-bold'>2</span>
                    </a>
                    <button className='py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md'>
                      Repply
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <a
                  href='#'
                  className='py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75'
                >Show
                  more comments
                </a>
              </div>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className='mb-4 py-6 space-y-6 break-inside rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex px-6 items-center justify-between'>
            <div className='flex'>
              <a className='inline-block mr-4' href='#'>
                <img className='rounded-full max-w-none w-12 h-12' src='https://randomuser.me/api/portraits/women/12.jpg' alt='Avatar' />
              </a>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <a className='inline-block text-lg font-bold mr-2' href='#'>Alicia Gasperinni</a>
                  <span className=''>
                    <svg width='20' height='20' viewBox='0 0 24 24'>
                      <path fill='currentColor' d='M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8L8.11 7.06L5 5.5L12 2L19 5.5V10.5H18V6L15.89 7.06L16 8M12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z' />
                    </svg>
                  </span>
                </div>
                <div className='text-slate-500 dark:text-slate-300'>
                  Medical Assistant
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img src='https://images.pexels.com/photos/840284/pexels-photo-840284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full object-cover min-h-[22rem]' alt='Image' />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between text-white bg-[#50877ba7]'>
              <div className='p-6 space-y-3'>
                <h1 className='text-5xl font-extrabold leading-snug text-white'>
                  Best photo
                  <br />
                  package
                </h1>
              </div>
              <div className='p-6 bg-gradient-to-t flex items-center justify-between from-[#000000b6] to-[#0000]'>
                <span>16 January 2017</span>
                <button className='py-2 px-6 font-bold rounded-full uppercase bg-white text-black'>DONWLOAD</button>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center px-6'>
            <a className='inline-flex items-center' href='#'>
              <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 16 16' fill='none'>
                  <path fill='url(#a)' d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z' />
                  <path fill='#fff' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z' />
                  <defs>
                    <linearGradient id='a' x1='8' x2='8' y2='16' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#18AFFF' />
                      <stop offset='1' stopColor='#0062DF' />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 16 16' fill='none'>
                  <path fill='url(#b)' d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z' />
                  <path fill='#fff' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41Z' />
                  <defs>
                    <linearGradient id='b' x1='8' x2='8' y2='16' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#FF6680' />
                      <stop offset='1' stopColor='#E61739' />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 16 16' fill='none'>
                  <path fill='url(#aa)' d='M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8' />
                  <path fill='url(#bb)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z' />
                  <path fill='url(#cc)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z' />
                  <path fill='#2A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z' />
                  <defs>
                    <linearGradient id='aa' x1='8' x2='8' y1='1.64' y2='16' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#FEEA70' />
                      <stop offset='1' stopColor='#F69B30' />
                    </linearGradient>
                    <linearGradient id='bb' x1='8' x2='8' y1='7' y2='14' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#472315' />
                      <stop offset='1' stopColor='#8B3A0E' />
                    </linearGradient>
                    <linearGradient id='cc' x1='8.005' x2='8.005' y1='11' y2='13.457' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#FC607C' />
                      <stop offset='1' stopColor='#D91F3A' />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className='font-bold ml-3'>33</span>
            </a>
            <a className='ml-auto' href='#'>5 comments</a>
          </div>
          <div className='px-6 flex items-start justify-start'>
            <a className='inline-block mr-4' href='#'>
              <img className='rounded-full max-w-none w-10 h-10' src='https://randomuser.me/api/portraits/men/12.jpg' alt='avatar' />
            </a>
            <div className='flex-1 relative'>
              <input
                className='pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium'
                type='text' placeholder='Write a comment'
              />
              <span className='flex absolute right-3 top-2/4 -mt-3 items-center'>
                <svg className='mr-2' width='20' height='20' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z'
                  />
                </svg>
                <svg className='fill-blue-500 dark:fill-slate-50' width='20' height='20' viewBox='0 0 24 24'>
                  <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
                </svg>
              </span>
            </div>
          </div>
          <div className='px-6'>
            <div className='flex flex-row justify-between'>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z' />
                    </g>
                  </svg>
                </span>
              </a>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z' />
                      <path fill='currentColor' d='M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z' />
                    </g>
                  </svg>
                </span>
              </a>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z' />
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </article>
        {/** End Card */}

      </div>
    </div>
  )
}

export default App

//
// {/** card */}
// <div className='break-inside rounded-xl mb-4 p-6 bg-white dark:bg-slate-800 dark:text-white'>card</div>
//
