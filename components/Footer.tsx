import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white pt-16 pb-8'>
      <div className='max-w-7xl mx-auto px-4 xl:px-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Brand column */}
          <div className='max-w-sm'>
            <div className='mb-6'>
              <Image
                alt='Nwanyị bụ ịfe Festival logo'
                width={100}
                height={100}
                src='/logo.webp'
                className='object-contain'
              />
            </div>
            <h3 className='text-2xl font-playfair font-bold mb-3'>
              Nwanyị bụ <span className="text-amber-500">ịfe</span>
            </h3>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Empowering women, celebrating heritage, and honoring achievements
              since 2015 through cultural excellence and community impact.
            </p>
            <div className='flex flex-wrap gap-8'>
              <a
                href=''
                className='
    p-2 rounded-full 
    transition-all duration-300 
    border border-amber-500 
    text-amber-500 
    bg-amber-700/40 
    hover:text-white 
    hover:shadow-[0_0_15px_3px_rgba(245,158,11,0.7)]
    hover:border-amber-500
    hover:ring-4 hover:ring-amber-600/50
    relative
    overflow-visible
    transform
    hover:scale-110
    group
  '>
                <div className='absolute inset-0 rounded-full bg-amber-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300' />
                <Facebook />
              </a>

              <a
                href=''
                className='
    p-2 rounded-full 
    transition-all duration-300 
    border border-amber-500 
    text-amber-500 
    bg-amber-700/40 
    hover:text-white 
    hover:shadow-[0_0_15px_3px_rgba(245,158,11,0.7)]
    hover:border-amber-500
    hover:ring-4 hover:ring-amber-600/50
    relative
    overflow-visible
    transform
    hover:scale-110
    group
  '>
                <div className='absolute inset-0 rounded-full bg-amber-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300' />
                <Twitter />
              </a>

              <a
                href=''
                className='
    p-2 rounded-full 
    transition-all duration-300 
    border border-amber-500 
    text-amber-500 
    bg-amber-700/40 
    hover:text-white 
    hover:shadow-[0_0_15px_3px_rgba(245,158,11,0.7)]
    hover:border-amber-500
    hover:ring-4 hover:ring-amber-600/50
    relative
    overflow-visible
    transform
    hover:scale-110
    group
  '>
                <div className='absolute inset-0 rounded-full bg-amber-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300' />
                <Instagram />
              </a>
            </div>
          </div>

          {/* Links column */}

          <div>
            <h3 className='text-lg font-semibold mb-5 pb-2 border-b border-amber-500/30 inline-block'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {[
                { name: "About the Festival", href: "/about" },
                { name: "Program Schedule", href: "/program" },
                { name: "Photo Gallery", href: "/gallery" },
                { name: "Register Now", href: "/register" },
                { name: "Volunteer Program", href: "/volunteer" },
                { name: "Partnerships", href: "/partners" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-gray-300 hover:text-amber-400 transition-colors flex items-start group'>
                    <span className='mr-2 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity'>
                      →
                    </span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className='text-lg font-semibold mb-5 pb-2 border-b border-amber-500/30 inline-block'>
              Contact Us
            </h3>
            <ul className='space-y-4 text-gray-300'>
              <li className='flex'>
                <svg
                  className='flex-shrink-0 h-5 w-5 text-amber-500 mt-0.5 mr-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>
                  International Conference Centre
                  <br />
                  IMT Enugu, Nigeria
                </span>
              </li>
              <li className='flex'>
                <svg
                  className='flex-shrink-0 h-5 w-5 text-amber-500 mt-0.5 mr-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
                <span>
                  +234 812 345 6789
                </span>
              </li>
              <li className='flex'>
                <svg
                  className='flex-shrink-0 h-5 w-5 text-amber-500 mt-0.5 mr-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
                <span>info@nwanyibuife.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div className='max-w-xs'>
            <h3 className='text-lg font-semibold mb-5 pb-2 border-b border-amber-500/30 inline-block'>
              Stay Updated
            </h3>
            <p className='text-gray-300 mb-4'>
              Subscribe for festival announcements and exclusive content
            </p>
            <form className='space-y-3'>
              <input
                type='email'
                placeholder='Your email address'
                className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 border border-gray-700'
                required
                aria-label='Email for newsletter subscription'
              />
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-amber-900/30'>
                Subscribe
              </button>
            </form>
            <p className='mt-3 text-xs text-gray-500'>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-center md:text-left'>
              <p className='text-gray-500 text-sm'>
                &copy; {new Date().getFullYear()} Nwanyị bụ Ife Festival. All
                rights reserved.
              </p>
              <p className='mt-1 text-gray-600 text-xs'>
                Empowering women, celebrating heritage, honoring achievements.
              </p>
            </div>

            <div className='flex space-x-6'>
              {["Privacy Policy", "Terms of Use", "Accessibility"].map(
                (item) => (
                  <a
                    key={item}
                    href='#'
                    className='text-gray-500 hover:text-amber-400 text-sm transition-colors'>
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
