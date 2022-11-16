from .base import *

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
DATABASES = {
    "default": env.db_url(
        "DATABASE_URL",
        default="sqlite:///" + str(BASE_DIR / "db.sqlite3"),
    )
}