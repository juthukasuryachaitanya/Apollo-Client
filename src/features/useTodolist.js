import React, { useCallback, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';

function useTodolist(Get_Books,Create_Books,Delete_Book,Update_Book) {
    var { data, refetch } = useQuery(Get_Books)
    var [addbookFn] = useMutation(Create_Books)
    var [deletebookFn] = useMutation(Delete_Book)
    var [updatebookFn] = useMutation(Update_Book)
    var [newbook, setNewbook] = useState({
        author: "",
        title: ""
    })
    var [editbook, setEditbook] = useState(null)
    function addbook() {
        addbookFn({ variables: newbook }).then(() => {
            refetch()
        })
    }
    var deletebook = useCallback((id) => {
        deletebookFn({ variables: { "deleteBookId": id } }).then(() => { refetch() })
    },[])
    var editBook = useCallback((book) => {
        setEditbook({ ...book })
    },[])
    var updatebook =useCallback(()=> {
        updatebookFn({ variables: editbook }).then(() => { refetch(); setEditbook(null) })
    })
  return [editbook,setNewbook,newbook,addbook,deletebook,editBook,updatebook,data,setEditbook]
}

export default useTodolist
