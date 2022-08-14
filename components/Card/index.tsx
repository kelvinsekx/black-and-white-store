import Image from 'next/image';
import Link from 'next/link';
import { TProductInterface } from '../../utils/util';

export function Card({ product }: { product: TProductInterface }) {
  return (
    <Link href={`/shop/${product.name}`} key={product.id}>
      <div className="flex flex-col h-82 cursor-pointer w-full md:w-2/5 lg:w-30">
        <div className="h-80 relative">
          <Image
            loader={() => product.imgSrc}
            src={product.imgSrc}
            layout="fill"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="capitalize font-medium text-[#333]">
            {product.name}
          </div>
          <div className="underline underline-offset-1 text-black/[.72]">
            ${product.price}
          </div>
          <div className="text-xs text-black/[.82]">
            <b>Category: </b>
            {product.category}
          </div>
        </div>
      </div>
    </Link>
  );
}
