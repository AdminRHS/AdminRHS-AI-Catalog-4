# Настройка Dropbox Access Token для GitHub Actions

## Проблема: Истекший токен (expired_access_token)

Если вы видите ошибку `expired_access_token` в логах GitHub Actions, это означает, что Dropbox Access Token истек и его нужно обновить.

## Как обновить токен

### Шаг 1: Создать/обновить Dropbox App

1. Перейдите на https://www.dropbox.com/developers/apps
2. Войдите в свой аккаунт Dropbox
3. Если у вас уже есть приложение:
   - Нажмите на него
   - Перейдите в раздел "Permissions"
   - Убедитесь, что включены права на чтение файлов
4. Если приложения нет:
   - Нажмите "Create app"
   - Выберите "Scoped access"
   - Выберите "Full Dropbox" или "App folder" (в зависимости от ваших нужд)
   - Назовите приложение (например, "AI Catalog Sync")
   - Нажмите "Create app"

### Шаг 2: Сгенерировать Access Token

1. В настройках вашего приложения перейдите в раздел "OAuth 2"
2. Прокрутите до секции "Generated access token"
3. Нажмите "Generate" рядом с "Access token"
4. Скопируйте сгенерированный токен (он показывается только один раз!)

### Шаг 3: Обновить токен в GitHub Secrets

1. Перейдите в ваш репозиторий на GitHub: `https://github.com/AdminRHS/AdminRHS-AI-Catalog-4`
2. Нажмите на вкладку **Settings**
3. В левом меню выберите **Secrets and variables** > **Actions**
4. Найдите секрет `DROPBOX_ACCESS_TOKEN`
5. Нажмите на него и выберите **Update**
6. Вставьте новый токен в поле "Value"
7. Нажмите **Update secret**

### Шаг 4: Проверить работу

1. Перейдите в раздел **Actions** репозитория
2. Найдите workflow "Sync AI Catalog from AI_list.json"
3. Нажмите **Run workflow** > **Run workflow** (для ручного запуска)
4. Проверьте логи выполнения - ошибка должна исчезнуть

## Альтернатива: Refresh Token (для долгосрочного решения)

Если токены часто истекают, рассмотрите использование Refresh Token:

1. Настройте OAuth 2.0 flow в вашем приложении
2. Используйте Refresh Token для автоматического обновления Access Token
3. Это требует более сложной настройки, но токены не будут истекать

## Проверка токена

Вы можете проверить, работает ли токен, выполнив:

```bash
curl -X POST https://api.dropboxapi.com/2/users/get_current_account \
  --header "Authorization: Bearer YOUR_TOKEN_HERE"
```

Если токен валиден, вы получите информацию о вашем аккаунте Dropbox.

## Безопасность

⚠️ **Важно**: Никогда не коммитьте токен в репозиторий! Используйте только GitHub Secrets для хранения токенов.

