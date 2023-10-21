import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistory, getAllHistory } from '../services/allAPI';

function WatchHistory() {
  const [history, setHistory] = useState([]);

  const viewResult = async () => {
    const { data } = await getAllHistory();
    setHistory(data);
  }

  useEffect(() => {
    viewResult();
  }, []);

  const handleDeleteHistory = async (id) => {
    await deleteHistory(id);
    viewResult();
  }

  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h2>Watch History</h2>
        <Link to="/home" className="d-flex align-items-center" style={{ textDecoration: "none", fontSize: "30px", color: "white" }}>
          <i className="fa-solid fa-arrow-left fa-beat me-1"></i> Back to Home
        </Link>
      </div>

      <table className="table container mt-5 mb-5">
        <thead>
          <tr>
            <th style={{ color: 'white' }}>#</th>
            <th style={{ color: 'white' }}>Caption</th>
            <th style={{ color: 'white' }}>URL</th>
            <th style={{ color: 'white' }}>Time Stamp</th>
            <th style={{ color: 'white' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {history.length > 0
            ? history.map((obj, index) => (
                <tr key={index}>
                  <td style={{ color: 'white' }}>{index + 1}</td>
                  <td style={{ color: 'white' }}>{obj?.caption}</td>
                  <td>
                    <a style={{ textDecoration: 'none', color: 'white' }} href={obj?.embedLink} target='_blank'>
                      {obj?.embedLink}
                    </a>
                  </td>
                  <td style={{ color: 'white' }}>{obj?.timeStamp}</td>
                  <td>
                    <button onClick={() => handleDeleteHistory(obj?.id)} className="btn btn-danger btn-sm">
                      <i className="fa-solid fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))
            : <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px', color: 'red' }}>No data</p>
          }
        </tbody>
      </table>
    </>
  );
}

export default WatchHistory;
