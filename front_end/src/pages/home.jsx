import React from "react";
import { useState, useEffect } from 'react';
function Home(){
    const [Recettes, setRecettesState] = useState([{'name':"Spaghetti",'stars':4.5,'price':8.45,'cuisson':"1h30", "prep":'30min',"cheap":true,"vege":false,"gymBro":false,"time":false},{'name':"Poulet grillé aux agrumes",'stars':2.5,'price':14.55,'cuisson':"30min", "prep":'30min',"cheap":false,"vege":false,"gymBro":true,"time":true},{'name':"Macaronni à la viande",'stars':4.5,'price':2.45,'cuisson':"1h30", "prep":'30min',"cheap":true,"vege":false,"gymBro":true,"time":false}]);
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
                <div class="h-flex w-full grid grid-cols-4 gap-8">
                    {Recettes.map((recette) =>
                        <div class="h-64 w-full ring dark:ring-white ring-dark rounded-xl">
                            <div class="h-full grid grid-rows-6">
                                <div class=" row-span-2 grid grid-cols-3">
                                    <div class="col-span-3 grid">
                                        <h1 class="place-self-center dark:text-white font-bold text-2xl text-center ml-2 mr-2">{recette.name}</h1>
                                    </div>
                                </div>
                                <div class="row-span-2 grid grid-cols-3 ml-2 mr-2">
                                    <div class=" grid grid-rows-2">
                                        <h1 class=" place-self-center dark:text-white font-bold text-2xl text-center">{recette.cuisson}</h1>
                                        <h1 class=" dark:text-white text-xl text-center">Cuisson</h1>
                                    </div>
                                    <div class=" grid grid-rows-2">
                                        <h1 class=" place-self-center dark:text-white font-bold text-2xl text-center">{recette.prep}</h1>
                                        <h1 class=" dark:text-white  text-xl text-center">Prép.</h1>
                                    </div>
                                    <div class=" grid grid-rows-2">
                                        <h1 class=" place-self-center dark:text-white font-bold text-2xl text-center">{recette.price}$</h1>
                                        <h1 class=" dark:text-white  text-xl text-center">portion</h1>
                                    </div>
                                </div>
                                <div class=" row-span-2 grid grid-cols-3">
                                    <div class="col-span-2 grid grid-cols-2 mt-2 mb-2 ml-2">
                                        {recette.time ? <div class="mb-1 ml-1 mr-1 rounded bg-blue-400 grid"><h1 class=" text-center place-self-center">Time</h1></div> : <div class="mb-1 ml-1 mr-1 rounded bg-blue-400 grid opacity-25"><h1 class=" text-center place-self-center">Time</h1></div>}
                                        {recette.gymBro? <div class="mb-1 ml-1 mr-1 rounded bg-red-400 grid"><h1 class=" text-center place-self-center">Gym Bro</h1></div> : <div class="mb-1 ml-1 mr-1 rounded bg-red-400 grid opacity-25"><h1 class=" text-center place-self-center">Gym Bro</h1></div>}
                                        {recette.cheap ? <div class="mb-1 ml-1 mr-1 rounded bg-orange-400 grid"><h1 class=" text-center place-self-center">Cheap</h1></div> : <div class="mb-1 ml-1 mr-1 rounded bg-orange-400 grid opacity-25"><h1 class=" text-center place-self-center">Cheap</h1></div>}
                                        {recette.vege ? <div class="mb-1 ml-1 mr-1 rounded bg-green-400 grid"><h1 class=" text-center place-self-center">Végé</h1></div> : <div class="mb-1 ml-1 mr-1 rounded bg-green-400 grid opacity-25"><h1 class=" text-center place-self-center">Végé</h1></div>}
                                    </div>
                                    <div class="h-full grid ml-2 mr-2">
                                        <h1 class="place-self-center dark:text-white text-2xl font-bold">{recette.stars}⭐</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div class="h-64 w-full ring">

                    </div>
                    <div class="h-64 w-full ring">

                    </div>
                    <div class="h-64 w-full ring">

                    </div>
                    <div class="h-64 w-full ring">

                    </div>
                    <div class="h-64 w-full ring">

                    </div>
                    <div class="h-64 w-full ring">

                    </div>
                    <div class="h-64 w-full ring">

                    </div>
                    <div class="h-64 w-full ring">

                    </div>
                    <div class="h-64 w-full ring">

                    </div>
                    <div class="h-64 w-full ring">

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Home;