import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ChevronLeft, CreditCard, AlertCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CarritoPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Tu Carrito</h1>

        {items.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-soft p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCart size={64} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Parece que aún no has añadido ningún curso a tu carrito
            </p>
            <Link
              to="/cursos"
              className="btn btn-primary inline-flex items-center"
            >
              <ChevronLeft size={16} className="mr-2" />
              Explorar cursos
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-soft overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-semibold">Productos ({totalItems})</h2>
                </div>

                <ul className="divide-y divide-gray-200 dark:divide-gray-800">
                  {items.map((item) => (
                    <li key={item.id} className="p-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="w-full sm:w-20 h-20 rounded-md overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-medium text-gray-900 dark:text-white text-lg">{item.name}</h3>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold mt-1">
                            S/ {item.price.toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="w-full sm:w-auto flex items-center gap-3 mt-3 sm:mt-0">
                          <div className="flex items-center">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-l-md bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                              className="w-12 h-8 border-y border-gray-300 dark:border-gray-700 text-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                            />
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-r-md bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                            >
                              +
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                            aria-label="Eliminar"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 flex justify-between">
                  <button
                    onClick={clearCart}
                    className="text-red-600 dark:text-red-400 hover:underline flex items-center text-sm font-medium"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Vaciar carrito
                  </button>
                  
                  <Link
                    to="/cursos"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center text-sm font-medium"
                  >
                    <ChevronLeft size={16} className="mr-1" />
                    Seguir comprando
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-soft overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-semibold">Resumen del pedido</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                      <span className="font-medium">S/ {totalPrice.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Descuento</span>
                      <span className="font-medium">S/ 0.00</span>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-4 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-lg">S/ {totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button
                    className="mt-6 w-full btn btn-primary py-3 flex items-center justify-center"
                  >
                    <CreditCard size={18} className="mr-2" />
                    Proceder al pago
                  </button>
                  
                  <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md flex items-start">
                    <AlertCircle size={18} className="text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      Al realizar tu compra, aceptas nuestros <a href="/terminos" className="underline hover:text-blue-700 dark:hover:text-blue-200">Términos y Condiciones</a> y <a href="/privacidad" className="underline hover:text-blue-700 dark:hover:text-blue-200"> Política de Privacidad</a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Secure Payment */}
              <div className="mt-6 bg-white dark:bg-gray-900 rounded-lg shadow-soft p-6">
                <h3 className="text-lg font-semibold mb-3">Pago seguro</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Todas las transacciones son seguras y están encriptadas.
                </p>
                <div className="flex items-center space-x-3">
                  {/* Credit card icons would go here */}
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recommended Courses */}
        {items.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">También te podría interesar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* This would typically be dynamically generated based on user preferences */}
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-soft">
                <div className="h-40 bg-gray-200 dark:bg-gray-800"></div>
                <div className="p-4">
                  <h3 className="font-medium">Curso recomendado 1</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mt-1">S/ 199.99</p>
                  <button className="mt-2 w-full btn btn-outline py-1">Añadir al carrito</button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-soft">
                <div className="h-40 bg-gray-200 dark:bg-gray-800"></div>
                <div className="p-4">
                  <h3 className="font-medium">Curso recomendado 2</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mt-1">S/ 249.99</p>
                  <button className="mt-2 w-full btn btn-outline py-1">Añadir al carrito</button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-soft">
                <div className="h-40 bg-gray-200 dark:bg-gray-800"></div>
                <div className="p-4">
                  <h3 className="font-medium">Curso recomendado 3</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mt-1">S/ 179.99</p>
                  <button className="mt-2 w-full btn btn-outline py-1">Añadir al carrito</button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CarritoPage;