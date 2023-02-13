import Navbar from "@/components/allPageComponent/navbar";

function ButtonComponents()
{
    return(
        <div className="w-full h-screen bg-patternCrossDark flex flex-col justify-start items-center overflow-scroll py-4 text-black">
            <div className="w-11/12 py-2 bg-purple-400 flex flex-col rounded-md justify-center items-center">
                <div className="flex flex-row px-4 flex-wrap gap-x-4 w-full h-full">
                    <button className="bg-black text-xl w-auto h-10 text-white p-4 rounded-md flex justify-center items-center">Click Me !</button>
                    <button className="bg-red-500 text-xl w-auto h-10 text-white p-4 rounded-md flex justify-center items-center">Click Me !</button>
                    <button className="bg-blue-500 text-xl w-auto h-10 text-white p-4 rounded-md flex justify-center items-center">Click Me !</button>
                    <button className="bg-green-500 text-xl w-auto h-10 text-white p-4 rounded-md flex justify-center items-center">Click Me !</button>
                    <button className="bg-yellow-500 text-xl w-auto h-10 text-white p-4 rounded-md flex justify-center items-center">Click Me !</button>
                    <button className="bg-cyan-500 text-xl w-auto h-10 text-white p-4 rounded-md flex justify-center items-center">Click Me !</button>
                    <button className="bg-gray-500 text-xl w-auto h-10 text-white p-4 rounded-md flex justify-center items-center">Click Me !</button>
                </div>
                <div className="w-11/12 border-b-2 mt-2 mb-2"></div>
            </div>
            
        </div>
    );
}

export default function ButtonHome(){
    return(
        <div className="w-full h-screen flex flex-row">
            <Navbar/>
            <ButtonComponents/>
        </div>
    );
}