import React, { useEffect, useState } from 'react';
import Card from './card';
import Layout from './layout';

function Coingecko() {
  const [data, setData] = useState();
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('https://api.coingecko.com/api/v3/exchanges/', requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log('error', error));
  }, []);
  console.log(data);
  return (
    <Layout>
      <section className="md:px-5 md:mx-5">
        <div className="grid lg:grid-cols-3 ">
          {data?.slice(0, 10)?.map((el) => {
            return (
              <div key={el.id} className="lg:m-2 lg:p-5">
                <Card
                  id={el?.id}
                  url={el.url}
                  trustRank={el.trust_score_rank}
                  name={el.name}
                  country={el.country}
                  logo={el.image}
                />
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export default Coingecko;
