import CCollapse from "./CCollapse";
import Collapse from "./Collapse";
import PCollapse from "./PCollapse";
import RCollapose from "./RCollapse";
import SCollapose from "./SCollapse";

export default function Sidebar() {
  return (
    <>
      <section className="w-60 max-md:w-full max-md:mb-4 h-full flex flex-col justify-start items-center">
        <Collapse
          list={[
            "Mobile accessory",
            "Electronics",
            "Smartphones",
            "Modern tech",
          ]}
          title="Category"
        />
        <CCollapse
          list={["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"]}
          title="Brands"
        />
        <CCollapse
          list={[
            "Metallic",
            "Plastic cover",
            "8GB Ram",
            "Super power",
            "Large Memory",
          ]}
          title="Features"
        />
        <PCollapse />
        <RCollapose
          list={["Refurbished", "Brand new", "Old items"]}
          title="Condition"
        />
        <SCollapose />
      </section>
    </>
  );
}
