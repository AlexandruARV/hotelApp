import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import "./index.css";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Cabins from "./pages/Cabins";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout></AppLayout>}>
            <Route path="/" element={<Dashboard></Dashboard>}></Route>
            <Route path="cabins" element={<Cabins />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "10px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "24px",
            maxWidth: "500px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
