import ProductDetailContent from "@/components/ProductDetailContent";
import { getProductById } from "@/api/service";
import {
    QueryClient,
    HydrationBoundary,
    dehydrate,
} from "@tanstack/react-query";

type PageProps = {
    params: Promise<{ id: string }>; 
};

export default async function ProductDetail({ params }: PageProps) {
    const { id } = await params; 

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ProductDetailContent id={id} />
        </HydrationBoundary>
    );
}
