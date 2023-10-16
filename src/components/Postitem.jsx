import React from 'react'
import '../styles/App.css'

const Postitem = (props) => {

  return (
    <div className='post'>
      <div className='post__content'>
        <strong>{props.number}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className='post__btns'>
        <button>Удалить</button>
      </div>
    </div>
   );
};

export default Postitem;
