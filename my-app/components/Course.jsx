import Link from 'next/link';

export const Course = (props) => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer'>
        <Link href='/Buy'>
          <a className='w-full block h-full'>
            <img
              alt='blog photo'
              src={props.image}
              className='max-h-40 w-full object-cover'
            />
            <div className='bg-white dark:bg-gray-800 w-full p-4'>
              <p className='text-indigo-500 text-md font-medium'>
                {props.category}
              </p>
              <p className='text-gray-800 dark:text-white text-xl font-medium mb-2'>
                {props.title}
              </p>
              <p className='text-gray-400 dark:text-gray-300 font-light text-md text-justify'>
                {props.description}
              </p>

              <div className='flex flex-wrap justify-starts items-center mt-2'>
                {props.tags.map((tag) => (
                  <div
                    className='text-xs mr-2 py-1.5 px-4 my-1 text-gray-600 bg-blue-100 rounded-2xl'
                    key={tag}
                  >
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
