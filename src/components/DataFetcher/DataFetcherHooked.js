import React, { useState, useEffect } from 'react';
import MockedApi from "../../api/mocks";
import useFriendName from '../../useFriendName';

export default function DataFetcherHooked() {
 // const [ name,setNames ] = useState([]);
    const [ name,stname] = useState([]);
    const [setNames ] = useState([]);


  const isNickHere = useFriendName('matirx');
    const h ="a";
    

  useEffect(() => {
    const data = MockedApi.fetchData();
    data.then((res) => {
      stname(res);
    });
    return () => {
      console.log('Cleaning.')
    }
  }, []); // You can pass the special value of empty array [] as a way of saying “only run on mount and unmount”.


  return (
    <div>
      {isNickHere && <p className="special">Nick is here!</p>}
      <ul>{name.map((element, idx) => (<li key={idx}>{element.name + ' ' + element.surname}</li>))}</ul>
    </div>
  );
}