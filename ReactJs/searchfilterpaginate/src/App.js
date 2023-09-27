import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {MDBTable, MDBRow, MDBCol, MDBContainer, MDBTableHead, MDBTableBody, MDBBtn, MDBBtnGroup, MDBPagination, MDBPaginationItem, MDBPaginationLink}  from 'mdb-react-ui-kit'
import './App.css';

function App() {

  const [data, setData] = useState([])
  const [value, setValue] = useState("")
  const [sortValue, setSortValue] = useState("")
  const [currentPage, setCurrentPage]  = useState(0)
  const [pageLimit] = useState(4)
  const [sortFilterValue, setSortFilterValue] = useState(" ")
  const [operation, setOperation] = useState(" ")
  
  const sortOptions = ["id", "usedId", "Title", "body", "status"]

  useEffect(()=>{
    getUsersData(0, 4, 0);
  }, [])

  async function getUsersData(start, end, increase, optType=null, filterorSortValue ){
    switch(optType){
        case "search":{
            setOperation(optType);
            setSortValue("")
          
            return await axios.get(`http://localhost:5000/users?q=${value}&_start=${start}&_end=${end}`)
            .then((response)=>{
              setData(response.data); 
              setCurrentPage(currentPage+increase);
            })
            .catch((err)=>{console.log(err)});
        }
        case "filter":{
          setOperation(optType);
          setSortFilterValue(filterorSortValue);
          setCurrentPage(currentPage+increase);
          return await axios.get(`http://localhost:5000/users?status=${filterorSortValue}&_order=asc&_start=${start}&_end=${end}`)
          .then((response)=>{setData(response.data); setValue(" ")})
          .catch((err)=>{console.log(err)});

        }
        case "sort":{
          setOperation(optType);
          setSortFilterValue(filterorSortValue);
          setCurrentPage(currentPage+increase);
          return await axios.get(`http://localhost:5000/users?_sort=${filterorSortValue}&_order=asc&_start=${start}&_end=${end}`)
          .then((response)=>{setData(response.data); setValue(" ")})
          .catch((err)=>{console.log(err)});
        }
        default:
          return await axios.get(`http://localhost:5000/users?_start=${start}&_end=${end}`)
          .then((response)=>{ 
            setData(response.data)
            setCurrentPage(currentPage + increase)
          })
          .catch((error)=>{console.log(error)})
    }  
  }

//   async function getUsersData(){
//     try {
//       const res = await axios.get('http://localhost:5000/users')
//       setData(res.data)
//     } catch (error) {
//       console.log(error.response.data)
//     }
// }

async function handleReset(){
  setOperation("");
  setSortFilterValue("")
  setValue("");
  setSortValue("")
  getUsersData(0,4,0,operation);
}

async function handleSearch(e){
  e.preventDefault();
  getUsersData(0,4,0,"search");
  // return await axios.get(`http://localhost:5000/users?q=${value}`)
  // .then((response)=>{setData(response.data); setValue(" ")})
  // .catch((err)=>{console.log(err)})
}

async function handleSort(e){
  console.log("sort---" + e)
  let value = e.target.value;
  setSortValue(value);
  getUsersData(0,4,0,"sort", value)
  // return await axios.get(`http://localhost:5000/users?_sort=${value}&_order=asc`)
  // .then((response)=>{setData(response.data); setValue(" ")})
  // .catch((err)=>{console.log(err)})
}

async function handleFilter(value){
  getUsersData(0,4,0,"filter", value);
  // return await axios.get(`http://localhost:5000/users?status=${value}`)
  // .then((response)=>{setData(response.data); setValue(" ")})
  // .catch((err)=>{console.log(err)})
}

function renderPagination(){
  if(data.length<4 && currentPage === 0) return null;
  if(currentPage === 0) {
    return (
      <MDBPagination className='mb-0'>
        <MDBPaginationItem>
          <MDBPaginationLink>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBBtn onClick={()=>{getUsersData(4,8,1, operation, sortFilterValue)}}>Next</MDBBtn>
        </MDBPaginationItem>
      </MDBPagination>
    );
  }else if(currentPage< pageLimit -1 && data.length === pageLimit){
      return(
        <MDBPagination className='mb-0'>
        <MDBPaginationItem>
          <MDBBtn onClick={()=>{getUsersData((currentPage-1)*4,currentPage*4,-1, operation, sortFilterValue)}}>Prev</MDBBtn>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBBtn onClick={()=>{getUsersData((currentPage+1)*4,(currentPage+2)*4,1, operation, sortFilterValue)}}>Next</MDBBtn>
        </MDBPaginationItem>
      </MDBPagination>
      )
  }else{
    return (
      <MDBPagination className='mb-0'>
        <MDBPaginationItem>
          <MDBBtn onClick={()=>{getUsersData((currentPage-1)*4,currentPage*4,-1, operation, sortFilterValue)}}>Prev</MDBBtn>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    );
  }
};

  return (
    <MDBContainer style={{"marginBottom":"100px"}}>
      <form
      style={{ 
        "margin":"auto",
        "padding":"15px",
        "maxWidth":"400px",
        "alignContent":"center"
      }}
      className='d-flex input-group w-auto'
      onSubmit={handleSearch}
      >
        <input 
          type='text'
          className='form-control'
          placeholder='search name ...'
          value={value}
          onChange={(e)=>{setValue(e.target.value)}}
        ></input>

        <MDBBtn
        type='submit'
        color='dark'
        >Search
        </MDBBtn>
        <MDBBtn
        className='mx-2'
        color='info'
        onClick={()=>{handleReset()}}
        >Reset
        </MDBBtn>
      </form>


      <div style={{"marginTop": "100px"}}>
        <h1 className='text-center'>
          Search , filter and pagination GG..
        </h1>
      <MDBRow>
        <MDBCol size="12">
        <MDBTable>
          <MDBTableHead dark>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">UserId</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col">Status</th>
            </tr>
          </MDBTableHead>
          {data.length === 0 ? (
            <MDBTableBody className='align-center mb-0'>
                <tr>
                  <td colSpan={8} className='text-center mb-0'>No data found</td>
                </tr>
            </MDBTableBody>
          ):(
              data.map((item,index)=>(
                <MDBTableBody key={index}>
                <tr>
                  <th scope='row'>{index+1}</th>
                  {/* <td></td> */}
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>{item.status}</td>

                </tr>
              </MDBTableBody>
              ))
          )}
        </MDBTable>
        </MDBCol>
      </MDBRow>
      <div
      style={{ 
        "margin":"auto",
        "padding":"15px",
        "maxWidth":"240px",
        "alignContent":"center"
      }}
      >
        {renderPagination()}
      </div>
      </div>
      {data.length >0 && (
        <MDBRow>
        <MDBCol size="8">
        <h4>Sort by:</h4>
          <select
            style={{"width":"50%", "borderRadius":"2px", "height":"35px"}}
            onChange={handleSort}
            value={sortValue}
          >
              <option> select sort options</option>
              {sortOptions.map((item, index) => (
                  <option value = {item} key={index} >{item}</option>
              ))}
          </select>
        </MDBCol>
        <MDBCol size="4">
            <h4> Filter by:</h4>
            <MDBBtnGroup>
              <MDBBtn color='success' onClick={()=>{handleFilter("active")}}> Active </MDBBtn>
              <MDBBtn color='danger' style={{marginLeft:"2px"}} onClick={()=>{handleFilter("Inactive")}}> Inactive </MDBBtn>
            </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
      )}
    </MDBContainer>
  );
}

export default App;
