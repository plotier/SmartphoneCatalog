import { getProducts } from "@/api/service";
import {
	QueryClient,
	HydrationBoundary,
	dehydrate,
} from "@tanstack/react-query";
import ProductsList from "@/components/ProductsList";
import Search from "@/components/Search";

export default async function Home() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["products", ""],
		queryFn: () => getProducts({ limit: 20 })
	});

	return (
		<main>
			<Search />
			<HydrationBoundary state={dehydrate(queryClient)}>
				<ProductsList />
			</HydrationBoundary>
		</main>
	);
}
