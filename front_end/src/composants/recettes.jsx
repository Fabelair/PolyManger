import React from "react";
import fetchRecipy from "../functions/fetchRecipy";
import { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom";
function Recettes(){
    const [Recettes, setRecettesState] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [hasMore, setHasMore] = useState(false);
    const limit = 4 //devra etre changer en fonction de la taille de l'écran


    useEffect(() => {
        _fetchRecipy();
        console.log(pageNumber)
    }, [pageNumber])

    const elementRef = useRef(null)

    function onIntersection(entries){
        const firstEntry = entries[0]
        if(firstEntry.isIntersecting && hasMore){
        setPageNumber(prev => prev+1)
        }
    }

    async function _fetchRecipy() {
        setLoading(true);
        const recettes = await fetchRecipy(pageNumber, limit);
        console.log(recettes)
        if(recettes.length == 0){
            setHasMore(false);
        }else{
            setHasMore(true);
        }
        setRecettesState(prev => [...prev, ...recettes]);
        setLoading(false);
    }
    
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection)
        if(observer && elementRef.current){
        observer.observe(elementRef.current)
        }

        return () => {
        if(observer){
            observer.disconnect()
        }
        }
    }, [Recettes])
    if(isLoading == true){
        return (
            <div class="h-flex w-full grid grid-cols-4 gap-8">
                {Recettes.map((recette) =>
                    <Link class="" to={"/"+recette.name}>
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
                    </Link>
                )}
            <div role="status" class="flex items-center justify-center h-12 mt-48">
                <svg aria-hidden="true" class="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        )
      }
      else{
      return (
        <div class="">
            {<div class="h-flex w-full grid grid-cols-4 gap-8">
                {Recettes.map((recette) =>
                    <Link class="" to={"/"+recette.name}>
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
                    </Link>
                )}
            </div>
            }{hasMore &&<div ref={elementRef} style={{textAlign: 'center'}}></div>}
      </div>
      );
    }    
}

export default Recettes;