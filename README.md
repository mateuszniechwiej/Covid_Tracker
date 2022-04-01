# Covid Tracker
This project is a full-stack Django project with  Angular used for the front-end.
User displays covid data(consumed from an api ) for selected country.

# Table of Contest

- [Covid Tracker](#covid-tracker)
- [Table of Contest](#table-of-contest)
  - [_Project Goal_](#project-goal)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
  - [Frameworks, Programmes, Database and Libraries](#frameworks-programmes-database-and-libraries)
  - [Testing](#testing)
  - [Project Initiation](#project-initiation)
    - [Create Project Enviroment(VSCode)](#create-project-enviromentvscode)
    - [Create Django app(VSCode)](#create-django-appvscode)
    - [Create GitHub repository](#create-github-repository)
  - [Database](#database)
    - [Database Model and MSSQL Connection](#database-model-and-mssql-connection)




## _Project Goal_

• Create a basic Django application.

• Consume the data from the disease.sh API to populate the database (of your choice) with data from all countries. A one time setup is suitable.
• Allow for querying of the database through a REST API for the countries listed below. The user should be able to select a country from a list of countries.
• Show the data for the selected country on a web page. Minimum data that should be displayed is:
   ◦ Name of the country
   ◦ Total cases
   ◦ Total deaths
   ◦ Total recovered
• Allow the user to update the data.

• Country displayed in the appplication:
    • Ireland: ie
    • Germany: de
    • Italy: it
    • UK: gb
    • Spain: es


## Technologies Used

### Languages Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)

* [CSS3](https://en.wikipedia.org/wiki/CSS)

* [JavaScript](https://pl.wikipedia.org/wiki/JavaScript)

* [Python](https://www.python.org/)
    - Python Modules used in this project can be found in the requirements.txt project file)

## Frameworks, Programmes, Database and Libraries
* [techsini](https://techsini.com/) - to generate website mock-up. 
* [Visual Studio Code](https://code.visualstudio.com/) - used for developing this website and commit the project to GitHub repository.
* [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) - used to debug the styling issues, test the website responsiveness and to make sure colour contrast is correct.
* [Github](https://github.com/) - Github as the hosting site was used to store the source code of this website.
* [Git](https://git-scm.com/) - used Git to commit and push code to the GitHub repository.
* [Favicon](https://favicon.io/) - to create a favicon for this Website.
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) - as a part of the chrome dev tool was used to improve the quality of the web page.
* [MSSQL](https://www.microsoft.com/en-ie/sql-server/sql-server-downloads) - database used in the project
* [Angular](https://angular.io/) - to built UI
* [Django](https://www.djangoproject.com/) - web framework used to build this application.
* [django REST framework](https://www.django-rest-framework.org/) - for building Web API.

## Testing 

## Project Initiation

### Create Project Enviroment(VSCode)
__(You need to have installed Python extensions and Python version 3 before taking following steps )__
1. On the the local system create project folder 
2. Open folder in VS Code
3. Create python virtual environment:
   - in vs terminal run  `py -3 -m venv .venv` and `.venv\scripts\activate`
4. Select and activate an environment (To select a specific environment, use the `Python: Select Interpreter` command from the `Command Palette (Ctrl+Shift+P)`.



### Create Django app(VSCode)
1. Run in terminal : `django-admin startproject covid_tracker`
2. Test app : `python manage.py runserver`
3. Create api application in Django in terminal: `python3 manage.py startapp api` and add application to INSTALLED_APPS in Django `settings.py`
5. Install django: `pip install djangorestframework`
6. And in `'rest_framework'` to INSTALLED_APPS in `settings.py`:


### Create GitHub repository

1. In VS Code terminal run: `git init` 
2. On Github profile create new repository
3. Copy git remote
4. Paste git remote in VS Code Terminal in the project folder.
5. Add `.gitignore` file to the project.
6. Run `git add .` in terminal
7. Commit changes `git commit -m "Initial commit"`
8. Push changes `git push origin master`
   
## Database

### Database Model and MSSQL Connection 
1. To use MSSQL database(3rd-party database backend) in  Django project we need to install [mssql-django](https://pypi.org/project/mssql-django/) - `pip install django-mssql-backend` 
2. In `settings.py`  chnage database infromation:
   ```DATABASES = {
    'default': {
        "ENGINE": "mssql",
        "NAME": "CovidTracker",
        "USER": "",
        "PASSWORD": "",
        "HOST": "DESKTOP-3T2JK63",
        "PORT": "",
        "OPTIONS": {"driver": "ODBC Driver 17 for SQL Server",
                    },
    },
}```
Comment:  we can check ODBC driver running python shell in VS CODE terminal.
3. In MSSQL Managment Studio create database `CovidTracker`
![DBName](docs/DbName.PNG)
4. In django `models.py` in api folder create "Covid" model.
5. In VS Code terminal create migrations : `python manage.py makemigrations`
6. And then migrate: `python manage.py migrate`
7. Go to MSSQLMS to see new created table:
![DBTable](docs/Table.PNG)
