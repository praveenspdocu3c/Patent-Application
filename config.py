from pydantic import BaseSettings

class Settings(BaseSettings):
    azure_endpoint: str
    api_key: str
    api_version: str
    model: str

    class Config:
        env_file = ".env"

settings = Settings()
