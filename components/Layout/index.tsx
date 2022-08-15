import Navbar from './../Navbar';
import Footer from './../Footer';
import { Cart } from './../Cart/index';

import { getContext } from './../../utils/context';

type TProps = {
  children: JSX.Element;
};
export default function Layout({ children }: TProps): JSX.Element {
  const { showCart } = getContext();
  return (
    <div className="md:w-[90vw] lg:w-[92vw] m-auto text-[#3333333] opacity-90">
      <Navbar />
      {showCart ? <Cart /> : null}
      <main className="py-12 text-">{children}</main>
      <Footer />
    </div>
  );
}
