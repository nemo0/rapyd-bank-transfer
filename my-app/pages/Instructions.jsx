import axios from 'axios';
import Router from 'next/router';
const Instructions = () => {
  const payment_id = JSON.parse(localStorage.getItem('payment_id'));
  const textual_codes = JSON.parse(localStorage.getItem('textual_codes'));
  const instructions = JSON.parse(localStorage.getItem('instructions'));

  const completePayment = async (payment_id) => {
    const res = await axios.post(
      `http://localhost:3333/completePayment/${payment_id}`
    );
    console.log(res.data);
    if (
      res.data.body.status.status === 'SUCCESS' &&
      res.data.body.data.status === 'CLO'
    ) {
      Router.push({
        pathname: '/Success',
      });
    } else {
      Router.push('/Error');
    }
  };
  return (
    <div className='container w-full h-full'>
      <div className=' flex justify-center py-10 flex-col items-center'>
        <h1 className='text-6xl text-purple-700 font-extrabold'>
          Your Order is <strong>Placed</strong> but Not Complete.
        </h1>
        <p className='text-lg text-gray-700'>
          Please Follow the Instructions Below to Complete the Payment
        </p>
        {payment_id ? (
          <p className='text-lg font-semibold text-black'>
            Payment ID: {payment_id}
          </p>
        ) : (
          <p>No payment id</p>
        )}
        {textual_codes ? (
          <p className='text-lg font-semibold text-black uppercase'>
            {Object.keys(textual_codes)}: {Object.values(textual_codes)}
          </p>
        ) : (
          <p>No textual codes</p>
        )}
        {instructions ? (
          <ul className='text-lg font-semibold text-black uppercase'>
            {instructions[0].steps.map((step) => (
              <li key={Object.keys(step)}>
                {Object.keys(step)}: {Object.values(step)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No instructions</p>
        )}
        <button
          className='px-4 py-2 rounded-lg bg-blue-600 font-bold text-lg text-white'
          onClick={() => {
            completePayment(payment_id);
          }}
        >
          Complete the Transaction
        </button>
      </div>
    </div>
  );
};

export default Instructions;
