# Database session/engine

from sqlalchemy import create_engine
from sqlalcemy.orm import sessionmaker, declaritive_base
from app.core.config import settings

engine = create_engine(settings.DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()