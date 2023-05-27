import PropTypes from 'prop-types';

export const Quote = ({quote, author}) => {
  return (
    <blockquote className="blockquote text-end">
        <p className="mb-1">{quote}</p>
        <footer className="blockquote-footer mt-2">{author}</footer>
    </blockquote>
  )
}

Quote.propTypes = {
    quote: PropTypes.string,
    author: PropTypes.string
}