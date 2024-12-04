import React from "react";
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'; //npm install react-hook-form
function Ajouter(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [recetteState, setRecetteState] = useState(false);
    const onSubmit = async (data) => {
        console.log("Submit")
      };
    const ingredient = () =>{
      event.preventDefault()
      console.log("ingredient ++")
    }
    return (
    <div class="w-[100%] h-flex mb-16">
      <div class="w-[100%] h-flex">
        <h1 class="dark:text-white place-self-center mt-24 font-bold text-4xl">Ajouter votre touche!</h1>
        <div class="mt-16 h-flex">
          <div class="w-[32rem] h-flex rounded-2xl shadow-xl  place-self-center grid grid-cols-2">
              <div class="w-flex h-16 p-2 ">
                {recetteState && <div class="place-self-center h-full w-52 rounded-2xl shadow-xl ring ring-blue-700 grid">
                  <div class="mt-3"><h1 class="dark:text-white text-center">Recette</h1></div>
                </div>}
                {!recetteState && <div class="place-self-center h-full w-52 rounded-2xl shadow-xl grid" onClick={() =>setRecetteState(true)}>
                  <div class="mt-3"><h1 class="dark:text-white text-center">Recette</h1></div>
                </div>}
              </div>
              <div class="w-flex h-16 p-2 ">
                {!recetteState && <div class="place-self-center h-full w-52 rounded-2xl shadow-xl ring ring-blue-700 grid">
                  <div class="mt-3">
                    <h1 class="dark:text-white text-center">Plan Alimentaire</h1>
                  </div>
                </div>}
                {recetteState && <div class="place-self-center h-full w-52 rounded-2xl shadow-xl grid" onClick={()=>setRecetteState(false)}>
                  <div class="mt-3">
                    <h1 class="dark:text-white text-center">Plan Alimentaire</h1>
                  </div>
                </div>}
              </div>
          </div>
        </div>
        <div class="w-[32rem] h-flex rounded-2xl mt-4 shadow-xl ring ring-slate-700 place-self-center grid">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="w-[80%] ml-[10%] mt-4 h-24 ">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Nom :</label>
              <input type="text" id="nom" {...register("name", { required: true })} class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom"></input>
              {errors.name && <p class="text-red-500">Tu n'as pas mis de nom à cette recette</p>}
            </div>
            <div class="w-[80%] ml-[10%] h-24 ">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Prix par portion ($) :</label>
              <input type="text"  {...register("name", { required: true })} class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prix"></input>
              {errors.name && <p class="text-red-500">Les étudiants seraient ravis de connaitre le prix/portion!</p>}
            </div>
            <div class="w-[80%] ml-[10%] h-24 ">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Portions :</label>
              <input type="text" {...register("name", { required: true })} class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 4"></input>
              {errors.name && <p class="text-red-500">Combien de portions?</p>}
            </div>
            <div class="w-[80%] ml-[10%] h-24 ">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Temps de cuisson :</label>
              <input type="text" {...register("name", { required: true })} class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 1h30"></input>
              {errors.name && <p class="text-red-500">Quel est le temps de cuisson?</p>}
            </div>
            <div class="w-[80%] ml-[10%] h-24 ">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Temps de préparation :</label>
              <input type="text"  {...register("name", { required: true })} class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 30min"></input>
              {errors.name && <p class="text-red-500">Quel est le temps de préparation?</p>}
            </div>
            <div class="w-[80%] ml-[10%] h-flex mb-4">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Ingrédients :</label>
              <div class=" h-flex grid grid-cols-2">
                <label for="message" class="block mb-2 ml-2 text-md font-medium text-gray-900 dark:text-white">Nom</label>
                <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Quantité</label>
              </div>
              <button onClick={()=>{ingredient()}} class=" rounded-lg bg-gray-50 border border-gray-300 focus:ring-gray-500 focus:border-gray-500  w-full place-self-center text-4xl text-center  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white">+</button>
              {errors.name && <p class="text-red-500">Tu n'as pas mis d'ingrédients</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Ajouter;