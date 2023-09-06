class HomeCtrl {
  constructor($scope, $location) {
    'ngInject';

    this.time = 'CURRENT TIME';

    setInterval(() => {
      this.time = Date.now();
    }, 1000);

    this.shows = [
      {
        name: 'Breaking Bad',
        description:
          'Set in Albuquerque, New Mexico, between 2008 and 2010,[7] Breaking Bad follows Walter White, a modest high school chemistry teacher who transforms into a ruthless kingpin in the local methamphetamine drug trade, driven to financially provide for his family after being diagnosed with inoperable lung cancer. Initially making only small batches of meth with his former student Jesse Pinkman in a rolling meth lab, Walter and Jesse eventually expand to make larger batches of special blue meth that is incredibly pure and creates high demand. Walter takes on the name "Heisenberg" to mask his identity. Because of his drug-related activities, Walter eventually finds himself at odds with his family, the Drug Enforcement Administration (DEA) through his brother-in-law Hank Schrader, the local gangs, and the Mexican drug cartels (including their regional distributors), putting him and his family\'s lives at risk.',
      },
      {
        name: 'FRIENDS',
        description:
          "Rachel Green (Jennifer Aniston), a sheltered but friendly woman, flees her wedding day and wealthy yet unfulfilling life and finds childhood friend Monica Geller (Courteney Cox), a tightly wound but caring chef. Rachel becomes a waitress at West Village coffee house Central Perk after she moves into Monica's apartment above Central Perk and joins Monica's group of single friends in their mid-20s: previous roommate Phoebe Buffay (Lisa Kudrow), an odd masseuse and musician; neighbor Joey Tribbiani (Matt LeBlanc), a dim-witted yet loyal struggling actor and womanizer; Joey's roommate Chandler Bing (Matthew Perry), a sarcastic, self-deprecating data processor; and Monica's older brother and Chandler's college roommate Ross Geller (David Schwimmer), a sweet-natured but insecure paleontologist. Episodes depict the friends' comedic and romantic adventures and career issues, such as Joey auditioning for roles or Rachel seeking jobs in the fashion industry. The six characters each have many dates and serious relationships, such as Monica with Richard Burke (Tom Selleck) and Ross with Emily Waltham (Helen Baxendale). Ross and Rachel's intermittent relationship is the most often-recurring storyline. During the ten seasons of the show, they repeatedly date and break up. Over the course of the series, Ross briefly marries Emily, Ross and Rachel have a child together after a one-night stand, Chandler and Monica date and marry each other, and Phoebe marries Mike Hannigan (Paul Rudd). Other frequently recurring characters include Ross and Monica's parents Jack and Judy Geller (Elliott Gould and Christina Pickles) from Long Island; Ross's ex-wife Carol Willick (Jane Sibbett), their son Ben Geller (Cole Sprouse), and Carol's lesbian partner Susan Bunch (Jessica Hecht); Central Perk barista Gunther (James Michael Tyler); Chandler's extremely annoying and obnoxious but good-natured ex-girlfriend Janice Goralnik (Maggie Wheeler); and Phoebe's evil twin sister Ursula (also played by Kudrow).",
      },
      {
        name: 'Money Heist',
        description:
          'Set in Madrid, a mysterious man known as the "Professor" recruits a group of eight people, who choose city names as their aliases, to carry out an ambitious plan that involves entering the Royal Mint of Spain, and escaping with €984 million. After taking 67 people hostage inside the Mint, the team plans to remain inside for 11 days to print the money as they deal with elite police forces. In the events following the initial heist, the group\'s members are forced out of hiding and prepare for a second heist, with some additional members, this time aiming to escape with gold from the Bank of Spain, as they again deal with hostages and police forces.',
      },
    ];
  }
}

export default HomeCtrl;
