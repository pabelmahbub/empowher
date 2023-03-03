import React from 'react';
const Spinner = require('react-spinkit');

function Loading() {
  return (
        <div className="flex justify-center items-center h-screen">
              <div className="grid gap-2">
                    <div className="flex items-center justify-center ">
                        <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                    </div>
               </div>
         </div>
  )
}

export default Loading