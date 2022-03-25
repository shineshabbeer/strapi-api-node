module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bb146df84843bd26895c21fb6632c423'),
  },
});
