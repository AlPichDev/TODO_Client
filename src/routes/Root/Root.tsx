import { Outlet, NavLink } from "react-router-dom";

export const Root = () => {
    return (
        <>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <NavLink to={'/'}>
                Главная
            </NavLink>
            <NavLink to={'/register'}>
                Регистрация
            </NavLink>
            <NavLink to={'/login'}>
                Вход
            </NavLink>
            <Outlet />
        </>
    )
};

