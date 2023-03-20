import '../news-styles.css';

export const CardNews = ({ img, consecutivo, title, paragraph }) => {
  return (
    <article className="card-new">
        <div className='image-new'>
            <img 
                src={ img }
                alt={ title }
            />
        </div>
        <div className='text-new'>
            <h2>{ consecutivo }</h2>
            <h3>{ title  }</h3>
            <p> { paragraph } </p>
        </div>
    </article>
  )
}
