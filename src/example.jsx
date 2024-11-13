import React from "react";
import { useState } from 'react';
{/*Jedna funkcja bo jakoś tak wyszło
    Generalnie funkcja ma 2 sekcje jedna odpowiada ze licznik a druga za kolor tła
  */}

export default function Counter() {
    const [count, setCount] = useState(0);
    {/*Zmienne które przechowują wartości licznika i nazwy klasy bazowe wartości to 0 i black */}
    const [color, setColor] = useState("black");
    var Class = color;
    {/*Piękne jest to że program przechowuje te zmienne dynamicznie a więc zmienna Class przechowuje nazwe klasy która jest opisana w app.css */}


    {/*Funkcja odpowiada ze zmienianie nazwy klasy które są strikte nałożone */}
    function zmienStan(){
        if(color=="black")
            setColor("red");
        else if(color=="red")
            setColor("white");
        else setColor("black");
    }
    return (
        <div className={Class}>
            {/*Przycisk odpowiadający za zwiększanie wartości */}
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            {/*Przycisk odpowiadający za zminiejszanie wartości ale wartość nie może spaść poniżej 0 */}
            <button onClick={() => setCount(count < 1 ? count : count - 1)}>
                Decrement
            </button>
            <h1>{count}</h1>
            {/*Zad 2 YUPPI */}
            {/*Przycisk który używa funkcji Zmień stan która przemienia nazwy klasy któe powodują zmiane kolorów */}
            <button onClick={() => zmienStan()}>
                Zmień stan
            </button>
            {/*Statyczne ustawienie klasy na black */}
            <button onClick={() => setColor("black")}>
                Black
            </button>
            {/*Statyczne ustawienie klasy na red */}
            <button onClick={() => setColor("red")}>
                Red
            </button>
            {/*Statyczne ustawienie klasy na white */}
            <button onClick={() => setColor("white")}>
                White
            </button>

        </div>


    );
}
