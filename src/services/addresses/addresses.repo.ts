import { addAddressService } from "./addAddress.service";
import { getAddressesService } from "./getAddresses.service";
import { getAddressByIdService } from "./getAddressById.service";
import { removeAddressService } from "./removeAddress.service";

export const AddressesRepo = {
  addAddress: addAddressService,
  getAddresses: getAddressesService,
  getAddressById: getAddressByIdService,
  removeAddress: removeAddressService,
};
