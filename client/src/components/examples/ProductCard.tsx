import ProductCard from '../ProductCard'
import chocolateChipImage from "@assets/generated_images/Chocolate_chip_cookies_product_3547a8a9.png"

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard
        id="example"
        name="Cookies de Chocolate Chip"
        description="Clássicos cookies com gotas de chocolate belga premium, massa dourada e crocante por fora, macia por dentro."
        price={18.90}
        originalPrice={22.90}
        image={chocolateChipImage}
        rating={5}
        reviewCount={127}
        isNew={true}
        category="Cookies"
      />
    </div>
  )
}