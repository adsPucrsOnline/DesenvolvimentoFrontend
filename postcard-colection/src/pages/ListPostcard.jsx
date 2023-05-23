import React from 'react';
import usePostcards from '../hooks/usePostcards';

function ListPostcard() {
    const { postcards, loading, error } = usePostcards();

    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    return (
      <div>
        <h2>List Postcards</h2>
        {postcards.map((postcard) => (
          <div key={postcard.id}>
            <h3>{postcard.title}</h3>
            <img src={postcard.image} alt={postcard.title} />
          </div>
        ))}
      </div>
    );
  }

export default ListPostcard;