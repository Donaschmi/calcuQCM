var ch2 = [
  {
    "assertion" : "L'ensemble des rationnels est énumérable",
    "response" : 1,
    "justification" : "On peut mettre dans un tableau les numérateurs et les dénominateurs. On prouve ensuite par diagonale montante que c'est énumérable. (Même justification que pour les paires d'entiers)"
  },
  {
    "assertion" : "Un sous ensemble infini d'un ensemble énumérable est énumérable",
    "response" : 1,
    "justification" : "C'est une propriété des ensembles énumérables"
  },
  {
    "assertion" : "Tout ensemble infini de chaînes finies de caractères est énumérable",
    "response" : 1,
    "justification" : "On peut représenter ça dans un tableau et par diagonale montante c'est énumérable. Autre justification : c'est un peu comme dire que l'ensemble des programmes est énumérable, un programme étant une chaine finie de caractère"
  },
  {
    "assertion" : "Tout ensemble infini de chaînes infinies de caractères est énumérable",
    "response" : 0,
    "justification" : "(TODO : Help Michael ) Contre-exemple : l'ensemble infinie des nombres réels compris entre 0 et 1. Par théorème de Cantor, c'est faux."
  },
  {
    "assertion" : "L'ensemble des fonctions N vers {0, 1} est non énumérable",
    "response" : 0,
    "justification" : "(TODO : Help Michael)"
  },
  {
    "assertion" : "Tout langage (alphabet fini) est énumérable",
    "response" : 1,
    "justification" : "Vu que c'est un alphabet fini, on peut lister chaque élément du langage (TODO : meilleur justification ? )"
  },
  {
    "assertion" : "Toute fonction bijective est injective",
    "response" : 1,
    "justification" : "Une fonction bijective est surjective ET injective."
  },
  {
    "assertion" : "Une fonction dont la table est infinie ne peut être décrite de manière finie",
    "response" : 0,
    "justification" : "On peut représenter les entiers de manière finie dans un tableau infini"
  },
  {
    "assertion" : "Toute fonction totale est surjective",
    "response" : 0,
    "justification" : "Une fonction totale est une fonction définie partout. Sujective, co-domaine tout les éléments sont atteints par la fonction. Domaine et co-domaine n'ont rien à voir."
  },
  {
    "assertion" : "Toute extension d'une fonction surjective est surjective",
    "response" : 1,
    "justification" : "(TODO : Help Michael ) Si la fonction de base atteint tout les éléments du co-domaine, certains éléments seront plus atteint"
  },
  {
    "assertion" : "Tout ensemble non énumérable peut être mis en bijection avec l'ensemble des réels",
    "response" : 0,
    "justification" : "Il existe des ensembles plus grand que R, du coup la bijection ne marchera pas. Exemple : 2 exposant R"
  },
  {
    "assertion" : "La fonction 0,1 vers N est énumérable",
    "response" : 1,
    "justification" : "(TODO : Help Michael) Car il y a une bijection avec les paires d'entiers"
  },
  {
    "assertion" : "L'ensemble des programmes Java est énumérable",
    "response" : 1,
    "justification" : "Un programme Java est une chaine finie de caractère. L'ensemble des programmes Java sont infinies. Donc c'est un ensemble infini de chaînes finies de caractères. On peut représenter ça dans un tableau et par diagonale montante c'est énumérable."
  },
  {
    "assertion" : "L'énumérabilité des programmes Java et non énumérabilité des fonctions de N vers N est une preuve de l'existence de fonctions non calculables",
    "response" : 1,
    "justification" : "Puisque les programmes Java sont énumrables, les fonctions de N vers N ne sont pas énumérables. Or, on peut représenter tout les programmes par l'ensemble des fonctions de N vers N. Par conséquent, cet ensemble est plus grand que celui des programmes."
  },
  {
    "assertion" : "L'ensemble des fonctions calculables est énumérable",
    "response" : 1,
    "justification" : "Une fonction est calculable s'il existe un programme qui calcule cette fonction. Vu que les programmes sont énumérables, cet ensemble est énumérable."
  },
  {
    "assertion" : "L'ensemble des fonctions non calculables est énumérable",
    "response" : 0,
    "justification" : "(TODO : Help Michael) Si cet ensemble est énumérable alors R est énumérable. Or, par Cantor, on sait que c'est faux."
  }
]
