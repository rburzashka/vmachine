import React, {useEffect, useState} from 'react';
import extract from '../utils/extract';

const FetchData = ({data, setData, setAvailableCodes}) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/data/test-data.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        const e = extract();
        setData(e.getData(data));
        setAvailableCodes(e.getCodePrice(data));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

    return (
        <>
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error!</p>}
            {data && (
                <>
                <h3>Available products</h3>
                <table>
                    <thead>
                        <tr>
                        <th>Name</th><th>Code</th><th>id</th><th>price</th>
                        </tr>
                    </thead>
                <tbody>
                {data.map((product) => (
                    <tr key={product.id}>
                        <td >{product.name}</td><td>{product.code}</td><td>{product.id}</td><td>{product.price}</td>
                    </tr>
                ))}
                </tbody>
                </table>
                </>
            )}
        </div>
    </>
    )
 }

 export default FetchData;

