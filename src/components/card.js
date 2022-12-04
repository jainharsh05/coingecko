import React from 'react';
import { Link } from 'react-router-dom';

function Card({ logo, name, country, trustRank, url }) {
  return (
    <div className="border max-w-sm rounded">
      <img className="w-[25%] lg:pl-6 pl-6 mt-2" src={logo} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{country}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {trustRank}
        </p>
        <br />
        <p className="break-all p-6 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {url}
        </p>
      </div>
      <Link to="/:id" className="p-6 mt-3 pointer">
        Show Detail
      </Link>
    </div>
  );
}

export default Card;
