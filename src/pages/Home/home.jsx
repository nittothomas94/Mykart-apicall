import { useState, useEffect } from 'react'; //to store api called data  AND useEffect for "apicall" only once
import { useNavigate } from 'react-router-dom'; //to perform roting from this page to that
import { BarLoader, PropagateLoader, BeatLoader } from 'react-spinners';
//installing and using predefinded 'Loading' Componets
import CardSkelton from '../../components/CardSkelton/cardskelton';
import './home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    //PROMIS METHORD(OLD)

    // fetch('https://fakestoreapi.com/products').then(response => {
    //   response.json().then(data => {
    //     setProducts(data);
    //   });
    // });

    //ASYNC AWAIT METHORD(NEW)
    //ROULES: 1.need to be write in a funtion and afer equalto('=') inform that ites async
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    //api calls ones in the first page rendering
    fetchData();
  }, []);

  console.log(products);
  
  const idChangePage = pId => {
    Navigate('/details/' + pId); //passing the id in url
  };

  return (
    <div className="home">
      <div className="card-container">
        {loading
          ? // <p>Loading</p>
            // <BarLoader color='red' className='loader'/>
            [1, 2, 3, 4, 5, 6, 7, 8].map(item => <CardSkelton />)
          : products.map(item => {
              return (
                <div
                  className="card"
                  onClick={() => {
                    idChangePage(item.id);
                  }}
                >
                  <img src={item.image} alt="" />
                  <h3>{item.title}</h3>
                  <p className="description">{item.description}</p>
                  <p>Price : {item.price}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Home;
