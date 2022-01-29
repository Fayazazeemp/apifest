import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
// import axios from "axios";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await fetch("https://sooditk.ml/create", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        long_url: longUrl,
        short: shortUrl,
      }),
    });
    data = await data.json();
    setData(data);
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <div className="w-screen">
        <Navbar />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <form className="flex-col content-center">
          <div className="mb-5">
            <label
              htmlFor="long_url"
              className="block text-sm font-medium text-gray-700"
            >
              Long Url<span className="text-red-600">*</span>
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="long_url"
                id="long_url"
                required
                onChange={(e) => setLongUrl(e.target.value)}
                className="focus:ring-indigo-500 ring-indigo-300 border-indigo-300 focus:border-indigo-500 block w-full pl-7 pr-12 py-3 sm:text-sm rounded-md"
                placeholder="Enter Long URL"
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="short"
              className="block text-sm font-medium text-gray-700"
            >
              Short
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="short"
                id="short"
                onChange={(e) => setShortUrl(e.target.value)}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-3 sm:text-sm border-gray-300 rounded-md"
                placeholder="Optional"
              />
            </div>
          </div>
          <div>
            {data && (
              <>
                {data.status === "Error" && (
                  <div className="p-4 bg-red-300 rounded-lg">
                    Is Not a Valid Url!
                  </div>
                )}
                {data.status === "Error!" && (
                  <div className="p-4 bg-cyan-300 rounded-lg">
                    Short Url Already Exits!
                  </div>
                )}
                {data.status === "success" && (
                  <div className="p-4 bg-green-300 rounded-lg">
                    <div>{data.message}</div>
                    <a
                      href={`https://${data.message}`}
                      rel="noreferrer"
                      target="_blank"
                    >{`https://${data.message}`}</a>
                  </div>
                )}
              </>
            )}
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="px-4 py-2 bg-gray-800 mt-5 rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
