'use client';

import { programData } from '../components/data';
import { Button } from '../components/button';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const Programs = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1410px)');
  return (
    <section
      id="programs"
      className="lg:bg-background bg-white md:py-25 px-[clamp(1.8rem,5vw,8.5rem)] flex flex-col items-center md:gap-18 gap-6 pb-72"
    >
      <h2 className=" font-clash text-[#262B3F] font-semibold text-[clamp(1.75rem,5vw,3.75rem)] text-center md:w-2/3 leading-tight">
        Programs Driving Ibadan’s{' '}
        <span className="bg-[linear-gradient(180deg,_#0D1927,_#D65934)] text-transparent bg-clip-text ">
          Tech Future
        </span>
      </h2>
      <div className="flex flex-col gap-12 max-w-[1209px]">
        {programData.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse ${
              idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }  gap-6 lg:gap-20 items-center md:py-10 px-15 bg-white rounded-[30px] h-fit`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: '0px 0px -100px 0px' }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
              }}
              className={`max-w-[543px]  flex flex-col gap-8 h-fit`}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-[clamp(1.5rem,4vw,3.1rem)] font-semibold font-clash leading-tight"
              >
                {item.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-dark-300"
              >
                {item.description}
              </motion.p>
              <Button
                text={item.btnText}
                className="bg-primary-800 text-white border-0 lg:w-fit w-full"
              />
            </motion.div>

            <motion.div
              initial="rest"
              whileHover="hover"
              className="w-[clamp(21.5rem,25vw,28.6rem)] flex-shrink-0 relative group"
            >
              {isLargeScreen ? (
                <>
                  <motion.img
                    variants={{
                      rest: {
                        translateY: 0,
                        opacity: 1,
                        rotateZ: 0,
                        transformPerspective: 1000,
                        rotateX: 0,
                      },
                      hover: {
                        translateY: 100,
                        opacity: 0,
                        rotateZ: 10,
                        rotateX: 10,
                      },
                    }}
                    transition={{
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <motion.div
                    variants={{
                      rest: { opacity: 0 },
                      hover: {
                        y: -20,
                        opacity: 1,
                        rotateZ: -5,
                        rotateX: 10,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                    }}
                    className={`${
                      idx % 2 === 0
                        ? 'bg-secondary-100 text-primary-800'
                        : 'bg-primary-800 text-white'
                    } absolute inset-0  rounded-4xl p-6 md:p-10 flex flex-col  gap-5 w-full h-full min-[1410px]:opacity-100 opacity-0`}
                  >
                    <h3 className="font-clash font-semibold text-[clamp(0.8rem,5vw,1.5rem)] lg:text-4xl ">
                      What to expect
                    </h3>

                    {item.flip?.map((flipItem, index) => {
                      const borderColors = [
                        'border-l-primary-400',
                        'border-l-[#2ECC71]',
                        'border-l-[#E48900]',
                      ];
                      return (
                        <div
                          key={index}
                          className={`border-l-4 ${borderColors[index]} pl-4 py-2 `}
                        >
                          <p className=" text-sm md:text-base line-clamp-2 min-[1500px]:line-clamp-none">
                            <span className="font-semibold">
                              {flipItem.title}:
                            </span>
                            {flipItem.paragraph}
                          </p>
                        </div>
                      );
                    })}
                  </motion.div>
                </>
              ) : (
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto rounded-lg object-cover hidden"
                />
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
