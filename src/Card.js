import React from 'react';

const styles = {
    Card: {
      position: 'relative',
      top: '0px',
      left: '0px',
      right: '0px',
      height: '550px', 
      backgroundColor: '#1d2732',
      borderRadius: '78px',
      boxSizing: 'border-box',
      boxShadow: '0px 0px 30px black',
      opacity: 1,
      zIndex: 1,

    },
  
    UCard: {
      position: 'absolute',
      top: '0px',
      height: '10%',
      backgroundColor: '#1d2732',
      opacity: 1,
      zIndex: 2, 
      width: '100%'
    },

    Movie_Poster_Details: {
        zIndex: 3
    }
  };
  

const Card = ({ Movie, children }) => {
  return (
    <div className='Card'>
    <div >
      <div style={styles.UCard}>
        <h2>CineMax</h2>
      </div>
      
      <div style={styles.Card}>
        {children}
        {Movie && (
          <div className='random-movie'>
            <div className='movie-poster'>
              <img src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} alt={Movie.title} />
              </div>
              <div className='movie-poster-details'>
              <div style={styles.Movie_Poster_Details}>
                <h3>{Movie.title}</h3>
                <p>{Movie.release_date}</p>
                </div>
                <p className="description">{Movie.overview}</p>
                </div> 
          </div>
        )}
        
        </div>
      </div>
    </div>
  );
};

export default Card;
