import React from "react";

const Tarifas = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    async function getGet() {
        fetch("/tarifas")
            .then((res) => res.json())
            .then((data) => setData(data.info));
    }

    return (
        <div>
            <h1 className="font-bold text-xl">Tarifas</h1>
            <button id="get" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={getGet}>Change Text</button>
            <p> {!data ? "Loading..." : data} </p>
        </div>
    );
};

export default Tarifas;