import ExchangeRate from "./components/ExchangeRate";
/* react-query: a data fetching library that handles caching,
 *  loading, and error state of our API call. */

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      method: "GET", // Default HTTP method for queries
      refetchOnWindowFocus: false, // Disable automatic refetching on window focus
      refetchInterval: 60000, // Refetch queries every 60 seconds
    },
  },
}); // Instantiate a new QueryClient instance

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ExchangeRate />
      </QueryClientProvider>
    </>
  );
}

export default App;
