import Image from 'next/image';
import { getContext } from '../../utils/context';

import { TProductInterface } from '../../utils/util';

export function CartItem({
  productDetails,
}: {
  productDetails: TProductInterface;
}) {
  const { addToCart } = getContext();
  return (
    <div className="flex gap-8">
      <div className="w-20 h-20 relative">
        <Image
          loader={() => productDetails.imgSrc}
          layout="fill"
          src={productDetails.imgSrc}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <div className="text-xl capitalize font-semibold">
            {productDetails.name}
          </div>
          <div className="text-xl font-thin">
            ${productDetails.price}
          </div>
        </div>
        <div className="text-sm">Qty: {1}</div>
      </div>
    </div>
  );
}
