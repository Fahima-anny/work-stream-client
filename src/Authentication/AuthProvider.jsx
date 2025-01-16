/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic() ;
const auth = getAuth(app)

    // create user 
    const signUp = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // login user
    const loginUser = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    // sign out user 
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update user info 
    const updateUserInfo = (updatedInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedInfo)
    }

    // login with google 
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    
const {data: userData} = useQuery({
    queryKey: ['userData', user?.email],
queryFn: async () => {
const data = await axiosPublic.get(`/users/${user?.email}`) 
return data ;
},
enabled: !!user?.email,
})
console.log(userData?.data);


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("current user : ", currentUser);
            if(currentUser && userData.data){
            //   get token and save in client side 
            const userInfo = { email: currentUser.email , role: userData?.data}
            axiosPublic.post("/jwt", userInfo)
            .then(res => {
                if(res.data.token){
                    localStorage.setItem("access-token", res.data.token)
                    setLoading(false) ;
                }
            })
            }
            else{
            //   remove token 
            localStorage.removeItem("access-token")
            setLoading(false) ;
            }
        })
        return () => unSubscribe();
    }, [auth, userData?.data, axiosPublic])

    const authInfo = {
        user,
        loading,
        updateUserInfo,
        signOutUser,
        loginUser,
        signUp,
        googleLogin,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;