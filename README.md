# Mesto — Разделение на микрофронтенды

## Архитектура микрофронтендов
В проекте используется паттерн Webpack Module Federation для организации микрофронтендов.

### Обоснование выбора Webpack Module Federation
Webpack Module Federation подходит для такого подхода, так как он позволяет настраивать независимые точки входа для каждого микрофронтенда, а также обеспечивает возможность динамической загрузки компонентов. Благодаря этому, каждый микрофронтенд может разрабатываться, тестироваться и развертываться независимо от других частей проекта.

## Структура микрофронтендов
1. **auth-microfrontend** — отвечает за аутентификацию и регистрацию пользователей. Это отдельный микрофронтенд, так как вход и регистрация могут функционировать независимо от остальных частей приложения. Также это позволяет эффективно управлять процессами авторизации, разграничивая доступ к основным разделам.
```
/auth-microfrontend
src/components/Login.js — компонент для входа пользователя.
src/components/Register.js — компонент для регистрации нового пользователя.
src/styles/login.css и src/styles/register.css — стили для соответствующих компонентов.
src/utils/auth.js — утилиты для аутентификации, такие как обработка токенов и запросы к API.
index.js — точка входа микрофронтенда.
package.json — зависимости и скрипты для запуска.
webpack.config.js — конфигурация Webpack, включая настройку Module Federation.
```
2. **profile-microfrontend** — включает функции для отображения и редактирования профиля пользователя. Этот микрофронтенд изолирован, так как управление профилем пользователя — отдельный блок, который может изменяться или обновляться независимо от других частей.
```
/profile-microfrontend
src/components/Profile.js — основной компонент профиля.
src/components/EditProfile.js — компонент для редактирования профиля.
src/styles/profile.css — стили для профиля и его компонентов.
src/utils/profile.js — вспомогательные функции, такие как обновление данных профиля.
index.js — точка входа.
package.json и webpack.config.js.
```
3. **gallery-microfrontend** — основной функциональный блок для работы с галереей изображений. Он включает функции добавления, удаления и лайков для фото. Логика работы с изображениями отделена от аутентификации и профиля, что позволяет использовать её как автономный сервис.
```
/gallery-microfrontend
src/components/AddPhoto.js — компонент для добавления новых фото.
src/components/Photo.js — компонент, отображающий фото, с кнопками для лайков и удаления.
src/styles/gallery.css — стили для галереи.
src/utils/gallery.js — функции для добавления, удаления и лайков.
index.js — точка входа.
package.json и webpack.config.js.
```
