FROM postgres
ENV POSTGRES_DB test
COPY db.sql /docker-entrypoint-initdb.d/