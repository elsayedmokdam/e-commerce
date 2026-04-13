import PageHeader from "@/components/shared/page-header/PageHeader";
import brandsIcon from "@/images/brandIcon.png";

export default function page() {
  return (
    <>
      <PageHeader
        title="Top Brands"
        pageName="Brands"
        subtitle="Shop from your favorite brands and discover new ones"
        bgColor="bg-linear-to-br from-[#7F22FE] via-[#8E51FF] to-[#C27AFF] "
        icon={brandsIcon.src}
        iconBgColor="bg-[#8E51FF]"
      />
      <div>Brands page</div>
    </>
  );
}
