# Farfalle

## Zadání
V rámci systému pro divadlo nabízíte různá představení. Při prodeji lístku musí být možnost výběru představení, termínu, a místa. Divadlo má určité rozložení sedadel, které by chtělo zobrazit při výběru sedadla.

---

## Funkční požadavky

### Admin
* CRUD _(Create, Read, Update, Delete)_
    * představení
    * uživatelé
    * lístky

### Nepřihlášený uživatel
* zobrazit představení
* kupovat lístky

### Přihlášený uživatel
* zobrazit představení
* kupovat lístky
* zobrazit koupené lístky
* spravovat koupené lístky

### Čas
* připomenout představení → nepřihlášený uživatel, přihlášený uživatel

---
## Stack

### Backend
* C#/.NET
* PostgreSQL databáze
* Adminer
* ORM pomocí Entity Frameworku 6 (Npgsql.EntityFrameworkCore.PostgreSQL)
* API pomocí ASP.NET frameworku

### Frontend
* React
* TBD

### Tools
* Docker
* TBD

---

## Databáze

![database](/Models/ERD.png)
