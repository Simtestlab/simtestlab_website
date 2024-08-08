import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import '../styles/Candidate.css';

const Candidate = () => {
  const { hash_value } = useParams();  // Get the hash value from the URL
  const navigate = useNavigate();  // Hook to programmatically navigate
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/candidate/${hash_value}/`)
      .then(response => {
        if (response.status === 404) {
          // If candidate is not found, redirect to the index page
          navigate('/');
          return null;
        }
        return response.json();
      })
      .then(data => {
        if (data) {
          setCandidate(data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching candidate data:', error);
        navigate('/');  // Redirect to index in case of an error
      });
  }, [hash_value, navigate]);

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress />
      </div>
    );
  }

  if (!candidate) {
    return null;  // In case of redirection, render nothing
  }

  return (
    <div className="candidate-container">
      <h1 className="candidate-title">Candidate Details</h1>
      <p className="candidate-detail"><strong>Name:</strong> {candidate.name}</p>
      <p className="candidate-detail"><strong>Education:</strong> {candidate.education}</p>
      <p className="candidate-detail"><strong>Job:</strong> {candidate.job}</p>
      <p className="candidate-detail"><strong>Status:</strong> {candidate.status}</p>
    </div>
  );
}

export default Candidate;
