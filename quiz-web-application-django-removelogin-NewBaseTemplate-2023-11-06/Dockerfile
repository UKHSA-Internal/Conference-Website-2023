# The first instruction is what image we want to base our container on
# We Use an official Python runtime as a parent image
FROM python:3.9
ENV PYTHONUNBUFFERED 1

# Create directory to store application code.
RUN mkdir -p /opt/app/quiz-web-app
WORKDIR /opt/app/quiz-web-app

# Copy local directory into the application code directory.
COPY . /opt/app/quiz-web-app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Create non-root user.
RUN adduser --disabled-password appuser

EXPOSE 8000

# runs the production server
ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]

# Switch to non-root user.
USER appuser
