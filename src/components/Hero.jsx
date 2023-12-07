import { motion } from 'framer-motion'

import { styles } from '../styles'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white shadow-gray-800 [text-shadow:_0_3px_0_rgb(0_0_0_/_80%)]`}>Let's start with a simple one — what is a <span className="text-[#915eff]"><br />pixel?</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-100 [text-shadow:_0_3px_0_rgb(0_0_0_/_80%)]`}>
            it's short for picture element. In turn, the word pictures in English is usually shortened to the short pics, which later transformed into the slang pix.
            Thus, the phrase pix element appeared, which was then shortened to the familiar pixel.
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero