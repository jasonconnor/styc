/*
             Ballsack Goblin
                ,      ,
               /(.-""-.)\
           |\  \/      \/  /|
           | \ / =.  .= \ / |
           \( \   o\/o   / )/
             \_, '-/  \-' ,_/
            /   \__/   \
          /`    \      /    `\
         /       '----'       \ 
        (          __          )
         \_.-.___,'  `.___,.-._/
*/

export default (props) => {
  const {
    title,
    body,
    size,
    type,
    clickableTitle,
    clickHandler
  } = props

  const handleClickArticle = () => {
    if (!clickableTitle) return
    
    clickHandler()
  }

  return (
    <div>
      <h3 className={`article-title ${clickableTitle ? 'clickable-article' : null}`}
        onClick={handleClickArticle}
      >
        {title}
      </h3>

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
