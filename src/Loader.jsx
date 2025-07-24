import React from 'react'

const Loader = () => {
  return (
    //<div>Loading ....</div>
     <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] transition-opacity duration-500">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-white text-lg font-medium">Loading...</p>
    </div>
  )
}

export default Loader