import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

import { getData, TProductInterface } from '../../utils/util';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getContext } from './../../utils/context';

export const getStaticProps: GetStaticProps = async (context) => {
  const itemID = context.params?.name;
  const data = await getData();

  const foundItem = data.find(
    (item: TProductInterface) => itemID === item.name,
  );

  if (!foundItem) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      productDetails: foundItem,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();
  const pathsWithParams = data.map((item: TProductInterface) => ({
    params: {
      name: item.name,
    },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

const List = (props: {
  productDetails: TProductInterface;
  hasError: boolean;
}) => {
  const router = useRouter();
  const { addToCart } = getContext();

  if (props.hasError) {
    return (
      <h2>): Error, please something is wrong with the parameter</h2>
    );
  }

  if (router.isFallback) {
    return <span>loading...</span>;
  }

  const { productDetails } = props;
  return (
    <>
      <Head>
        <title>shop a {productDetails.name}</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full lg:w-1/2 h-80 relative">
          <Image
            loader={() => productDetails.imgSrc}
            layout="fill"
            src={productDetails.imgSrc}
            alt={productDetails.name}
          />
        </div>
        <div className="flex flex-col gap-4 px-4 lg:p-0">
          <div>
            <div className="text-4xl capitalize font-semibold">
              {productDetails.name}
            </div>
            <div className="text-xl font-thin">
              ${productDetails.price}
            </div>
          </div>
          <p>{productDetails.description}</p>
          <div className="flex gap-2 text-sm">
            <span className="px-4 rounded border-solid border-2 border-gray-400">
              1
            </span>
            <button
              className="bg-gray-900 rounded text-slate-100 px-4"
              onClick={() => addToCart(productDetails)}
            >
              Add to cart
            </button>
          </div>
          <div className="text-sm">
            Category: {productDetails.category}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
