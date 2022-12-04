import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './card';
import Layout from './layout';

function CoingeckoDetail() {
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('https://api.coingecko.com/api/v3/exchanges/', requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result.filter((el) => el.name === location.state.data)))
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <>
      <Layout>
        <section className="md:px-5 md:mx-5 ">
          <div className="grid lg:grid-cols-3 ">
            {data?.map((el) => {
              return (
                <div key={el.id} className="lg:m-2 lg:p-5 my-2">
                  <Card
                    id={el?.id}
                    url={el.url}
                    trustRank={el.trust_score_rank}
                    name={el.name}
                    country={el.country}
                    logo={el.image}
                    detailedPage={true}
                    desc={el.description}
                    year={el?.year_established}
                    tradeVolume={el?.trade_volume_24h_btc_normalized}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}
export default CoingeckoDetail;
