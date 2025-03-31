import ProductDetailContent from "@/components/ProductDetailContent";
import { getProductById } from "@/lib/service";
import {
    QueryClient,
    HydrationBoundary,
    dehydrate,
} from "@tanstack/react-query";

export default async function ProductDetail({ params }: { params: { id: string } }) {
    const queryClient = new QueryClient();
    const { id } = await params;

    await queryClient.prefetchQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id)
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ProductDetailContent id={id} />
        </HydrationBoundary>
    );
}
