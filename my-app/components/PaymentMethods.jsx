import { useEffect, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';

const PaymentMethods = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    (async () => {
      const country = await axios.get('https://api.country.is');

      setCountry(country.data.country);
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    (async () => {
      if (country !== null || undefined) {
        const data = await axios.get(
          `http://localhost:3333/country/${country}`
        );
        setData(data.data.body.data);
      }
    })();
    setLoading(false);
  }, [country]);

  const handleClick = async (currency, type) => {
    const res = await axios.post(
      `http://localhost:3333/payment/${currency}/${type}`
    );
    if (res.data.body.status.status === 'SUCCESS') {
      // completePayment(res.data.body.data.id);
      localStorage.clear();
      localStorage.setItem('payment_id', JSON.stringify(res.data.body.data.id));
      localStorage.setItem(
        'textual_codes',
        JSON.stringify(res.data.body.data.textual_codes)
      );
      localStorage.setItem(
        'instructions',
        JSON.stringify(res.data.body.data.instructions)
      );
      Router.push('/Instructions');
    } else {
      Router.push('/Error');
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
  return (
    <>
      <div className='flex flex-wrap'>
        {data
          .filter((item) => item.category === 'cash')
          .map((filteredItem) => (
            <button
              key={filteredItem.type}
              className='px-4 py-2 bg-blue-700 text-white font-semibold text-lg mr-2 my-2 rounded-lg flex items-center uppercase'
              onClick={() =>
                handleClick(filteredItem.currencies[0], filteredItem.type)
              }
            >
              {filteredItem.name}
              <img src={filteredItem.image} alt='Image' className='w-24 ml-2' />
            </button>
          ))}
      </div>
    </>
  );
};

export default PaymentMethods;
