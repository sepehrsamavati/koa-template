import Router from '@koa/router';

const router = new Router({
    prefix: '/api'
});

router
.get('/', ctx => {
    ctx.body = {
        message: "Welcome to API"
    };
});

export default router;