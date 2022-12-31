export default (props) => {
  const {
    title,
    body,
    size,
    type
  } = props;

  return (
    <div>
      <h2 className='article-title'>
        {title}
      </h2>

      {size === 1 &&
      <p className='article-body'>{body}</p>
      }

      {size > 1 &&
      body.map((section, index) => (
        <p key={index}
          className='article-body'>
          {section}
        </p>
      ))
      }
    </div>
  )
}