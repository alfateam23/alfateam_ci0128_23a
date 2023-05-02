//import React from "react";
import { useState } from 'react';

const Parcelas = () => {
    // Initializing state
    const [showInfo, setShowInfo] = useState(false);
    const [selectedButton, setSelectedButton] = useState('');

    // Handler
    const handleButtonClick = (buttonText) => {
        setShowInfo(true);
        setSelectedButton(buttonText);
    };
    return (
        <div className='bg-slate-600 min-h-screen'>
            <h1 className="text-center mb-6 text-4xl font-bold py-12">
                Esta es a página de elección de parcelas
            </h1>
            <div className="flex items-center ">
                <div className="max-w-4xl mx-auto">
                    <div class="grid grid-cols-12 grid-rows-3 gap-x-4 gap-y-12 ">
                        <button className="col-start-1 row-end-1 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 1')}>
                            Parcela 1
                        </button>
                        <button className="col-start-2 row-end-1 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 2')}>
                            Parcela 2
                        </button>
                        <button className="col-start-3 row-end-1 bg-yellow-400 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 3')}> 
                            Parcela 3
                        </button>
                        <button className="col-start-2 row-end-2 bg-purple-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 4')}> 
                            Parcela 4
                        </button>
                        <button className="col-start-3 row-end-2 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 5')}> 
                            Parcela 5
                        </button>
                        <button className="col-start-5 row-end-1 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 6')}> 
                            Parcela 6
                        </button>
                        <button className="col-start-5 row-end-2 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 7')}> 
                            Parcela 7
                        </button>
                        <button className="col-start-6 row-end-3 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 8')}> 
                            Parcela 8
                        </button>
                        <button className="col-start-7 row-end-3 bg-purple-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 9')}> 
                            Parcela 9
                        </button>
                        <button className="col-start-6 row-end-2 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 10')}> 
                            Parcela 10
                        </button>
                        <button className="col-start-6 row-end-1 bg-yellow-400 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 11')}> 
                            Parcela 11
                        </button>
                        <button className="col-start-8 row-end-1 bg-yellow-400 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 12')}> 
                            Parcela 12
                        </button>
                        <button className="col-start-8 row-end-2 bg-yellow-400 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 13')}> 
                            Parcela 13
                        </button>
                        <button className="col-start-8 row-end-3 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 14')}> 
                            Parcela 14
                        </button>
                        <button className="col-start-9 row-end-3 bg-purple-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 15')}> 
                            Parcela 15
                        </button>
                        <button className="col-start-9 row-end-2 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 16')}> 
                            Parcela 16
                        </button>
                        <button className="col-start-9 row-end-1 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 17')}> 
                            Parcela 17
                        </button>
                        <button className="col-start-11 row-end-1 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 18')}> 
                            Parcela 18
                        </button>
                        <button className="col-start-11 row-end-2 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 19')}> 
                            Parcela 19
                        </button>
                        <button className="col-start-10 row-end-3 bg-purple-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 20')}> 
                            Parcela 20
                        </button>
                        <button className="col-start-11 row-end-3 bg-purple-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 21')}> 
                            Parcela 21
                        </button>
                        <button className="col-start-12 row-end-3 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 22')}> 
                            Parcela 22
                         </button>
                        <button className="col-start-12 row-end-2 bg-purple-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 23')}>
                            Parcela 23 </button>
                        <button className="col-start-12 row-end-1 bg-blue-500 rounded-lg shadow-xl text-white" onClick={() => handleButtonClick('Button 24')}>
                            Parcela 24
                        </button>
                    </div>
                </div>
            </div>
            <div className=' m-auto p-8'>
                {showInfo && (
                    <div>
                        <h1 className='text-center my-6 text-4xl font-bold'>Información de la Parcela Seleccionada:</h1>
                        <p className='text-center'>Information for {selectedButton}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Parcelas