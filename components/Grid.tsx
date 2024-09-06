import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item: any) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            className={item.className}
            title={item.title}
            description={item.description}
            img={item.img}
            spareImg={item.spareImg}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
