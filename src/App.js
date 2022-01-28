import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [data, setData] = useState([]);

  console.log(longUrl, shortUrl);

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
    console.log(data);
    setData(data?.message);
  };

  return (
    <div>
      <Navbar />
      <div className="flex my-auto content-center">
        <form className="flex my-auto mx-auto flex-col content-center">
          <div>
            <label
              htmlFor="long_url"
              className="block text-sm font-medium text-gray-700"
            >
              Long Url
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="long_url"
                required
                id="long_url"
                onChange={(e) => setLongUrl(e.target.value)}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="short"
              className="block text-sm font-medium text-gray-700"
            >
              Short
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                required
                name="short"
                id="short"
                onChange={(e) => setShortUrl(e.target.value)}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
              />
            </div>
          </div>
          <div>{data && <>{data}</>}</div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="px-4 py-2 bg-gray-800 rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
