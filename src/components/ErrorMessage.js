import React from 'react';


export default function ErrorMessage (props) {
    return (
      <div className='text-rose-500 p-2 mb-4 heading'>
        <p>
          {props.message}
        </p>
      </div>
    );
}