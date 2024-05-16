import React, { Link, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';





function signup() {

  const [rem, setRem] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");


  const navigate = useNavigate();

  const { signUp } = useAuth()



  const handleForm = async (event) => {
    event.preventDefault();
    if (email.trim() === '' || pass.trim() === '') {
      setError('Email and password is required');
      return;
    }
    setError('');
    try {
      await signUp(email, pass);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError('Email is Already taken, please login');
    }
  };
  


  return (
    <>
      <div className="w-full h-full">
        <img
          className="hidden absolute w-full h-full object-cover sm:block"
          src="https://c4.wallpaperflare.com/wallpaper/462/921/235/stranger-things-netflix-series-5k-wallpaper-preview.jpg"
          alt="loading..."
        />

        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />


        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[490px] max-h-[900px] mx-auto bg-black/60 rounded-lg">
            <div className="max-w-[450px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign UP</h1>
              {error && <p className="text-red-600 text-center mt-4">{error}</p>}
              <form
                className="w-full flex flex-col py-4" onSubmit={handleForm}
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="password"
                  value={pass}
                  onChange={(event) => setPass(event.target.value)}
                />
                <button type="submit" className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sigh Up
                </button>
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input
                      type="checkbox"
                      onChange={() => setRem(!rem)}
                      checked={rem}
                      className="mr-2"
                    />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="text-center my-6">
                  <span className="text-gray-600 mr-2">
                    Already subscribed?
                  </span>

                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default signup