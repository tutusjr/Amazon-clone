/* eslint-disable react/prop-types */
import {StarIcon} from '@heroicons/react/24/outline'

const ProductRatings = (props) => {
    const starNumber = props.avgRating;
    const ratingNumber = props.ratings;

  return (
    <div className='flex'>
        {
            Array.from ({length:starNumber} , (_, i) => <StarIcon key={i} className='stroke-[#F1b61F] fill-[#f1b61f] h-[20px]'/>)
        }
        {
            Array.from ({length: 5 - starNumber} , (_, i) => <StarIcon key={i} className='stroke-[#F1b61F] h-[20px]'/>)
        }
        <span className='ml-3 text-blue-500'>{ratingNumber} ratings</span>
    </div>
  )
}

export default ProductRatings