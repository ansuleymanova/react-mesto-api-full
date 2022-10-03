const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { regEx } = require('../utils/consts');
const {
  getUsers,
  getUser,
  patchUser,
  patchAvatar,
  getSelf,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getSelf);
router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
}), getUser);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), patchUser);
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required()
      .regex(regEx),
  }),
}), patchAvatar);

module.exports = router;
