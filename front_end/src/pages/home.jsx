import React from "react";
import { Link } from "react-router-dom";
import Recettes from "../composants/recettes";
function Home(){

    return <div class="h-flex">
        <div class="h-32 grid">
            <h1 class="dark:text-white place-self-center text-center text-4xl font-bold">PolyManger et La Communauté!</h1>
        </div>
        <div class="h-20 grid ">
            <input type="text" class="place-self-center text-4xl h-full w-[50%] dark:bg-gray-900 dark:text-white text-bold text-center p-2 border border-b-white border-t-transparent border-l-transparent border-r-transparent" placeholder="Quel recette aimerais-tu découvrir?!"></input>         
        </div>
        <div class="h-flex ring dark:ring-white ring-black mt-16 grid grid-cols-10">
            <div class="h-flex ring dark:ring-white ring-black col-span-3">
                <div class="ring dark:ring-white ring-black h-20 grid">
                    <h1 class="place-self-center text-center text-3xl dark:text-white font-bold">Filtre ta recherche!</h1>
                </div>
                <div class="h-flex">
                    <div class="grid grid-cols-8 mt-8">
                        <h1 class="col-span-2 col-end-6 place-self-center text-center text-2xl dark:text-white">Végé</h1>
                        <div class=" col-end-7 grid">
                            <input type="checkbox" class="w-6 h-6 rounded place-self-center dark:ring-green-400 hover:ring accent-green-400 "></input>
                        </div>
                    </div>
                    <div class="grid grid-cols-8 mt-8">
                        <h1 class="col-span-2 col-end-6 place-self-center text-center text-2xl dark:text-white">Gym Bro</h1>
                        <div class=" col-end-7 grid">
                            <input type="checkbox" class="w-6 h-6 rounded place-self-center dark:ring-red-400 hover:ring accent-red-400 "></input>
                        </div>
                    </div>
                    <div class="grid grid-cols-8 mt-8">
                        <h1 class="col-span-2 col-end-6 place-self-center text-center text-2xl dark:text-white">Cheap</h1>
                        <div class=" col-end-7 grid">
                            <input type="checkbox" class="w-6 h-6 rounded place-self-center dark:ring-orange-400 hover:ring accent-orange-400 "></input>
                        </div>
                    </div>
                    <div class="grid grid-cols-8 mt-8">
                        <h1 class="col-span-2 col-end-6 place-self-center text-center text-2xl dark:text-white">Time Saver</h1>
                        <div class=" col-end-7 grid">
                            <input type="checkbox" class="w-6 h-6 rounded place-self-center dark:ring-blue-400 hover:ring accent-blue-400 "></input>
                        </div>
                    </div>
                    <div class="grid grid-cols-8 mt-8">
                        <h1 class="col-span-2 col-end-6 place-self-center text-center text-2xl dark:text-white">Air-frier</h1>
                        <div class=" col-end-7 grid">
                            <input type="checkbox" class="w-6 h-6 rounded place-self-center dark:ring-green-400 hover:ring accent-green-400 "></input>
                        </div>
                    </div>
                    <div class="grid grid-cols-8 mt-8">
                        <h1 class="col-span-2 col-end-6 place-self-center text-center text-2xl dark:text-white">Crock-pot</h1>
                        <div class=" col-end-7 grid">
                            <input type="checkbox" class="w-6 h-6 rounded place-self-center dark:ring-red-400 hover:ring accent-red-400 "></input>
                        </div>
                    </div>
                    <div class="grid grid-cols-8 mt-8">
                        <h1 class="col-span-2 col-end-6 place-self-center text-center text-2xl dark:text-white">Meal-prep</h1>
                        <div class=" col-end-7 grid">
                            <input type="checkbox" class="w-6 h-6 rounded place-self-center dark:ring-orange-400 hover:ring accent-orange-400 "></input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-flex col-span-7 mt-8 ml-8 mr-8 mb-8">
                <Recettes/>
            </div>
        </div>
    </div>
}

export default Home;