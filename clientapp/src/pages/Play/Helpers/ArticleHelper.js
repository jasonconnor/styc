export const getRandomArticle = (size = null) => {
  let articles = size === null 
    ? Articles
    : Articles.filter(article => article.size === size)

  const randomIndex = Math.floor(Math.random() * articles.length)

  return articles[randomIndex]
}

export const getRandomArticles = (quantity, size = null) => {
  let articles = size === null 
    ? Articles
    : Articles.filter(article => article.size === size)

  const returnArticles = []

  for (let i = 0; i < quantity; i++) {
    const randomIndex = Math.floor(Math.random() * articles.length)
    returnArticles.push(articles[randomIndex])
  }

  return returnArticles
}

// These should be stored in our DB and Fetched via the API
const Articles = [
  {
    title: "Fires Destroy Local Crops, Endanger Livestock",
    body: [
      "Fires have swept through local farms, destroying crops and endangering livestock. The cause of the fires is currently under investigation, but farmers are urging the community to be cautious and report any suspicious activity. The loss of crops is a devastating blow for the farmers, many of whom rely on their harvest to make a living. The community is rallying around the affected farmers and offering support in any way they can."
    ],
    size: 1,
    type: "ARTICLE"
  },
  {
    title: "Disturbance on Main Street Causes Commotion",
    body: [
      "Residents of the downtown area were startled late last night by a disturbance on Main Street. Witnesses report that a group of individuals were causing a disturbance, shouting and causing damage to storefronts. Police were called to the scene and were able to quickly bring the situation under control.",
      "No injuries were reported, but several businesses sustained minor damages. Police are currently investigating the incident and have made several arrests. They are asking anyone with information about the disturbance to come forward and assist with the investigation.",
      "The community is relieved that the situation was resolved quickly and peacefully, and is grateful to the police for their swift response. Officials are urging residents to remain vigilant and report any suspicious activity to the authorities."
    ],
    size: 3,
    type: "ARTICLE"
  },
  {
    title: "Rivalry Between Two Local Groups Escalates",
    body: [
      "Tensions have been running high between two rival groups in the community. The conflict, which started as a dispute over territory, has escalated in recent weeks, with both sides engaging in vandalism and physical altercations.",
      "Residents are concerned about the safety of their community and the well-being of the individuals involved in the rivalry. Community leaders are urging the groups to resolve their differences peacefully and to seek help from mediators or other resources to address the underlying issues.",
      "Police have increased patrols in the area and are working to prevent further incidents. Officials are encouraging anyone with information about the rivalry or the recent incidents to come forward and assist with the investigation. The community hopes that a resolution can be reached soon and that peace can be restored."
    ],
    size: 3,
    type: "ARTICLE"
  },
  {
    title: "Increased Safety Measures Urged for Nighttime Activities",
    body: [
      "As the summer months approach, community leaders are urging residents to be cautious and take safety measures when participating in nighttime activities. With longer days and warmer weather, there is an increased risk of accidents, injuries, and crime.",
      "Residents are encouraged to stay in well-lit areas, travel in groups, and be aware of their surroundings. They are also encouraged to report any suspicious activity to the authorities. By taking these precautions, residents can help to ensure that their evenings and nights are enjoyable and safe for all."
    ],
    size: 2,
    type: "ARTICLE"
  },
  {
    title: "New Boutique Opens on Main Street",
    body: [
      "The downtown area is excited to welcome a new addition to its bustling shopping scene: a chic and stylish boutique. The store, which opened its doors this week, offers a wide selection of clothing, accessories, and home decor items.",
      `The boutique's owner, Jane Smith, is thrilled to be a part of the community and is looking forward to bringing her unique style and vision to the neighborhood. "We can't wait to meet our customers and become a part of the downtown community," Smith said. "We have a lot of exciting things in store and can't wait to share them with everyone.`,
      "The boutique is already attracting attention from shoppers and has received a warm welcome from the community. Its central location on Main Street makes it easy to access, and its charming storefront is sure to draw in passersby. The community is excited to see what the boutique has to offer and looks forward to supporting its success."
    ],
    size: 3,
    type: "ARTICLE"
  },
  {
    title: "Community Concerns Over Increase in Weapon-Related Incidents",
    body: [
      "There has been a concerning increase in the number of weapon-related incidents in the community in recent months. Police have responded to several reports of individuals carrying weapons in public, as well as incidents of shots being fired.",
      "Residents are understandably alarmed by these events and are urging authorities to take action to address the issue. Community leaders are calling for increased patrols and stricter regulations on the possession of weapons. They are also encouraging individuals to report any suspicious activity or threats to the authorities.",
      "The community is hopeful that steps will be taken to address this issue and to ensure the safety and well-being of all residents."
    ],
    size: 3,
    type: "ARTICLE"
  },
  {
    title: "Game Sequel Fails to Meet Expectations",
    body: [
      "Fans of the popular text-based game STYC were eagerly anticipating the release of its much-hyped sequel, but were disappointed to find that the game failed to live up to expectations. The sequel, which was released last week, was plagued by bugs and glitches, and received poor reviews from players. The game's developer has faced backlash from players and has issued a statement apologizing for the issues and promising to address them. Despite the initial disappointment, many fans remain hopeful that the issues will be resolved and that the game will improve in the future."
    ],
    size: 1,
    type: "ARTICLE"
  },
  {
    title: "STYC Sequel Fails to Meet Expectations",
    body: [
      "Fans of the popular text-based game STYC were eagerly anticipating the release of its highly anticipated sequel, and were thrilled to find that the game exceeded their expectations. The sequel, which was released last week, received praise from players for its improved gameplay, graphics, and features. The game's developer has received a positive response from players and is grateful for their support. The success of the sequel has solidified STYC's place as a fan-favorite game and has left players excited for what the future holds."
    ],
    size: 1,
    type: "ARTICLE"
  },
  {
    title: "Conspiracy Theory Surrounding Video Games Emerges",
    body: [
      "A new conspiracy theory has emerged claiming that video games are being used to control and manipulate players. Proponents of the theory argue that video game companies are embedding subliminal messages and hypnotic suggestions into their games in order to influence player behavior.",
      "Critics of the theory argue that there is no evidence to support these claims and that the theory is simply a baseless conspiracy. They point out that video games are a form of entertainment and are not designed to control or manipulate players.",
      "Despite the lack of evidence, the theory has gained a significant following online, with many people expressing concern about the potential dangers of video games. It remains to be seen if any further information will come to light to support or debunk this theory."
    ],
    size: 3,
    type: "ARTICLE"
  },
  {
    title: "Derrick from Taco Bell Surprises Local Group with Free Cinnamon Stix",
    body: [
      "Derrick, the manager of the local Taco Bell, surprised a local group with free orders of cinnamon stix as a token of appreciation for their support of the restaurant. The group, who are regular customers at the Taco Bell, were thrilled by the gesture and expressed their gratitude to Derrick and the staff. The cinnamon stix were a hit with the group, and they look forward to their next visit to the restaurant. Derrick's kindness and generosity have not gone unnoticed, and the community is grateful for his contributions to the neighborhood."
    ],
    size: 1,
    type: "ARTICLE"
  },
  {
    title: "Dark Jungle Sequel 5 Generates Excitement among Fans",
    body: [
      "Fans of the popular game series Dark Jungle are buzzing with excitement over the upcoming release of the fifth installment in the franchise. The game, which is set to release next month, has been highly anticipated by fans who have been waiting for a new Dark Jungle game for years.",
      "Pre-orders for the game have already sold out, and players are eagerly counting down the days until they can get their hands on the new game. The developer has released several teaser trailers and previews, which have only served to heighten the hype. The anticipation surrounding Dark Jungle Sequel 5 is reaching a fever pitch, and fans can't wait to see what the game has in store."
    ],
    size: 2,
    type: "ARTICLE"
  },
  /*
  {
    title: "",
    body: [

    ],
    size: 0,
    type: "ARTICLE"
  },
  */
]

