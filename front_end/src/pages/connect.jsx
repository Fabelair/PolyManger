import React, { useState } from "react";
import {connection,signUp} from "../functions/gestionDeConnection"
function Connect(){
    async function _connection(){
        var res = await connection(document.getElementById("username").value,document.getElementById("psw").value)
        console.log(res)
        return
    }
    async function _signUp(){
        var res = await signUp(document.getElementById("username").value,document.getElementById("psw").value)
        console.log(res)
        return
    }
    return(<div class="h-screen grid">
        <div class="place-self-center h-[32rem] w-[32rem] grid">
            <div class="ring ring-black dark:ring-white w-full h-flex  rounded-xl grid">
                <div class="w-full h-[8rem] grid">
                    <h1 class="dark:text-white font-bold text-4xl place-self-center">Connexion</h1>
                </div>
                <div class="w-full h-[14rem]">
                    <div class=" h-[4rem] mt-8 ml-8 mr-8">
                    <input type="text" id="username" class="place-self-center text-4xl h-full w-full dark:bg-gray-900 dark:text-white text-bold p-2 border border-b-white border-t-transparent border-l-transparent border-r-transparent" placeholder="Username"></input>
                    </div>
                    <div class=" h-[4rem] mt-8 ml-8 mr-8">
                    <input type="text" id="psw" class="place-self-center text-4xl h-full w-full dark:bg-gray-900 dark:text-white text-bold p-2 border border-b-white border-t-transparent border-l-transparent border-r-transparent" placeholder="Password"></input>
                    </div>
                </div>
                <div class="w-full h-[9rem] grid">
                    <div class=" h-[4rem] w-64 grid grid-cols-2 place-self-center">
                        <button class="bg-blue-500 h-[3rem] w-24 place-self-center rounded text-xl" onClick={()=>{_connection()}}>Login</button>
                        <button class="bg-green-500 h-[3rem] w-24 place-self-center rounded text-xl" onClick={()=>{_signUp()}}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Connect;