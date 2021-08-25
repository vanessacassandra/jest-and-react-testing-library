import React, { Suspense } from "react";

const Dog = React.lazy(() => import("./Dog"));

const SuspenseExample = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Dog />
      </Suspense>
    </>
  );
};

export default SuspenseExample;
