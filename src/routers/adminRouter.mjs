import Router from '@koa/router';

const router = new Router({
    prefix: '/admin'
});

router
.get('/', ctx => {
    ctx.body = "Welcome to admin dashboard";
});

export default router;