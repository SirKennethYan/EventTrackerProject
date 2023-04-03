<h1 align="center">Event Tracker</h1>
<h3 align="center">My hiking tracker is a program designed to help me keep track of all the hikes I have been on. It allows me to store information about each hike, such as the trail name, location, length, and elevation gain. With this program, I can easily view all of my hikes in one place and track my progress over time.</h3>

<h3 align="left">Technologies:</h3>
<p align="left"><a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a><a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a><a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a><a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a><a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a>

<h3 align="left">Project Take Aways:</h3>
<h3 align="left">Throughout this project, I learned the importance of proper naming conventions for my classes, files, and variables. By taking the time to choose clear and descriptive names, I would have been able to write code that was more readable and understandable from the beginning. This is especially important because when I had to refactor rename my files, it caused errors to my JUnit tests and overall code in many files.</h3>
<h3 align="left">In addition to improving my naming conventions, this project gave me a deeper understanding of the structure and organization of Spring Data JPA. I found that writing CRUD (Create, Read, Update, Delete) methods was much simpler than in previous projects.</h3>

| HTTP Verb | URI                  | Request Body | Response Body |
|-----------|----------------------|--------------|---------------|
| GET       | `/api/trails`        |              | Collection of all trails in Database |collection** endpoint |
| GET       | `/api/trails/1`      |              | Representation of Trail `1` |
| POST      | `/api/trails`        | Representation of a new trail | | **
| PUT       | `/api/trails/1`      | Representation of a new version of trail `1` |
| DELETE    | `/api/trails/1`      |              |               |