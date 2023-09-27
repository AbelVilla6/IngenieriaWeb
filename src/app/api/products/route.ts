//1:
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(request: NextRequest) {
//   const res = {
//     products: [],
//   };

//   return NextResponse.json(res);
// }

//2:
import { ProductsResponse, getProducts } from '@/lib/handlers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest
): Promise<NextResponse<ProductsResponse>> {
  const products = await getProducts();

  return NextResponse.json(products);
}