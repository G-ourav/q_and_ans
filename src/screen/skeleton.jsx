import React from "react";

const Skeleton = () => {
  return (
    <div className="p-10">
      <div className="p-10 bg-slate-300 rounded-2xl animate-pulse">
        <div className="md:flex pb-5 text-lg justify-between gap-2">
          <div className="p-2">
            <div className="rounded-2xl p-2 shadow-2xl bg-teal-200 w-32 h-6"></div>
          </div>
          <div className="flex py-2 gap-4">
            <div className="rounded-full p-5 shadow-2xl bg-red-200 w-20 h-10"></div>
          </div>
        </div>
        <p className="p-5 rounded-2xl text-white bg-gray-800 h-10"></p>
        <div className="grid gap-4 py-6">
          <div className="h-10 bg-slate-400 rounded-xl"></div>
          <div className="h-10 bg-slate-400 rounded-xl"></div>
          <div className="h-10 bg-slate-400 rounded-xl"></div>
          <div className="h-10 bg-slate-400 rounded-xl"></div>
        </div>
        <button className="bg-slate-800 text-white shadow-2xl px-3 py-1 rounded-xl uppercase text-lg w-32 h-10"></button>
      </div>
    </div>
  );
};

export default Skeleton;