export const DefeatedEnemyArticles = [
  {
    title: "Community Celebrates Victory Over Challenging Enemy",
    body: "The community is celebrating a victory over a challenging enemy that had threatened their safety and caused damage to property. The enemy was defeated by a group of brave individuals who worked to protect the community. Community leaders praised the group for their bravery and dedication, and the community expressed their gratitude for their efforts. The defeat marks a turning point for the community and serves as a reminder of their strength and resilience.",
    size: 1,
    type: "VICTORY"
  },
  {
    title: "Threat to Community Falls Thanks to Dedicated Group of Individuals",
    body: "The town is celebrating the fall of a long-standing threat that had been causing problems for residents. The threat, which had caused damage to property and disrupted the community's sense of safety, was finally defeated thanks to the efforts of a group of dedicated individuals. The community is relieved and grateful for the resolution of the situation and looks forward to moving forward in peace and harmony. The fall of the threat serves as a reminder of the community's strength and resilience in the face of adversity.",
    size: 1,
    type: "VICTORY"
  },
]

export const NewShopArticle = {
  title: "New General Store Opens in Town",
  body: [
    "Residents of the town are excited to welcome a new addition to the community: a general store. The store, which opened its doors this week, offers a wide range of goods, including groceries, household items, and gifts. The store's owner, Jane Smith, is excited to be a part of the community and is looking forward to serving the town's residents. The store is located in the center of town and is easily accessible by foot or car. The community is looking forward to supporting the store's success."
  ],
  size: 1,
  type: "SHOP"
}

