import React from 'react'
import { Link } from 'react-router'
import { MdDeleteOutline } from 'react-icons/md'
import { useCart } from '../Services/cart.jsx'

const Sopingcart = () => {
  const { cartItems, subtotal, shipping, total, updateQuantity, removeItem, clearCart, statusMessage } = useCart();

  return (
    <section className='bg-secondary min-h-screen py-10'>
      <div className='container'>
        <div className='mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-brand'>Your Cart</p>
            <h1 className='mt-2 text-3xl font-bold text-gray-900'>Shopping Cart</h1>
            <p className='mt-2 text-sm text-gray-500'>Unique products are merged automatically and quantity updates stay in sync.</p>
          </div>
          {cartItems.length ? (
            <button
              type='button'
              onClick={clearCart}
              className='inline-flex items-center justify-center rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-red-300 hover:text-red-500'>
              Clear Cart
            </button>
          ) : null}
        </div>

        {statusMessage ? (
          <div className='mb-6 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-brand shadow-sm'>
            {statusMessage}
          </div>
        ) : null}

        {!cartItems.length ? (
          <div className='rounded-3xl bg-white p-8 text-center shadow-sm'>
            <h2 className='text-2xl font-semibold text-gray-800'>Your cart is empty</h2>
            <p className='mt-3 text-gray-500'>Add a few products and they will appear here with unique quantities.</p>
            <Link
              to='/shop'
              className='mt-6 inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand/85'>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className='grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]'>
            <div className='space-y-4'>
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className='rounded-3xl bg-white p-4 shadow-sm sm:p-5'>
                  <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
                    <Link
                      to={`/shop/productdetails/${item.id}`}
                      className='flex h-28 w-full items-center justify-center rounded-2xl bg-secondary sm:w-32'>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className='max-h-24 max-w-full object-contain'
                      />
                    </Link>

                    <div className='flex-1'>
                      <div className='flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between'>
                        <div>
                          <Link
                            to={`/shop/productdetails/${item.id}`}
                            className='text-lg font-semibold text-gray-900 transition hover:text-brand'>
                            {item.title}
                          </Link>
                          <p className='mt-1 text-sm text-gray-500'>
                            {item.brand || 'Generic item'} {item.category ? `| ${item.category}` : ''}
                          </p>
                          <p className='mt-2 text-base font-bold text-gray-900'>${item.price.toFixed(2)}</p>
                        </div>
                        <button
                          type='button'
                          onClick={() => removeItem(item.id)}
                          className='inline-flex items-center gap-1 self-start rounded-full border border-gray-200 px-3 py-2 text-sm font-medium text-gray-500 transition hover:border-red-300 hover:text-red-500'>
                          <MdDeleteOutline className='text-lg' />
                          Remove
                        </button>
                      </div>

                      <div className='mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                        <div className='flex w-fit items-center gap-4 rounded-full border border-gray-200 px-2 py-2'>
                          <button
                            type='button'
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-lg font-bold text-gray-700 transition hover:bg-brand hover:text-white'>
                            -
                          </button>
                          <span className='min-w-6 text-center font-semibold text-gray-800'>{item.quantity}</span>
                          <button
                            type='button'
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-lg font-bold text-gray-700 transition hover:bg-brand hover:text-white'>
                            +
                          </button>
                        </div>

                        <p className='text-lg font-bold text-brand'>
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className='rounded-3xl bg-white p-6 shadow-sm h-fit xl:sticky xl:top-36'>
              <h2 className='text-2xl font-bold text-gray-900'>Order Summary</h2>
              <div className='mt-6 space-y-4 text-sm text-gray-600'>
                <div className='flex items-center justify-between'>
                  <span>Subtotal</span>
                  <span className='font-semibold text-gray-900'>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span>Shipping</span>
                  <span className='font-semibold text-gray-900'>${shipping.toFixed(2)}</span>
                </div>
                <div className='border-t border-dashed border-gray-200 pt-4'>
                  <div className='flex items-center justify-between text-base'>
                    <span className='font-semibold text-gray-900'>Total</span>
                    <span className='text-2xl font-bold text-brand'>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                type='button'
                className='mt-6 w-full rounded-2xl bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand/85'>
                Proceed to Checkout
              </button>
              <Link
                to='/shop'
                className='mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-brand px-5 py-3 font-semibold text-brand transition hover:bg-brand hover:text-white'>
                Add More Products
              </Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}

export default Sopingcart
