import React from 'react'

const Sopingcart = () => {
  
  return (
    <div className="max-w-4xl mx-auto p-5">
  <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

  <div className="space-y-6">
    <div className="flex items-center border rounded-lg p-4 gap-4">
      <img
        src="phone2.png"
        alt="Men's Casual Premium Slim Fit T-Shirts"
        className="w-24 h-24 object-contain rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">Men's Casual Premium Slim Fit T-Shirts</h3>
        <p className="text-gray-600">$22.30</p>
        <div className="flex items-center gap-3 mt-3">
          <button className="w-8 h-8 bg-gray-200 rounded-full font-bold cursor-not-allowed">-</button>
          <span className="font-semibold">2</span>
          <button className="w-8 h-8 bg-gray-200 rounded-full font-bold cursor-not-allowed">+</button>
        </div>
      </div>
      <div className="font-semibold text-lg">$44.60</div>
    </div>

    <div className="flex items-center border rounded-lg p-4 gap-4">
      <img
        src=""
        alt="Fjallraven - Foldsack No. 1 Backpack"
        className="w-24 h-24 object-contain rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">Fjallraven - Foldsack No. 1 Backpack</h3>
        <p className="text-gray-600">$109.95</p>
        <div className="flex items-center gap-3 mt-3">
          <button className="w-8 h-8 bg-gray-200 rounded-full font-bold cursor-not-allowed">-</button>
          <span className="font-semibold">1</span>
          <button className="w-8 h-8 bg-gray-200 rounded-full font-bold cursor-not-allowed">+</button>
        </div>
      </div>
      <div className="font-semibold text-lg">$109.95</div>
    </div>
  </div>

  <div className="flex justify-end mt-8 text-xl font-bold">
    Total: $154.55
  </div>

  <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
    Proceed to Checkout
  </button>
</div>
  )
}

export default Sopingcart
