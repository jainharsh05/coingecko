import React from 'react';
import { Link } from 'react-router-dom';

function Card({ logo, name, country, trustRank, url, detailedPage, desc, year, tradeVolume }) {
  return (
    <div className="border max-w-sm rounded">
      <img className="w-[25%] lg:pl-6 pl-6 mt-2" src={logo} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{country}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          TrustRank : {trustRank}
        </p>
        <br />
        <p className="break-all p-6 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <a href={url}>URL : {url}</a>
        </p>
        <br />
        {detailedPage ? (
          <>
            <p className="text-[16px] pl-6">{desc}</p>
            <p className="text-[16px] pl-6">{year ? `Year Established ${year}` : ''}</p>
            <p className="text-[16px] pl-6">{tradeVolume ? `Trade Volume ${tradeVolume}` : ''}</p>
            <Link to="/" className="pl-6 text-[red]">
              go Back
            </Link>
          </>
        ) : (
          <>
            <br />
            <Link
              to={`/${name.toLowerCase()}`}
              state={{ data: name }}
              className=" p-6 mt-3 pointer hover:text[red] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Show Detail
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
