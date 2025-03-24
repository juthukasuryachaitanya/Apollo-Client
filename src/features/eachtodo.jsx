import React, { memo } from 'react'

var Eachtodo = memo(({ book,deletebook,editBook }) => {
    return (<div style={{margin:"5px"}}>
        <li>name:{book.title}<button onClick={()=>{editBook(book)}}>edit</button><button onClick={() => { deletebook(book.id)}} className="btn btn-danger btn-sm" >delete <i class="bi bi-trash"></i>
        </button></li>
    </div>

    )
})

export default Eachtodo