# my_js_test

> A Vue.js project to test RE

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
Vous pouvez utiliser ```yarn``` à la place de ```npm```
Pour l'utilisation de ```yarn``` référez-vous à la page suivante : https://yarnpkg.com/fr/docs/usage

## Test javascript (collège Sismondi)

Pour faire ce test, il vous est demandé de :

 1. faire un ```git clone```de ce projet
 2. faire un ```git branch```qui porte comme nom, votre prénom (attention de bien fixer votre nom github )
 3. de répondre ou faire les exercices demandés ci-dessous
 4. si possible, sauvegarder votre projet sur github (le plus simple est de créer un nouveau projet sur votre compte github, si pas possible, en faire une archive, zip ou tgz)
 5. m'envoyer la référence de votre projet (ou votre archive) dans lequel je trouverai les réponses à ce qui est demandé.

### Présentation du projet

Vous avez de base sur la page générée, un **testeur d'expressions régulières**.

Vous pouvez donc tester rapidement vos idées !

Ce testeur est en fait un composant **VueJS** qui est répété dans toutes les pages du site!
Ainsi, en lançant le projet, si vous tapez http://localhost:8080/#/re vous tombez sur le deuxième composant de ce projet **MyRE** (allez voir sous ```src/components``` pour trouver le fichier ```MyRE.vue```)

Ce composant n'est pas complet, il manque le code nécessaire à le faire fonctionner correctement (voir le commentaire ```A COMPLETER```)

Le *but de MyRE* est de prendre une liste de mots que vous pouvez construire sur la page (par défaut ['Der','Die','Das'], des articles en allemand) et de tester si la phrase donnée commencent bien avec un de ces mots.

Vous devez donc coder pour générer la bonne expression régulière qui combine ces mots et qui vérifie que la phrase testée commence par un de ces mots!

Avant de vous lancer dans la programmation du composant MyRE, testez l'expression régulière que vous allez fabriquer.

#### A faire :

 1. Trouvez 2 expressions régulières différentes qui permettent de repérer les phrases qui commencent par 'Der', 'Die' ou 'Das' (mettez votre résultat dans le README.md de votre "branch")``
 2. Modifiez le code de ```MyRE.vue```pour que la page fonctionne et le test fonctionne quelques soient les mots utilisés dans la liste de ```listItems```
 3. Si vous avez le temps, vous pouvez copier ```MyRE.vue```en le nommant ```MyRE2.vue``` pour modifier le fonctionnement de ce composant de sorte à ce que tous les éléments de la liste doivent se trouver dans la phrase testée (n'oubliez pas de générer une nouvelle *route* pour ce composant sous ```src/router/index.js```, c-à-d un nouveau chemin URL http://localhost:8080/#/re2 par exemple)


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
