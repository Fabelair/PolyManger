import React from "react";
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'; //npm install react-hook-form
function Ajouter(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [recetteState, setRecetteState] = useState(true);
    const [showIngredientsState, setShowIngredientState] = useState(false);
    const [ingredients, setIngredientsState] = useState([{'name':null,'quantity':null}]);
    const [showInstructionsState, setShowInstructionsState] = useState(false);
    const [Instructions, setInstructionsState] = useState([{'instruction':null}]);
    const onSubmit = async (data) => {
        console.log(data)
      };
    const ingredient = () =>{
      event.preventDefault()
      setIngredientsState([...ingredients,{'name':null,'quantity':null}])
    }
    const changeShowIngredient = () =>{
      event.preventDefault()
      if (showIngredientsState) {
        setShowIngredientState(false)
      }else{
        setShowIngredientState(true)
      }
    }
    const instruction = () =>{
      event.preventDefault()
      setInstructionsState([...Instructions,{'instruction':null}])
    }
    const changeShowInstruction = () =>{
      event.preventDefault()
      if (showInstructionsState) {
        setShowInstructionsState(false)
      }else{
        setShowInstructionsState(true)
      }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="w-[32rem] h-flex rounded-2xl mt-4 shadow-xl ring ring-slate-700 place-self-center grid">
            <div class="w-[80%] ml-[10%] mt-4 h-24 ">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Nom :</label>
              <input type="text" id="nom" {...register("name", { required: true })} class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom"></input>
              {errors.name && <p class="text-red-500">Tu n'as pas mis de nom à cette recette</p>}
            </div>
            <div class="w-[80%] ml-[10%] h-24 ">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Prix par portion ($) :</label>
              <input type="text"  {...register("price", { required: true })} class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prix"></input>
              {errors.price && <p class="text-red-500">Les étudiants seraient ravis de connaitre le prix/portion!</p>}
            </div>
            <div class="w-[80%] ml-[10%] h-24 ">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Portions :</label>
              <input type="text" {...register("portion", { required: true })} class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 4"></input>
              {errors.portion && <p class="text-red-500">Combien de portions?</p>}
            </div>
            <div class="w-[80%] ml-[10%] h-24 ">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Temps de cuisson :</label>
              <input type="text" {...register("cuisson", { required: true })} class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 1h30"></input>
              {errors.cuisson && <p class="text-red-500">Quel est le temps de cuisson?</p>}
            </div>
            <div class="w-[80%] ml-[10%] h-24 ">
              <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Temps de préparation :</label>
              <input type="text"  {...register("preparation", { required: true })} class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 30min"></input>
              {errors.preparation && <p class="text-red-500">Quel est le temps de préparation?</p>}
            </div>
            <div class="w-[80%] ml-[10%] h-flex mb-4">
              <div class="grid grid-cols-10">
                <button class="text-white text-center place-self-center" onClick={()=>{changeShowIngredient()}}>
                  {showIngredientsState ? 
                    <svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg> :
                    <svg class="w-4 h-4 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                  }
                </button>
                <label for="message" class="block  ml-2 text-md font-medium text-gray-900 dark:text-white col-span-9">Ingrédients :</label>
              </div>
              {showIngredientsState && <>
                <div class=" h-flex grid grid-cols-3">
                  <label for="message" class="block mt-2 ml-16 col-span-2 text-md font-medium text-gray-900 dark:text-white">Nom</label>
                  <label for="message" class="block mt-2 ml-8 text-md font-medium text-gray-900 dark:text-white">Quantité</label>
                </div>
                <div class=" h-flex mt-2 mb-4">
                  {ingredients.map((ingredient,index) => 
                    <div class=" h-10 mb-4 grid grid-cols-9" key={index}> 
                      <div class=" grid">
                        <h1 class="text-xl dark:text-white font-bold text-center place-self-center">{index+1}.</h1>
                      </div>
                      <div class=" col-span-5 ml-2 mr-2">
                        <input type="text" {...register("ingredientName "+index.toString(), { required: true })} class="h-full w-full dark:bg-gray-900 dark:text-white text-bold p-2 border border-b-white border-t-transparent border-l-transparent border-r-transparent"></input>
                      </div>
                      <div class=" col-span-3 ml-4">
                        <input type="text" {...register("ingredientQuantity "+index.toString(), { required: true })} class="text-center h-full w-full dark:bg-gray-900 dark:text-white text-bold p-2 border border-b-white border-t-transparent border-l-transparent border-r-transparent"></input>
                      </div>
                    </div>
                  )}
                </div>
                <button onClick={()=>{ingredient()}} class=" rounded-lg bg-gray-50 border border-gray-300 focus:ring-gray-500 focus:border-gray-500  w-full place-self-center text-4xl text-center  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white">+</button>
                </>}
            </div>
            <div class="w-[80%] ml-[10%] h-flex mb-4">
              <div class="grid grid-cols-10">
                <button class="text-white text-center place-self-center" onClick={()=>{changeShowInstruction()}}>
                  {showInstructionsState ? 
                    <svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg> :
                    <svg class="w-4 h-4 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                  }
                </button>
                <label for="message" class="block  ml-2 text-md font-medium text-gray-900 dark:text-white col-span-9">Instructions :</label>
              </div>
              {showInstructionsState && <>
                <div class=" h-flex mt-2 mb-4">
                  {Instructions.map((instruction,index) => 
                    <div class=" h-10 mb-4 grid grid-cols-9" key={index}> 
                      <div class=" grid">
                        <h1 class="text-xl dark:text-white font-bold text-center place-self-center">{index+1}.</h1>
                      </div>
                      <div class=" col-span-8 ml-2 mr-2">
                        <input type="text" {...register("instruction "+index.toString(), { required: true })} class="h-full w-full dark:bg-gray-900 dark:text-white text-bold p-2 border border-b-white border-t-transparent border-l-transparent border-r-transparent"></input>
                      </div>
                    </div>
                  )}
                </div>
                <button onClick={()=>{instruction()}} class=" rounded-lg bg-gray-50 border border-gray-300 focus:ring-gray-500 focus:border-gray-500  w-full place-self-center text-4xl text-center  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white">+</button>
                </>}
            </div>
          </div>
          <div class="w-[32rem] h-flex mt-8 place-self-center grid">
            <button onClick={()=>{}} class="h-12 rounded-lg w-[50%] place-self-center text-2xl text-center font-bold bg-blue-700 text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Ajouter;