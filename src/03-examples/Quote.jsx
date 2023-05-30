import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({quote, author}) => {
  
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0});

  // Este efecto seria casi igual que usar useEffect
  // Pero este es mas especifico para cosas de REnderizado
  useLayoutEffect(() => {
    const {height, width} = (pRef.current.getBoundingClientRect());
    setBoxSize({height, width});
  }, [quote])
  
  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{display: 'flex'}}
        >
          <p ref={pRef} className="mb-1">{quote}</p>
          <footer className="blockquote-footer mt-2">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
      <br />
      <br />
    </>
  )
}

Quote.propTypes = {
    quote: PropTypes.string,
    author: PropTypes.string
}