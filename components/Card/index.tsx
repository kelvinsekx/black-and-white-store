import Image from 'next/image';
import Link from 'next/link';
import { TProductInterface } from '../../utils/util';

export function Card({ product }: { product: TProductInterface }) {
  return (
    <Link href={`/shop/${product.name}`} key={product.id}>
      <div className="flex flex-col h-82 cursor-pointer w-full md:w-2/5 lg:w-30 gap-1">
        <div className="h-80 w-4/5 md:w-full self-center relative">
          <Image
            loader={() => product.imgSrc}
            src={product.imgSrc}
            layout="fill"
            alt={product.name}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="capitalize font-medium">{product.name}</div>
          <div className="underline underline-offset-1 text-black/[.72]">
            ${product.price}
          </div>
          <div className="text-xs">
            <b>Category: </b>
            {product.category}
          </div>
        </div>
      </div>
    </Link>
  );
}
