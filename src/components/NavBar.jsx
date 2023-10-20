/* eslint-disable react/no-unescaped-entities */
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Search from './Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="min-w-[1000px]">
      {/* LEFT */}
      <div className="flex bg-amazonclone text-white h-[60px]">
        <div className="flex items-center m-4">
          <Link to={"/"}>
          <img
            className="h-[35px] w-[100px] m-2"
            src={"../images/amazon.png"}
            alt=""
          /></Link>
          <div className="px-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">Türkiye</div>
          </div>
        </div>
        {/* MIDDLE */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* RIGHT */}
        <div className="flex items-center m-4">
          <div className="px-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">Account & Lists</div>
          </div>
          <div className="px-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
          <div className="flex px-3 ">
                <ShoppingCartIcon className='h-[48px]'/>
                <div className='relative'>
                    <div className='absolute rigt-[9px] font-bold m-2 text-orange-400'>
                      {cart === 0 ? "" : cart}
                    </div>
                </div>
                <div className='mt-7 text-xs xl:text-sm font-bold'>
                  Cart
                </div>
          </div>
          </Link>
        </div>
      </div>
      <div className='flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6'>
        <div>Today's Deals</div>
        <div>Costumer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
    
  
  );
};

export default NavBar;
