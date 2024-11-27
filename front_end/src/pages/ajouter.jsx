import React from "react";
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'; //npm install react-hook-form
function Ajouter(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log("Submit")
      };
    return (
    <div class="w-[100%] mb-12 h-screen">
      <div class="w-[100%] grid grid-rows-2">
        <div class="w-[32rem] h-flex rounded-2xl shadow-xl ring ring-slate-700 place-self-center grid grid-cols-2">
            <div class="w-flex h-16 ring"></div>
        </div>
        <div class="w-[32rem] h-flex rounded-2xl shadow-xl ring ring-slate-700 place-self-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="w-[80%] ml-[10%] mt-4">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Full Name</label>
              <input type="text" id="UserName" {...register("name", { required: true })} class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name"></input>
              {errors.name && <p class="text-red-500">Your name is required</p>}
            </div>
            <div class="w-[80%] ml-[10%] mt-4">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
              <input type="text" id="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}  class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com"></input>
              {errors.email && <p class="text-red-500">Email is required</p>}
            </div>
            <div class="w-[80%] ml-[10%] mt-4">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Spotify URL</label>
              <input {...register("spotifyUrl", { required: true })} type="text" id="SpotifyURL" class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. https://open.spotify.com/artist/hash"></input>
              {errors.spotifyUrl && <p class="text-red-500">Spotify Url is required</p>}
            </div>
            <label for="message" class=" mt-4 ml-[10%] block mb-2 text-md font-medium text-gray-900 dark:text-white">Wallet</label>
            <div class="w-[80%] ml-[10%] mt-10">
              <div class="w-full grid">
                <button type="submit" class="mb-4 place-self-center w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Ajouter;