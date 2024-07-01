import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const popularProducts = [
	{
		id: '3432',
		product_name: 'Canon Camera',
		product_thumbnail: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'MackBook Air 1',
		product_thumbnail: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600',
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'Guess Watch',
		product_thumbnail: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600',
		product_price: '$899.00',
		product_stock: 56
	},
	{
		id: '9234',
		product_name: 'Boat Headphones',
		product_thumbnail: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600',
		product_price: '$499.00',
		product_stock: 98
	},
	{
		id: '4314',
		product_name: 'Canon Camera Lens',
		product_thumbnail: 'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600',
		product_price: '$699.00',
		product_stock: 0
	},
	{
		id: '4342',
		product_name: 'HP Keyboard',
		product_thumbnail: 'https://images.pexels.com/photos/4383928/pexels-photo-4383928.jpeg?auto=compress&cs=tinysrgb&w=600',
		product_price: '$399.00',
		product_stock: 453
	}
]

function PopularProducts() {
	return (
		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Popular Products</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={product.product_thumbnail}
								alt={product.product_name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.product_name}</p>
							<span
								className={classNames(
									product.product_stock === 0
										? 'text-red-500'
										: product.product_stock > 50
										? 'text-green-500'
										: 'text-orange-500',
									'text-xs font-medium'
								)}
							>
								{product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default PopularProducts  