import React, { useContext, useEffect, useState } from "react";
import firebase from 'firebase/app';
import "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: '',
    success: false,
  });

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }


  const handleGoogleSignIn = () => {

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        storeAuthToken();

      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
      
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  //Authentication using email and password
  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const passwordLength = e.target.value.length > 5;
      const passwordHasNumber = /[0-9]/.test(e.target.value);
      isFormValid = passwordLength && passwordHasNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  //create new user
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = {...user};
          newUserInfo.success = true;
          newUserInfo.error = '';
          setUser(newUserInfo)
        })
        .catch((error) => {
          const newUserInfo = {...user}
          newUserInfo.success = false;
          newUserInfo.error = error.message;
          setUser(newUserInfo);
        });
    }

    //login user
    if (!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        const newUserInfo = {...user};
          newUserInfo.success = true;
          newUserInfo.error = '';
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
      })
      .catch((error) => {
        const newUserInfo = {...user}
          newUserInfo.success = false;
          newUserInfo.error = error.message;
          setUser(newUserInfo);
      });
    }

    e.preventDefault();
  };

  return (
    <div className="login-page ">
      <section
        style={{ height: "100vh" }}
        class="grid my-auto grid-cols-1 gap-0 lg:grid-cols-12"
      >
        <div class="w-full col-span-1 mt-24 p-4 mx-auto lg:col-span-6 xl:p-12 sm:w-2/4 lg:w-full">
          <h2 className="text-3xl text-purple-700 font-bold">Tour BD</h2>
          <h1 class="mt-6 mb-4 text-xl text-purple-700 font-normal text-left text-gray-800">
            Log in to your account
          </h1>
          <form onSubmit={handleSubmit} class="pb-1 space-y-4">
            {newUser && <label class="block">
              <span class="block mb-1 text-xs font-medium text-gray-700">
                Your Name
              </span>
              <input
              onBlur={handleBlur}               
                class="form-input border-2 border-gray-500 p-2 w-3/5 rounded"
                type="text"
                placeholder="Your Name"
                name="name"
                required
              />
            </label>}
            <label class="block">
              <span class="block mb-1 text-xs font-medium text-gray-700">
                Your Email
              </span>
              <input
                onBlur={handleBlur}
                class="form-input border-2 border-gray-500 p-2 w-3/5 rounded"
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
            </label>
            <label class="block">
              <span class="block mb-1 text-xs font-medium text-gray-700">
                Your Password
              </span>
              <input
                onBlur={handleBlur}
                class="form-input border-2 border-gray-500 p-2 w-3/5 rounded"
                type="password"
                placeholder="password"
                required
                name="password"
              />
            </label> 
            <input
              className="p-2 bg-purple-700 w-20 rounded text-white font-semibold"
              type="submit"
              value="Login"
            />
              <input onChange={()=> setNewUser(!newUser)} className="lg:ml-56 md:ml-24 sm:ml-16" type="checkbox" name="newUser" id="" />
             <label className="text-purple-900 ml-1 font-semibold" htmlFor="newUser">New User</label>
          </form>
          <button
            onClick={handleGoogleSignIn}
            style={{ background: "#7629C8" }}
            className=" my-3 text-white text-xl p-2 w-2/5 rounded"
          >
            Google Sign In
          </button>
          <p className="text-red-600">{user.error}</p>
          {
            user.success && <p className="text-green-700 text-semibold">User {newUser ? 'Created' : 'Logged In'} Successfully</p>
          }
        </div>
        <div class="col-span-1 lg:col-span-6">
          <img
            src="https://www.sundarbantourbd.com/images/package/bangpackage/sinampack.jpg"
            alt="3 women looking at a laptop"
            class="object-cover w-full h-full min-h-full bg-gray-100"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
