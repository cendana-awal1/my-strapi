module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aa6a3b2645dd3a851fdf5a0980753ad8'),
  },
});
