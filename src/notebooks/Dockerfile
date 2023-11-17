
FROM python:3.10.12

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY requirements.txt ./
    
# Install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port the application will run on
EXPOSE 5000

# Command to start the application
CMD ["python3" , "main.py"]