export const ClosedShopArticle = {
  title: "Community Store Closing Its Doors Permanently",
  body: [
    "The store, which had been a fixture in the community for many years, announced that it would be permanently closing its doors due to financial struggles brought on by the pandemic. Customers were saddened by the news, as the store had always been known for its friendly staff and wide selection of products. Many took to social media to express their disappointment and share their memories of shopping at the store. The closing of the store is a loss for the community, and it will be greatly missed by all who had come to rely on it"
  ],
  size: 1,
  type: "CLOSEDSHOP"
}

export const VisitedShopArticle = {
  title: "New Merchant Brings Excitement to Town",
  body: [
    "Residents of Smallville were thrilled to hear the news that a new merchant was setting up shop in their town. The merchant, who introduced himself as Mr. John Doe, arrived with a truck full of exotic goods from far-off lands.",
    "As word of Mr. Doe's arrival spread, a crowd began to form outside his store. When the doors finally opened, people rushed in to get a look at the unique items on offer. From colorful spices and rare oils to handcrafted jewelry and beautiful textiles, there was something for everyone at Mr. Doe's store.",
    "The town's merchants, who had previously struggled to compete with larger cities, were excited by the influx of customers and the renewed interest in their own products. Mr. Doe, for his part, seemed just as thrilled to be a part of the community.",
    "As the day came to a close, it was clear that Mr. Doe's arrival had brought a much-needed boost of energy to Smallville. The town looks forward to seeing what other treasures he has in store."
  ],
  size: 4,
  type: "CLINIC"
}

export const NewClinicArticle = {
  title: "New Pharmacy Opens in Town",
  body: [
    "Residents of the town are excited to welcome a new pharmacy to the community. The pharmacy, which opened its doors earlier this week, offers a wide range of prescription and over-the-counter medications, as well as a variety of health and wellness products.",
    `The pharmacy's owner, John Smith, is committed to providing top-quality service and is looking forward to serving the community. "We are thrilled to be a part of this town and to have the opportunity to help our neighbors with their healthcare needs," Smith said. "We have a knowledgeable and friendly staff, and we are ready to assist in any way we can."`,
    "The pharmacy is conveniently located in the center of town and is easily accessible by foot or car. It is open seven days a week and offers extended hours for the convenience of its customers. The community is excited to have a new healthcare resource and looks forward to supporting the pharmacy's success."
  ],
  size: 3,
  type: "CLINIC"
}

