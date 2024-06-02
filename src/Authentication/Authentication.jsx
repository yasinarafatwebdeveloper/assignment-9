

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';


 export const AuthContext=createContext(null)

const auth=getAuth(app)
const Authentication = ({children}) => {

const createUser=(email,password)=>{

return createUserWithEmailAndPassword(auth,email,password)

}

const [userId,setUserId]=useState({})

useEffect(()=>{

 onAuthStateChanged(auth,(stateManage=>{
setUserId(stateManage)

 }))

},[])

console.log(userId)


const signin=(email,password)=>{

return signInWithEmailAndPassword(auth,email,password)
}

const logout=()=>{

    signOut(auth)
}



const AuthenticationItem={
    createUser,
    signin,
    userId,
    logout
}


    return (
        <AuthContext.Provider value={AuthenticationItem}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;