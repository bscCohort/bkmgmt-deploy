import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';

function ShowBookDetails(props) {
  const [book, setBook] = useState({});
  // const [showToast, setShowToast] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`/api/books/${id}`)
      .then((res) => {

        // Show the success alert
        toast.success('Book deleted!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        // Delay the navigation slightly to allow the toast to be seen
        setTimeout(() => {
          // setShowToast(false); // Hide the toast
          navigate('/'); // Navigate to homepage
        }, 5000); // Adjust the timeout as needed
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
        console.log('The error is -> ')
        console.log(err)
        // Show the success alert
        toast.error('Error while deleting the book, please try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      });
  };

  return (
    <div className='ShowBookDetails'>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h1 className='display-4 text-center'>Book's Record</h1>
            <p className='lead text-center'>View Book's Info</p>
            <hr /> <br />

            <div className='row justify-content-center'>
              <div className='col-md-12'>
                <table className='table table-striped table-bordered table-dark'>
                  <tbody>
                    <tr>
                      <th scope='row'>Title</th>
                      <td>{book.title}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Author</th>
                      <td>{book.author}</td>
                    </tr>
                    <tr>
                      <th scope='row'>ISBN</th>
                      <td>{book.isbn}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Publisher</th>
                      <td>{book.publisher}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Published Date</th>
                      <td>{book.published_date}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Description</th>
                      <td>{book.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='row justify-content-around mt-3'>
              <div className='col-md-4'>
                <button
                  type='button'
                  className='btn btn-outline-danger btn-lg btn-block'
                  onClick={() => {
                    onDeleteClick(book._id);
                  }}
                >
                  Delete Book
                </button>
              </div>
              <div className='col-md-4'>
                <Link
                  to={`/edit-book/${book._id}`}
                  className='btn btn-outline-info btn-lg btn-block'
                >
                  Edit Book
                </Link>
              </div>
              <div className='col-md-4'>
                <Link to='/' className='btn btn-outline-warning btn-lg btn-block'>
                  Show Book List
                </Link>
              </div>
            </div>




          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShowBookDetails;
