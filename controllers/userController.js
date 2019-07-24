import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("Join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("Join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
    } catch (error) {
      console.log(error);
    }

    res.redirect(routes.home);
  }
};
export const getLogin = (req, res) => {
  res.render("Login", { pageTitle: "Log In" });
};
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("Users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("UserDetail", { pageTitle: "UserDetail" });
export const editProfile = (req, res) =>
  res.render("EditProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("ChangePassword", { pageTitle: "Change Password" });
