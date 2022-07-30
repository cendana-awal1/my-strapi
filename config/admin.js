module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9fd04d4fbeb360738da9f65c8238ee0b'),
  },
});
