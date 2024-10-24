# __Rule Engine Application with Abstract Syntax Tree (AST)__

__Project Doned By__
## __Roop Teja__

# Table of Contents
- [Project Overview](#project-overview)
- [Results](#results)
- [Technologies](#technologies)
- [Tools](#tools)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Conclusion](#conclusion)

# Project Overview

This project implements a 3-tier rule engine that dynamically determines user eligibility based on attributes such as age, department, income, and spend. It leverages an Abstract Syntax Tree (AST) to create, combine, and evaluate conditional rules efficiently. The rules can be modified, combined, and evaluated against user data using the provided frontend interface.

# Results
- ## __Create a Rule__
    - It create the new Rules

        ![UI](<Screenshot 2024-10-22 173941.png>)

- ## __Combine a Rule__
    - It Combines the Two rules.

        ![UI](<Screenshot 2024-10-24 134543.png>)

- ## __Evaluate Rule__
    - It Evaluates the Rule by Date Json

        ![UI](<Screenshot 2024-10-24 135220.png>)

# Technologies 

- __Front End__ : React.JS a javascript library for interactive, realtime UI.
- __Back End__ : Flask a lightweight API framework to handle data input and processing.
- __SQLite__ : SQLite a simple, serverless database and store data from the users.

# Tools 
- __Node.JS__ & __NPM__ : For managing frontend dependencies and running the React app.
- __Virtualenv__ : To manage Python dependencies in a virtual environment for the backend.

# Features 

- __Create Rules__ : Define eligibility rules using conditions like age, department, salary, and more.
- __Combine Rules__ : Dynamically combine multiple rules using logical operators (AND/OR).
- __Evaluate Rules__ : Check if the provided user data satisfies the defined rules.
- __Backend__ : Built using Flask and SQLAlchemy to store rules in SQLite.
- __Frontend__ : Developed with React, providing an intuitive UI to create, combine, and evaluate rules.

# Installation 

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/rule-engine.git
    cd Back_End
    ```
2. Setup for the Backend:

    - Navigate to the backend directory:

        ```bash 
        cd Back_End
        cd venv
        ```
    - Run the backend server:

        ```bash
        python app.py 
        ```
    - Install the required Python packages (optional):

        ```bash
        pip install -r requirements.txt
        ```
3. Setup for the Frontend:

    - Navigate to the frontend directory:

        ```bash
        cd Front_End
        ```
    - Install the required npm packages (optional):

        ```bash
        npm install
        ```
    - Start the React app:
        ```bash
        npm start
        ```

# Usage

Once the application is up and running, navigate to 

```bash
http://localhost:3000 
```
in your web browser to access the weather monitoring dashboard. You will be able to view real-time data and use the rollups and aggregates features to analyze weather trends.

# Conclusion

This Rule Engine project demonstrates a robust and dynamic system for creating, combining, and evaluating conditional rules based on user attributes. By leveraging Abstract Syntax Trees (AST), the application allows for flexible rule manipulation and optimization, making it highly scalable for more complex use cases.

The project is built using a clean separation of concerns with Flask handling backend logic and React providing an intuitive frontend interface. The use of SQLite as a lightweight database makes it easy to manage the rules while keeping the application simple and portable.

With features like dynamic rule creation, combination via AND/OR operators, and real-time evaluation, this system can be applied to various real-world scenarios such as user eligibility checks, financial assessments, and more.