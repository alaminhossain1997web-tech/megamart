
import React from "react";
import Heading from "../SectionHeading/Heading";
import Card from "../ui/Card";
import { useGetProductsQuery } from "../../Services/api";

const BestDeal = () => {
  const { data, isError, isLoading } = useGetProductsQuery({
    limit: 5,
    category: "smartphones",
  });

  return (
    <section className="py-20">
      <div className="container">
        <Heading
          title="Grab the best deal on"
          highlight="Smartphones"
          afterwidth="after:w-96"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 mt-10">
          {data?.products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeal;
