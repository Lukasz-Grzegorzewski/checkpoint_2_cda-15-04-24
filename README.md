# commands to lunch
  - npm i
  - npm start

# apollo Studio :
  - http://localhost:4000

# EXAMPLES in apollo Studio
## mutation GraphQL
  1.  ```
      mutation CreateCountry($data: CountryCreateInput!)
      {
        createCountry(data: $data) {
          code
          name
          emoji
          codeContinent
        }
      }
      ```
      - variables :
        ```
        {
          "data": {
            "code": "PL",
            "name": "Poland",
            "emoji": "🇵🇱",
            "codeContinent": "EU"
          }
        }
        ```

## queries GraphQL
  1.  ```
      query FindAllCountries {
        findAllCountries {
          code
          name
          emoji
        }
      }
      ```

  2.  ```
      query FindCountry($code: String!) {
        findCountry(code: $code) {
          code
          name
          emoji
        }
      }
      ```
      - variables :
        ```
        {
          "code": "PL"
        }
        ```

  3.  ```
      query FindAllCountriesByContinent($codeContinent: String!) {
        findCountriesByContinent(codeContinent: $codeContinent) {
          codeContinent
          code
          name
          emoji
        }
      }
      ```
      - variables :
        ```
        {
          "codeContinent": "EU"
        }
        ```


# Checkpoint backend (0923-rouge)

- Crée un nouveau projet NodeJS Typescript.
Pour un meilleur confort de dev, utilise ts-node-dev.

- Le but de cet exercice est de créer une API GraphQL avec Apollo Server et TypeGraphql pour enregistrer et lire des pays avec leur code, leur nom et leur emoji.

- Utilise une base de données SQLite et TypeORM en ORM.
Voici les packages dont tu auras besoin et leur version :
"dependencies": {
    "@apollo/server": "^4.10.2",
    "reflect-metadata": "^0.2.2",
    "sqlite3": "^5.1.7",
    "ts-node-dev": "^2.0.0",
    "type-graphql": "^2.0.0-beta.6",
    "typeorm": "^0.3.20"
  }

# Crée une mutation qui prend en paramètres :
un code (FR, BE, AN, ...),
un nom (France, Belgique, Andorre, ...),
un emoji ((🇫🇷, 🇧🇪, 🇦🇩, ...),
et qui enregistre cette entrée en BDD.

- Crée ensuite 2 queries :
1. Une qui renvoie la liste de tous les pays (avec pour attributs, pour chaque pays, le code, le nom, l'emoji)

2. Une autre qui prend en paramètre le code du pays et qui renvoie le pays en question.

3. Enfin ajoute un code continent à la mutation d'ajout de pays et une query qui permet de récupérer tous les pays d'un continent.

# Attention la dernière question attend une réponse obligatoire ! (et les autres vous permettent d'indiquer des commentaires si besoin, et nous permettent de correctement noter votre travail)

- Lien de ton dépôt Github, il doit être public et le dernier comit doit être fait avant l'heure limite de rendu

- Le projet a été créé et initialisé avec les technologies indiquées
Tu peux indiquer un commentaire ici si besoin
1 point

- La mutation a été ajoutée
Tu peux indiquer un commentaire ici si besoin
1 point

- Les requêtes de lecture (queries) ont été ajoutées
Tu peux indiquer un commentaire ici si besoin
1 point

- La prise en compte du code du continent a été ajoutée (à la fois dans la mutation et dans la query)
Tu peux indiquer un commentaire ici si besoin
1 point

- Mon API GraphQL est accessible, la mutation et les queries ont été testées avec Apollo Studio avant d'envoyer ce formulaire
Indique en réponse un exemple de mutation GraphQL 3 exemples de queries que je pourrai utiliser pour tester (à copier/coller dans Apollo Studio) 
1 point
