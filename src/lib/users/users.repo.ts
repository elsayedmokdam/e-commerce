import { changeMyPasswordService } from "./changeMyPassword.service";
import { updateMeService } from "./updateMe.service";
import { getUsersService } from "./getUsers.service";

export const UsersRepo = {
  changeMyPassword: changeMyPasswordService,
  updateMe: updateMeService,
  getUsers: getUsersService,
};
