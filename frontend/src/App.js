import { useState } from "react";
import { useEffect } from "react";
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [books, setBooks] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  useEffect(()=>{
    displayData();
  },[]);

  const displayData = async ()=> {
    try{
        const bookdata = await fetch('http://127.0.0.1:8000/api/display_details/');
        const data = await bookdata.json();
        console.log(data);
        setBooks(data);
    }
    catch(err){
        console.log(err);
    }
  }

  const addDetails = async () =>{
    const bookData = {
      title,
      year,
    };
    try{
      const response = await fetch("http://127.0.0.1:8000/api/add_details/",
        {
          method : "POST",
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify(bookData),
        }
      );

      const data = await response.json();
      setBooks((prevBooks) => [...prevBooks, data]);
      setTitle("");
      setYear(0);

    }catch(err){
      console.log("You got this error: ",err);
    }
  }







  // const updateTitle = async (pk, year) => {
  //   const bookData = {
  //     title: newTitle,
  //     year,
  //   };

  //   try{
  //     const response = await fetch(`http://127.0.0.1:8000/api/book_detail/${pk}`,
  //       {
  //         method : "PUT",
  //         headers:{
  //           'Content-Type':'application/json',
  //         },
  //         body: JSON.stringify(bookData),
  //       }
  //     );

  //     const data = await response.json();

  //     setBooks((prev)=>{
  //       prev.map((book)=>{
  //         if(book.id === pk){
  //           return data;
  //         }
  //         else{
  //           return book;
  //         }
  //     }
  //     )
  //   })
  // }
  //   catch(err){
  //     console.log("You got this error: ",err);
  //   }
  // }

  const updateTitle = async (pk, year) => {
    const bookData = {
      title: newTitle,
      year,
    };
  
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/book_detail/${pk}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
  
      const data = await response.json();
  
      setBooks((prev) =>
        prev.map((i) => {
          if (i.id === pk) {
            return data; // Replace the updated book
          } else {
            return i; // Keep the other books unchanged
          }
        })
      );
    } catch (err) {
      console.log("You got this error: ", err);
    }
  };

  const deleteData= async (pk)=> {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/book_detail/${pk}`, {
        method: "DELETE",
      });
      setBooks((prev)=> prev.filter((book)=> book.id !== pk));
  }
  catch(err){
    console.log(err)
  }

  };

  return (<>
    <div>
      <center>
      <input type="text" placeholder="Enter you title.." className="INPUT" onChange={(e)=>{setTitle(e.target.value);}} /><br/>
      <input type="number" placeholder="Enter released year.." className="INPUT" onChange={(e)=>{setYear(e.target.value);}} /><br/>
      <input type="button" value={"Click Me"} className="INPUT" onClick={addDetails}/>
      </center>
    </div>
    <div>
      <center>
        {books.map((item)=>(
            <div style={{border:'2px solid black', margin:'10px', padding:'10px', width:'300px'}}>
              <p>
                Id: {item.id} <br/>
                Title: {item.title} <br/>
                Year: {item.year} {" "} 
              </p>
              <p>
                <input type="text" placeholder="New Title.." className="INPUT" onChange={(e)=>{setNewTitle(e.target.value);}}></input>
                <button onClick={() =>updateTitle(item.id, item.year)}>UPDATE</button>
                <button onClick={() =>deleteData(item.id)}>DELETE</button>
              </p>

            </div>
        ))}
      </center>
   

    </div>
    </>
  );
}
export default App;