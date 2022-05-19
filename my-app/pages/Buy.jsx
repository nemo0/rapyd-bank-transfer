import PaymentMethods from '../components/PaymentMethods';

const Buy = () => {
  return (
    <div className='container mx-auto py-10'>
      <div className='flex'>
        <div className='md:w-1/2 w-full'>
          <h4 className='text-2xl text-blue-600'>Buy Learn Tailwind CSS</h4>
          <p className='mr-4 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            numquam quod saepe voluptatibus nisi laudantium quam voluptate
            quisquam! Aspernatur, iste. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eaque cum ipsam perferendis qui temporibus fugit,
            voluptate nihil accusantium! Delectus provident possimus ullam nam
            vitae modi aliquid eos exercitationem voluptatum magnam enim
            repudiandae voluptatem in, eligendi blanditiis reprehenderit
            asperiores quo? Incidunt voluptate enim facilis cumque libero error,
            fuga obcaecati quisquam repellat debitis suscipit minus optio quod
            delectus blanditiis illo labore ea ratione nesciunt perspiciatis nam
            ab aperiam ducimus pariatur? Sapiente sit, cupiditate aliquam non
            numquam exercitationem vitae illum ipsa voluptatum magni minima ex
            aut enim deleniti facere, tempora iusto? Corporis ipsum assumenda
            iure architecto similique asperiores in quas laborum dicta quos.
          </p>
        </div>
        <div className='md:w-1/2 w-full'>
          <div className='w-1/2'>
            <img
              src='https://images.pexels.com/photos/1261169/pexels-photo-1261169.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
              alt='Image'
              className='w-full rounded-lg'
            />
          </div>
        </div>
      </div>
      <PaymentMethods />
    </div>
  );
};

export default Buy;
