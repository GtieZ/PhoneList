import './App.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhone } from './store/phones/phones'

import apiRequest from './global/apiRequest';
import { global } from './global/Global'

import PhoneListContainer from './components/PhoneListContainer';


function App() {
  const phones = useSelector(state => state.phones);
  const dispatch = useDispatch();

  const [url, setUrl] = useState(global.url);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (phones.length == 0) {
      apiRequest().then(data => {
        data.forEach(element => dispatch(addPhone(element)));
        setLoading(false);
      }).catch((error => {
        alert(error);
      }));
    }
  });



  return (
    <div className="App">

      { loading &&
        <div className="spinner-border text-primary my-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }

      <PhoneListContainer phones={phones} />
    </div>
  );
}

export default App;
