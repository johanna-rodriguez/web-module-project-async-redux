import React, { useEffect } from 'react';
import { getAnimal, fetchFail } from './../actions';
import { connect } from 'react-redux';
import '../styles.css'

const Animal = (props) => {
  const { animal, isFetching, error } = props;
  
  useEffect(()=> {
    props.getAnimal();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching dog for ya!</h2>;
  }

  const handleClick = ()=> {
    props.getAnimal();
  }

  return (
    <>
      <div >
        <img className='dog-picture' src={animal.message}/>
      </div>
      <button onClick={handleClick}>Get new dog</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    animal: state.animal,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getAnimal, fetchFail })(Animal);