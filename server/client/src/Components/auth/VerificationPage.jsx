import React, { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';


const VerificationPage = () => {
  const { verificationToken } = useParams();
  const [verificationStatus, setVerificationStatus] = useState('Verifying...');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`https://tech-agency.onrender.com/verify/${verificationToken}`, {
          method: 'PUT',
        });
        if (response.ok) {
          setVerificationStatus('Email verified successfully');
        } else {
          setVerificationStatus('Email verification failed');
        }
      } catch (error) {
        setVerificationStatus('Error occurred while verifying email');
      }
    };

    verifyEmail();
  }, [verificationToken]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{verificationStatus}</h2>

      {verificationStatus === 'Email verified successfully' && (
        <p className="text-gray-600">
          Your email has been verified! You can now{' '}
          <Link to="/login" className="text-blue-500 font-semibold hover:underline">
            login
          </Link>
          .
        </p>
      )}

      {verificationStatus !== 'Verifying...' && verificationStatus !== 'Email verified successfully' && (
        <p className="text-gray-600">
          Email verification failed. Please{' '}
          <Link to="/login" className="text-blue-500 font-semibold hover:underline">
            try logging in
          </Link>
          or contact support.
        </p>
      )}

      {!verificationToken && <h2 className="text-xl font-semibold text-gray-800 mt-4">Invalid verification link</h2>}
    </div>
  </div>
  );
};

export default VerificationPage;