export const VisitedClinicArticle = {
  title: "The New Clinic: A Short-Lived Success",
  body: [
    "On a bustling street in the heart of the city, a new clinic opened its doors for the first time. The clinic, which specialized in family medicine, was the brainchild of Dr. John Smith, a well-respected physician with years of experience.",
    "As word of the new clinic spread, it wasn't long before the waiting room was filled with patients eager to be seen by Dr. Smith and his team. The clinic's state-of-the-art facilities and personalized approach to care quickly made it a popular choice among locals.",
    "However, just as the clinic was gaining traction, disaster struck. A fire broke out in the building, destroying the clinic and all of its equipment. Despite their best efforts, Dr. Smith and his team were unable to save the clinic, and it closed its doors for good.",
    "Despite the tragic end, the short-lived success of the new clinic was not forgotten. Dr. Smith and his team were praised for their dedication to their patients and their commitment to providing top-quality care. While the clinic may no longer be in operation, the impact it had on the community will be felt for years to come."
  ],
  size: 4,
  type: "CLINIC"
}

export const ReturnOfAHeroArticle = {
  title: "The Hero Returns: A Community Welcomes Back Its Savior",
  body: [
    "After years of service abroad, a beloved hero has returned to their hometown. The community, filled with gratitude and admiration, has organized a grand welcome parade in honor of their return.",
    "As the hero makes their way through the streets, they are greeted with cheers and applause from an emotional crowd. Children wave handmade signs and throw confetti, while adults wipe tears of joy from their eyes.",
    "The hero, humbled by the outpouring of love and support, takes the time to thank each and every member of the community for their unwavering support. They vow to continue serving and protecting their home, and the community rejoices in the knowledge that their hero is back where they belong.",
    "As the parade comes to an end and the hero disappears into the distance, the community is left with a renewed sense of hope and pride. The hero's return marks a new chapter in the history of their hometown, one that will be remembered for generations to come."
  ],
  size: 4,
  type: "CLINIC"
}

export const ClosedClinicArticle = {
  title: "Clinic Closing Permanently, Leaving Patients in Need",
  body: [
    "The community was shocked to hear that the local clinic, which had been serving the area for decades, would be closing its doors permanently. The closure was attributed to financial struggles brought on by the pandemic, as well as the retirement of the clinic's longtime owner. Patients were saddened by the news and concerned about where they would go for medical care in the future. Many took to social media to express their disappointment and share their experiences at the clinic over the years. The closing of the clinic is a loss for the community, and it will be greatly missed by all who had come to rely on it for their healthcare needs."
  ],
  size: 1,
  type: "CLOSEDCLINIC"
}

export const GameOverArticle = {
  title: "History Hero Fought Hard Until the End",
  body: [
    "Residents of the town are remembering a local hero who fought hard until the end. The hero, who was known for their bravery and dedication, was remembered at a ceremony in their honor, where community members shared stories of their heroic deeds.",
    "The hero, who made a significant impact on the community, will be remembered for their contributions and their willingness to put others before themselves. They will be greatly missed, but their legacy will live on through the memories of those who knew them.",
    "The community is grateful for the hero's service and is proud to have had such a selfless and courageous individual among them. The hero will always be remembered as a symbol of hope and strength."
  ],
  size: 3,
  type: "GAMEOVER"
}

export const StartGameArticle = {
  title: "Starting a New Game with Excitement and Camaraderie",
  body: [
    "Excitement filled the air as players gathered to start a new game. The rules were explained and teams were chosen, with everyone eager to get started. The game began with a bang, with players quickly diving into the action and giving it their all. As the game progressed, cheers and laughter filled the air, and it was clear that everyone was having a great time. In the end, there was a sense of accomplishment and camaraderie among the players, as they had worked together and pushed each other to be their best. It was the perfect start to a new game."
  ],
  size: 1,
  type: "STARTGAME"
}