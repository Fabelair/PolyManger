//npm install universal-cookie
import React, { useState } from "react"
import Cookies from 'universal-cookie';
import axios from "axios";
export function gestionDeConnection(id){
    try{
        if(id==null){
            localStorage.removeItem("idConnectionPolyManger")
            console.log(id+ " removed item")
            return
        }
        if(localStorage.getItem("idConnectionPolyManger")!=id){
            localStorage.setItem("idConnectionPolyManger",id)
            console.log(id+ " is set in memory as the userId")
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
export function getConnectionStatus(){
    try{
        if(localStorage.getItem("idConnectionPolyManger") == null || localStorage.getItem("idConnectionPolyManger") == undefined){
            return false
        }else{
            return true
        }
    }catch(e){
        console.log(e)
    }
}
export async function connection(user,psw){
    const response = await axios.request({
        method: 'POST',
        url: `http://localhost:3000/connect`,
        headers: {
        },
        data: {
          username: user,
          psw: psw
        },
    })
    if(response.data == null){
        return false
    }else{
        gestionDeConnection(response.data._id.toString())
        return true
    }
}
export async function signUp(user,psw){
    const response = await axios.request({
        method: 'POST',
        url: `http://localhost:3000/login`,
        headers: {
        },
        data: {
          username: user,
          psw: psw
        },
    })
    if(response.data == null){
        return false
    }else{
        gestionDeConnection(response.data.insertedId.toString())
        return true
    }
    return
}