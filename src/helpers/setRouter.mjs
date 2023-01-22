export default function setRouter(app, router){
    app
    .use(
        router.routes()
    )
    .use(
        router.allowedMethods()
    );
}