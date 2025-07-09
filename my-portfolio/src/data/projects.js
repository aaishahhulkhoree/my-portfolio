const projects = [
  {
    id: 'portfolio',
    title: 'Portfolio React',
    description: 'Mon site personnel développé avec React.',
    image: '/assets/images/portfolio.jpg',
    repo: 'https://github.com/aaishahhulkhoree/my-portfolio',
    details: `Site vitrine personnel développé avec React.js, design responsive et déploiement sur GitHub Pages. Structure en composants, navigation avec React Router, gestion de l’état avec hooks.`,
  },
  {
    id: 'meteo',
    title: 'Application Météo (React Native)',
    description: 'App météo mobile avec API en temps réel.',
    image: '/assets/images/meteo.jpg',
    repo: 'https://github.com/aaishahhulkhoree/projet_meteo_shield',
    details: `Application mobile météo conçue avec React Native. Intégration d'une API météo externe, affichage dynamique des données, design responsive avec gestion des erreurs et animations météo.`,
  },
  {
    
  id: 'cake',
  title: 'Cake - Commandes de pâtisseries personnalisées',
  description: 'App web pour commander des gâteaux (fullstack).',
  images: [
    '/assets/images/cake/home.jpg',
    '/assets/images/cake/form.jpg'
  ],
  collaborators: ['Jade Cortial', 'Odélia Cohen', 'Sabrina Mac', 'Aurélien Guilloux', 'Aaishah Hulkhoree'],
  github: 'https://gitlab.com/jadecrtl/Projet-M1G1-2025-Team-A',
  details: `Projet d’équipe (5 personnes) : application fullstack pour passer commande de gâteaux personnalisés.
Stack technique : Node.js, MongoDB, Docker, GitLab CI/CD, React.
Fonctionnalités : création de comptes, sélection de produits, formulaire dynamique, envoi de commande, dashboard admin.`

},
  {
    
  id: 'bi-pollution',
  title: 'BI - Étude de la pollution (2015–2021)',
  description: 'Dashboard interactif sur la pollution.',
  images: [
    '/assets/images/bi/sap-dashboard.jpg',
    '/assets/images/bi/presentation-slide.jpg'
  ],
  collaborators: ['Jade Cortial'],
  github: '',
  details: `Projet Business Intelligence réalisé avec Jade Cortial. 
L'objectif était d'étudier les données de pollution entre 2015 et 2021, en les intégrant dans Power BI. 
Nous avons utilisé des visualisations interactives (cartes, filtres, courbes), mis en place une navigation par page, et produit une restitution complète sous forme de présentation.
Certaines données ont été préparées via Excel puis retraitées dans Power BI.`

  },
  {
    id: 'docbot',
    title: 'DocBot - Assistant médical (SIMET)',
    description: 'Modélisation d’un assistant médical intelligent.',
    image: '/assets/images/docbot.jpg',
    repo: '',
    details: `Projet de modélisation dans le cadre du cours SIMET : création d’un assistant médical virtuel “DocBot” à l’aide de diagrammes DRD, BPMN et DMN. Collaboration interfonctionnelle simulée.`,
  },
];

export default projects;
