import { Course } from '../components/Course';

export const Courses = () => {
  return (
    <section className='flex justify-center'>
      <Course
        category={'Web Development'}
        title={'Learn Tailwind CSS'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem est, ultrices at volutpat quis, blandit luctus ante. Donec facilisis turpis vel finibus bibendum. Mauris viverra gravida lectus vel eleifend. Suspendisse bibendum egestas massa, vitae aliquet purus mattis sed. Etiam pharetra scelerisque efficitur. '
        }
        tags={['web development', 'css', 'tailwind']}
        image={
          'https://images.pexels.com/photos/1261169/pexels-photo-1261169.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        }
      />
    </section>
  );
};
