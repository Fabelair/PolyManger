//npm install universal-cookie
import React, { useState } from "react"
import Cookies from 'universal-cookie';

export function gestionDeConnection(id){
    try{
        if(localStorage.getItem("idConnectionPolyManger")!=id){
            localStorage.setItem("idConnectionPolyManger",id)
        }
        return true
    }catch(e){
        console.log(e)
    }
}
export function getConnectionId(){
    try{
        return localStorage.getItem("idConnectionPolyManger")
    }catch(e){
        console.log(e)
    }
}
export async function connection(user,psw){
    console.log(psw)
    return
}
export async function signUp(user,psw){
    console.log(psw)
    return
}