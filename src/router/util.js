import router from '@/router';

const getRouteByName = name => {
    const routerArray = router.options.routes.filter(r => r.name === name);
    if (routerArray.length) {
        return routerArray[0].path;
    }
    return '/';
};

export const goTo = route => {
    if (typeof route === 'string') {
        route = getRouteByName(route);
    }
    router.push(route).catch(() => {
    });
};
