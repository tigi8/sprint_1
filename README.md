# Задание 1

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
# Задание 2

1. Компонент управления пользователями
Описание задач: Обеспечивает регистрацию и аутентификацию пользователей, управление профилями и ролями.
Функции:
Регистрация и аутентификация пользователей.
Управление профилем (изменение данных пользователя).
Назначение и проверка ролей (например, клиент, администратор).
Обрабатываемые данные: Данные пользователей, такие как имя, контактная информация, роли и права доступа.
Зачем выделен: Позволяет централизовать управление пользователями и обеспечивать аутентификацию для других компонентов.
2. Компонент управления заказами и арендой
Описание задач: Обработка заказов и аренды, управление статусами аукционов и объявлений.
Функции:
Создание и управление заказами и арендой.
Управление статусами аукционов и объявлений.
Поддержка различных этапов заказа и аренды.
Обрабатываемые данные: Данные о заказах, аренде, статусах аукционов, информации о предметах аренды.
Зачем выделен: Этот компонент обрабатывает ключевую бизнес-логику торговой площадки, что позволяет гибко масштабировать управление заказами и арендами независимо от других компонентов.
3. Компонент обработки платежей
Описание задач: Интеграция с внешними платёжными системами для обработки транзакций.
Функции:
Инициализация и подтверждение платежей.
Отслеживание статуса транзакций.
Взаимодействие с внешними платёжными сервисами, такими как TurboPay, FastMoney, Яндекс.Pay.
Обрабатываемые данные: Данные о транзакциях, статусах платежей и идентификаторах платёжных сессий.
Зачем выделен: Платёжные операции требуют надёжной и безопасной обработки, и их логически удобно изолировать для улучшения надёжности и безопасности всего приложения.
4. Компонент управления контентом
Описание задач: Управление объявлениями, товарами и услугами, доступными на платформе.
Функции:
Создание и публикация объявлений о товарах и услугах.
Редактирование и удаление объявлений.
Категоризация и фильтрация товаров и услуг.
Обрабатываемые данные: Данные о товарах, услугах, категориях, изображениях и описаниях объявлений.
Зачем выделен: Позволяет отделить контентную часть, связанную с отображением и редактированием предложений, что способствует лучшей организации и управляемости данных.
5. Компонент аналитики и отчётности
Описание задач: Генерация отчётов и аналитики по заказам и активности пользователей.
Функции:
Генерация отчётов по заказам, продажам и другим показателям.
Анализ поведения пользователей.
Обрабатываемые данные: Данные о заказах, активности пользователей, транзакциях и других действиях на платформе.
Зачем выделен: Этот компонент выполняет интенсивные вычислительные задачи, связанные с аналитикой, поэтому его изоляция позволяет гибко развивать и масштабировать аналитические функции.
6. Компонент профилей и уведомлений
Описание задач: Управление профилями пользователей и отправка уведомлений о статусах заказов и событий.
Функции:
Изменение настроек профиля пользователя.
Отправка уведомлений пользователям (например, об изменении статуса заказа).
Обрабатываемые данные: Данные профилей, настройки уведомлений и статусы, инициирующие отправку уведомлений.
Зачем выделен: Компонент позволяет централизованно управлять профилями пользователей и уведомлениями, улучшая качество пользовательского взаимодействия и обслуживания.
Обоснование декомпозиции
Разделение ответственности: Каждый компонент отвечает за отдельную предметную область, что снижает связанность между бизнес-логикой и упрощает поддержку.
Масштабируемость: Можно отдельно масштабировать компоненты, которые больше подвержены нагрузке, например, компонент платежей или аналитики.
Упрощение разработки и обновлений: Обновления и улучшения в одном компоненте можно вносить независимо, не затрагивая другие части приложения.
Эта структура поддерживает гибкость и масштабируемость системы, помогая улучшить надёжность и облегчить поддержку приложения в будущем.
