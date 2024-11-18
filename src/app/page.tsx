import React, { Suspense, lazy } from 'react';

const Header = lazy(() => import("../components/Header"));
const Audience = lazy(() => import("../components/Audience"));
const Features = lazy(() => import("../components/Features"));
const Functions = lazy(() => import("../components/Functions"));
const Product = lazy(() => import("../components/Product"));
const Pricing = lazy(() => import("../components/Pricing"));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Features />
        <Functions />
        <Audience />
        <Product />
        <Pricing />
      </Suspense>
    </main>
  );
}
