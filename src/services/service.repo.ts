import { AuthRepo } from "./auth/auth.repo";
import { UsersRepo } from "./users/users.repo";
import { CategoriesRepo } from "./categories/categories.repo";
import { SubcategoriesRepo } from "./subcategories/subcategories.repo";
import { BrandsRepo } from "./brands/brands.repo";
import { ProductsRepo } from "./products/products.repo";
import { WishlistRepo } from "./wishlist/wishlist.repo";
import { AddressesRepo } from "./addresses/addresses.repo";
import { CartRepo } from "./cart/cart.repo";
import { ReviewsRepo } from "./reviews/reviews.repo";
import { OrdersRepo } from "./orders/orders.repo";

export const $SERVICE_REPOSITORY = {
  Auth: AuthRepo,
  Users: UsersRepo,
  Categories: CategoriesRepo,
  Subcategories: SubcategoriesRepo,
  Brands: BrandsRepo,
  Products: ProductsRepo,
  Wishlist: WishlistRepo,
  Addresses: AddressesRepo,
  Cart: CartRepo,
  Reviews: ReviewsRepo,
  Orders: OrdersRepo,
};

export default $SERVICE_REPOSITORY;
