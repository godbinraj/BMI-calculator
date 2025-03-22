import React, { useState } from 'react'
import BMI from "../BMi/BMI.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Bmi() {
    const [height, setheight] = useState('');
    const [weight, setweight] = useState('');
    const [heightUnit, setheightUnit] = useState('cm');
    const [weightUnit, setweightUnit] = useState('kg')
    const [bmi, setBmi] = useState("")
    const [category,setCategory]=useState("")

    const convertHeg=()=>{
    if (heightUnit == 'feet') {
        return height * 30.47999902;
    } else {
       return height;
    }}

    const convertWeg=()=>{

    if (weightUnit == 'lbs') {
        return weight * 0.45359237;
    } else {
       return weight;
    }
}



const calculate = (e) => {
    e.preventDefault();  // Corrected typo here

    const convertedHeight = convertHeg();
    const convertedWeight = convertWeg();
    const calculatedBmi = convertedWeight / (convertedHeight / 100) ** 2;
    setBmi("your's Bmi : " + calculatedBmi.toFixed(2)); 

    
    if(calculatedBmi < 18.5){
        setCategory("you in underweight");
    }else if(calculatedBmi >=18.5 && calculatedBmi <= 24.5) {
        setCategory("you in normalweight");
    } else {
        setCategory("you in overweight ");
        
    }
};


    return (
        <div className='bmi '>
            <div className='calcul mt-5'>
                <span className='topic text-white '>Bmi calculator</span>
                <div className='height mt-5'>
                    <span className='heg text-white'>Height :</span>

                    <input type="number"
                        className='input-heg'
                        value={height}
                        onChange={(e)=>setheight(e.target.value)} />

                    <div class="dropdown">
                        <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            {heightUnit}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onClick={() => setheightUnit('feet')}>feet</a></li>
                            <li><a class="dropdown-item" href="#" onClick={() => setheightUnit('cm')}>cm</a></li>
                        </ul>
                    </div>
                </div>

                <div className='weight mt-3'>
                    <span className='weg text-white'>Weight :</span>
                    <input type="number"
                        className='input-weg'
                       
                        value={weight}
                        onChange={(e) => setweight(e.target.value)}
                    />

                    <div class="dropdown">
                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
                            {weightUnit}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onClick={() => setweightUnit('kg')} >kg</a></li>
                            <li><a class="dropdown-item" href="#" onClick={() => setweightUnit('lbs')}>lbs</a></li>
                        </ul>
                    </div>
                </div>
                <button className='calculate mt-5' onClick={calculate}>calculate</button><br />
                <p className='result mt-5'>{bmi}</p>
                <p className='categories mt-4'> {category}</p>

            </div>
        </div>
    )
}

export default Bmi
