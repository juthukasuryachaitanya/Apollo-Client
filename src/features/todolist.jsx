import React from 'react'
import Eachtodo from './eachtodo'


import { gql } from '@apollo/client';
import useTodolist from './useTodolist';
const Get_Books = gql`
query GetAllBooks {
  getAllBooks {
    title
    id
    author
  }
}`
const Create_Books = gql`
mutation CreateBook($title: String!, $author: String) {
    createBook(title: $title, author: $author) {
      title
      author
      id
    }
  }`

const Delete_Book = gql`
mutation DeleteBook($deleteBookId: ID!) {
  deleteBook(id: $deleteBookId) {
    author
    id
    title
  }
}`

const Update_Book = gql`
mutation UpdateBook($title: String!, $id: ID!, $author: String) {
  updateBook(title: $title, id: $id, author: $author) {
    author
    id
    title
  }
}`
function Todolist() {
    //   var { todos } = useSelector(state => state.todolist)
    //   var dispatch = useDispatch()
 var  [editbook,setNewbook,newbook,addbook,deletebook,editBook,updatebook,data,setEditbook] =  useTodolist(Get_Books,Create_Books,Delete_Book,Update_Book)
    return (<center>
        <div className='border border-3 m-3 p-3 w-25 border-danger'>
            <center><h1 className='border border-2'>Todolist</h1></center>
            <div className='border border-3 p-2'>
                <div className='d-flex justify-content-evenly'>
                    {
                        !editbook && (<>
                            <div>
                                <input type="text" onChange={(e) => { setNewbook({ ...newbook, author: e.target.value }) }} placeholder='Enter your author'></input>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => { setNewbook({ ...newbook, title: e.target.value }) }} placeholder='Enter your title'></input>
                            </div>
                        </>)
                    }

                    {
                        editbook && (<>
                            <div>
                                <input type="text" onChange={(e) => { setEditbook({ ...editbook, author: e.target.value }) }} value={editbook.author} placeholder='Enter your author'></input>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => { setEditbook({ ...editbook, title: e.target.value }) }} value={editbook.title} placeholder='Enter your title'></input>
                            </div>
                        </>)
                    }

                    <div>
                        {
                            !editbook && <button className="btn btn-primary btn-sm" onClick={() => { addbook(newbook) }}>addtodo</button>

                        }
                        {
                            editbook && <button onClick={() => { updatebook() }}>update book</button>
                        }
                    </div>
                </div>
                <br></br>
                <ul style={{ listStyle: "none" }}>
                    {
                        data?.getAllBooks
                            ?.map((book, index) => {
                                return <Eachtodo book={book} index={index} deletebook={deletebook} editBook={editBook}></Eachtodo>
                            })
                    }
                </ul>
            </div>

        </div>
    </center>

    )
}

export default Todolist

