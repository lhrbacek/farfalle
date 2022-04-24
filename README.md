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
* spravovat profil

### Čas
* připomenout představení → nepřihlášený uživatel, přihlášený uživatel

---
## Stack

### Backend
* NestJS
* PostgreSQL databáze
* Adminer
* ORM Prisma

### Frontend
* Storybook
* Figma
    * Wireframes & komponenty https://www.figma.com/file/te9KrmUzuT5MvRqMWNgLSV/Wireframes?node-id=0%3A1
* React
    * Mantine/Next.js
* HTML, CSS

### Tools
* Docker

---

## Databáze

![database](/Models/ERD.png)
