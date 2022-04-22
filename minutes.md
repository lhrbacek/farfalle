# Minutes

## Time plan
* 31.5 final

## Meeting 11.4.
* backend migrujeme do TS
    * Adonis
        * Prisma
        * Routing
    1. všichni dostudujou cvika na Prismu, Express, TS
    2. Adél dá dohromady
* frontend
    * Storybook
        1. nastudovat
        2. začít dávat dohromady komponenty

## Meeting 6.4.
* rozdělení backend/frontend:
    1. **backend** - Adél, Kika -- C#
        * databáze - postgres, entitty framework
        * autentizace, autorizace
        * ASP.NET - API
        * mock data
        * testování
        * _postup_:
            1. nahodit databázi
            2. mock
            3. DTO pro funkční požadavky
    2. **frontend** - Luba, Verča -- React, JS, HTML, CSS
        * ???
        * HTML/CSS návrh
    3. **infrastruktura**
        * CI testy
        * Azure

ToDo:
* Databáze
    * entity v db
* Backend API
* Frontend návrh

## Meeting 22.4.
### Aktuální stav:
- Prisma hotová
- Services +- hotové, budeme přidávat podle controllerů
- Databáze + Docker + Adminer hotové

### Potřeba udělat:
- Dodělat seeding (adresář prisma/seeding) - Kika
- Prokonzultovat controllery s Danem - Aďa
- Udělat controllery - Aďa, Luba
- Autentizace (JWT) - Kika
- Navrhnout FE - Veru

### Controllery
- Správa uživatele
    - adresy, uživatelé, koupené lístky, autentizace?
- Založení hry a představení:
    - play, performance, readonly venue, generování lístků
- Admin:
    - CRUD všeho
    - Controller : Service -> 1 : 1
- Kupování lístků
    - uživatelé, adresy, lístky
