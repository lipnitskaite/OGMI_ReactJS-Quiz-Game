const quizData = {
  categories: [
    {
      name: 'harry_potter',
      title: 'Harry Potter',
      image:
        'https://images.unsplash.com/photo-1610466024868-910c6e7e8929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      difficulty: [
        {
          level: 'easy',
          title: 'Easy',
          quiz: {
            title: 'Harry Potter Novice',
            description:
              'Test your basic knowledge of the Harry Potter series with this easy-level quiz. Answer the following questions and see how well you fare!',
            totalQuestions: 5,
            scorePerQuestion: 1,
            questions: [
              {
                question: "What is the name of Harry Potter's best friend?",
                choices: [
                  'Luna Lovegood',
                  'Ron Weasley',
                  'Draco Malfoy',
                  'Neville Longbottom',
                ],
                correctAnswer: 'Ron Weasley',
              },
              {
                question: 'Which house does Harry Potter belong to?',
                choices: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'],
                correctAnswer: 'Gryffindor',
              },
              {
                question:
                  'Who is the headmaster of Hogwarts School of Witchcraft and Wizardry?',
                choices: [
                  'Albus Dumbledore',
                  'Severus Snape',
                  'Minerva McGonagall',
                  'Rubeus Hagrid',
                ],
                correctAnswer: 'Albus Dumbledore',
              },
              {
                question:
                  'What is the name of the train that takes students to Hogwarts?',
                choices: [
                  'The Knight Bus',
                  'The Hogwarts Express',
                  'The Durmstrang Ship',
                  'The Beauxbatons Carriage',
                ],
                correctAnswer: 'The Hogwarts Express',
              },
              {
                question:
                  'What is the title of the first book in the Harry Potter series?',
                choices: [
                  'Harry Potter and the Chamber of Secrets',
                  "Harry Potter and the Philosopher's Stone",
                  'Harry Potter and the Prisoner of Azkaban',
                  'Harry Potter and the Goblet of Fire',
                ],
                correctAnswer: "Harry Potter and the Philosopher's Stone",
              },
            ],
            result: [
              {
                minScore: 0,
                maxScore: 1,
                title: 'Muggle Apprentice',
                description:
                  "Don't worry, you're just starting your journey into the wizarding world. Keep exploring!",
              },
              {
                minScore: 2,
                maxScore: 3,
                title: 'Wizard in Training',
                description:
                  "Well done! You have a good grasp of the basics. Keep learning and soon you'll be a true wizard!",
              },
              {
                minScore: 4,
                maxScore: 5,
                title: 'Potterhead Novice',
                description:
                  'Congratulations, you have a solid understanding of the Harry Potter series. Keep up the magical work!',
              },
            ],
          },
        },
        {
          level: 'medium',
          title: 'Medium',
          quiz: {
            title: 'Harry Potter Enthusiast',
            description:
              'Take your knowledge of Harry Potter to the next level with this medium-level quiz. Answer the following questions and prove your expertise!',
            totalQuestions: 5,
            scorePerQuestion: 1,
            questions: [
              {
                question: 'What is the name of the Weasley twins?',
                choices: ['Ron', 'George', 'Percy', 'Charlie'],
                correctAnswer: 'George',
              },
              {
                question:
                  'Which magical creature guards the entrance to the Chamber of Secrets?',
                choices: ['Dragon', 'Basilisk', 'Acromantula', 'Dementor'],
                correctAnswer: 'Basilisk',
              },
              {
                question:
                  'What is the name of the defense against the dark arts teacher in Harry Potter and the Prisoner of Azkaban?',
                choices: [
                  'Remus Lupin',
                  'Severus Snape',
                  'Gilderoy Lockhart',
                  'Dolores Umbridge',
                ],
                correctAnswer: 'Remus Lupin',
              },
              {
                question: 'Who is the Half-Blood Prince?',
                choices: [
                  'Albus Dumbledore',
                  'Tom Riddle',
                  'Sirius Black',
                  'Severus Snape',
                ],
                correctAnswer: 'Severus Snape',
              },
              {
                question:
                  'Which Triwizard Tournament task involves rescuing a loved one from the depths of a lake?',
                choices: [
                  'First Task',
                  'Second Task',
                  'Third Task',
                  'Fourth Task',
                ],
                correctAnswer: 'Second Task',
              },
            ],
            result: [
              {
                minScore: 0,
                maxScore: 1,
                title: 'Magical Apprentice',
                description:
                  'Keep delving into the magical world of Harry Potter to enhance your knowledge!',
              },
              {
                minScore: 2,
                maxScore: 3,
                title: 'Wizarding Scholar',
                description:
                  'Well done! Your knowledge of the Harry Potter series is impressive. Keep up the good work!',
              },
              {
                minScore: 4,
                maxScore: 5,
                title: 'Potterhead Enthusiast',
                description:
                  'Congratulations, you are a true Harry Potter enthusiast. Your dedication and knowledge are remarkable!',
              },
            ],
          },
        },
        {
          level: 'hard',
          title: 'Hard',
          quiz: {
            title: 'Harry Potter Expert',
            description:
              "Are you ready to test your expertise as a Harry Potter fan? Take on this challenging quiz and prove that you're a true expert!",
            totalQuestions: 5,
            scorePerQuestion: 1,
            questions: [
              {
                question:
                  'What is the name of the wizard prison in the Harry Potter series?',
                choices: [
                  'Gringotts',
                  'Azkaban',
                  'Nurmengard',
                  'Ministry of Magic',
                ],
                correctAnswer: 'Azkaban',
              },
              {
                question: 'What is the spell used to disarm an opponent?',
                choices: [
                  'Stupefy',
                  'Expelliarmus',
                  'Avada Kedavra',
                  'Imperio',
                ],
                correctAnswer: 'Expelliarmus',
              },
              {
                question: 'Who is the potions master at Hogwarts?',
                choices: [
                  'Severus Snape',
                  'Horace Slughorn',
                  'Filius Flitwick',
                  'Pomona Sprout',
                ],
                correctAnswer: 'Severus Snape',
              },
              {
                question:
                  "What is the name of the three-headed dog guarding the Philosopher's Stone?",
                choices: ['Fluffy', 'Fang', 'Buckbeak', 'Norbert'],
                correctAnswer: 'Fluffy',
              },
              {
                question:
                  'Which character betrays the Order of the Phoenix in Harry Potter and the Prizoner of Azkaban?',
                choices: [
                  'Severus Snape',
                  'Sirius Black',
                  'Peter Pettigrew',
                  'Lucius Malfoy',
                ],
                correctAnswer: 'Peter Pettigrew',
              },
            ],
            result: [
              {
                minScore: 0,
                maxScore: 1,
                title: 'Apprentice Wizard',
                description:
                  'Keep honing your knowledge of the Harry Potter series to reach expert level!',
              },
              {
                minScore: 2,
                maxScore: 3,
                title: 'Master of Spells',
                description:
                  "Well done! Your knowledge of the Harry Potter series is commendable. You're on your way to becoming a true expert!",
              },
              {
                minScore: 4,
                maxScore: 5,
                title: 'Ultimate Potterhead',
                description:
                  'Congratulations, you are an ultimate Potterhead. Your expertise in the Harry Potter series is unparalleled. Keep spreading the magic!',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'lord_of_the_rings',
      title: 'Lord of the Rings',
      image:
        'https://images.unsplash.com/photo-1624489094663-a51a6c61d492?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2530&q=80',
      difficulty: [
        {
          level: 'easy',
          title: 'Easy',
          quiz: {
            title: 'Lord of the Rings Novice',
            description:
              'Test your basic knowledge of the Lord of the Rings series with this easy-level quiz. Answer the following questions and see how well you fare!',
            totalQuestions: 5,
            scorePerQuestion: 1,
            questions: [
              {
                question:
                  'Who is the main protagonist in the Lord of the Rings?',
                choices: [
                  'Frodo Baggins',
                  'Gandalf',
                  'Aragorn',
                  'Samwise Gamgee',
                ],
                correctAnswer: 'Frodo Baggins',
              },
              {
                question:
                  'What is the name of the evil entity in the Lord of the Rings?',
                choices: ['Sauron', 'Saruman', 'Gollum', 'Shelob'],
                correctAnswer: 'Sauron',
              },
              {
                question:
                  "Which creature serves as Frodo and Sam's guide through the treacherous terrain?",
                choices: ['Gandalf', 'Legolas', 'Gimli', 'Gollum'],
                correctAnswer: 'Gollum',
              },
              {
                question:
                  'What is the name of the magical ring that Frodo must destroy?',
                choices: [
                  'The One Ring',
                  'The Elven Ring',
                  'The Dwarven Ring',
                  'The Wizard Ring',
                ],
                correctAnswer: 'The One Ring',
              },
              {
                question: 'Who is the author of the Lord of the Rings series?',
                choices: [
                  'J.R.R. Tolkien',
                  'C.S. Lewis',
                  'George R.R. Martin',
                  'J.K. Rowling',
                ],
                correctAnswer: 'J.R.R. Tolkien',
              },
            ],
            result: [
              {
                minScore: 0,
                maxScore: 1,
                title: 'Hobbit Apprentice',
                description:
                  'Keep exploring the world of Middle-earth to improve your knowledge!',
              },
              {
                minScore: 2,
                maxScore: 3,
                title: 'Ranger in Training',
                description:
                  "Well done! You're on your way to becoming a skilled ranger of Middle-earth!",
              },
              {
                minScore: 4,
                maxScore: 5,
                title: 'Middle-earth Novice',
                description:
                  "Excellent job! You're a true Middle-earth novice with a deep understanding of the series!",
              },
            ],
          },
        },
        {
          level: 'medium',
          title: 'Medium',
          quiz: {
            title: 'Lord of the Rings Enthusiast',
            description:
              'Take your knowledge of the Lord of the Rings series to the next level with this medium-level quiz. Answer the following questions and prove your expertise!',
            totalQuestions: 5,
            scorePerQuestion: 1,
            questions: [
              {
                question:
                  'Which hobbit is known for his love of food and is a loyal friend to Frodo?',
                choices: ['Merry', 'Pippin', 'Bilbo', 'Samwise'],
                correctAnswer: 'Samwise',
              },
              {
                question: 'Who is the rightful heir to the throne of Gondor?',
                choices: ['Faramir', 'Boromir', 'Aragorn', 'Denethor'],
                correctAnswer: 'Aragorn',
              },
              {
                question: 'What is the name of the sword carried by Aragorn?',
                choices: ['Andúril', 'Sting', 'Glamdring', 'Narsil'],
                correctAnswer: 'Andúril',
              },
              {
                question:
                  'Which creature is known for its treacherous riddles and possesses the One Ring for a time?',
                choices: ['Gollum', 'Saruman', 'Gimli', 'Elrond'],
                correctAnswer: 'Gollum',
              },
              {
                question:
                  'Where is the dangerous volcano where the One Ring must be destroyed?',
                choices: [
                  'Mount Doom',
                  'Mount Erebor',
                  'Mount Gundabad',
                  'Mount Celebdil',
                ],
                correctAnswer: 'Mount Doom',
              },
            ],
            result: [
              {
                minScore: 0,
                maxScore: 1,
                title: 'Middle-earth Explorer',
                description:
                  'Keep delving into the world of Middle-earth to uncover more hidden knowledge!',
              },
              {
                minScore: 2,
                maxScore: 3,
                title: 'Ring Bearer Apprentice',
                description:
                  "Great job! You're on your way to becoming a skilled Ring Bearer!",
              },
              {
                minScore: 4,
                maxScore: 5,
                title: 'Lord of the Rings Expert',
                description:
                  "Congratulations! You've achieved the highest level of Lord of the Rings knowledge. You are a true expert!",
              },
            ],
          },
        },
        {
          level: 'hard',
          title: 'Hard',
          quiz: {
            title: 'Lord of the Rings Master',
            description:
              'Only the true masters of the Lord of the Rings series can conquer this hard-level quiz. Test your knowledge and prove yourself!',
            totalQuestions: 5,
            scorePerQuestion: 1,
            questions: [
              {
                question:
                  'Who is the elf that forms a close bond with Frodo and helps him throughout the journey?',
                choices: ['Elrond', 'Galadriel', 'Arwen', 'Legolas'],
                correctAnswer: 'Galadriel',
              },
              {
                question:
                  'What is the name of the ancient tree-like creatures that come to the aid of the heroes?',
                choices: ['Ents', 'Dwarves', 'Orcs', 'Nazgûl'],
                correctAnswer: 'Ents',
              },
              {
                question:
                  'Which city is known as the "City of Kings" and serves as the capital of Gondor?',
                choices: [
                  'Minas Morgul',
                  'Minas Tirith',
                  'Edoras',
                  'Rivendell',
                ],
                correctAnswer: 'Minas Tirith',
              },
              {
                question:
                  'What is the name of the powerful artifact forged by Sauron to control the Rings of Power?',
                choices: [
                  'The One Ring',
                  'The Palantir',
                  'The Arkenstone',
                  'The Balrog',
                ],
                correctAnswer: 'The One Ring',
              },
              {
                question: 'Who is the leader of the Fellowship of the Ring?',
                choices: ['Gandalf', 'Legolas', 'Aragorn', 'Frodo'],
                correctAnswer: 'Gandalf',
              },
            ],
            result: [
              {
                minScore: 0,
                maxScore: 1,
                title: 'Hobbit Historian',
                description:
                  'Keep exploring the depths of Middle-earth to uncover more ancient knowledge!',
              },
              {
                minScore: 2,
                maxScore: 3,
                title: 'Lord of the Rings Scholar',
                description:
                  'Well done! Your mastery of the Lord of the Rings series is impressive!',
              },
              {
                minScore: 4,
                maxScore: 5,
                title: 'Middle-earth Maestro',
                description:
                  'Congratulations! You are a true Middle-earth Maestro with unmatched knowledge of the series!',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'doctor_who',
      title: 'Doctor Who',
      image:
        'https://images.unsplash.com/photo-1592085156079-6926b5e08b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      difficulty: [
        {
          level: 'easy',
          title: 'Easy',
          quiz: {
            title: 'Doctor Who Novice',
            description:
              'Test your basic knowledge of Doctor Who with this easy-level quiz. Answer the following questions and see how well you fare!',
            totalQuestions: 5,
            scorePerQuestion: 1,
            questions: [
              {
                question: 'Who is the main character in Doctor Who?',
                choices: [
                  'The Doctor',
                  'The Master',
                  'Rose Tyler',
                  'Donna Noble',
                ],
                correctAnswer: 'The Doctor',
              },
              {
                question:
                  "What is the Doctor's preferred mode of transportation?",
                choices: [
                  'TARDIS',
                  'Delorean',
                  'Starship Enterprise',
                  'Time Vortex',
                ],
                correctAnswer: 'TARDIS',
              },
              {
                question: "Who is the Doctor's longest-serving companion?",
                choices: [
                  'Sarah Jane Smith',
                  'Amy Pond',
                  'Clara Oswald',
                  'Martha Jones',
                ],
                correctAnswer: 'Sarah Jane Smith',
              },
              {
                question: 'Which alien race frequently battles the Doctor?',
                choices: ['Daleks', 'Cybermen', 'Sontarans', 'Silurians'],
                correctAnswer: 'Daleks',
              },
              {
                question:
                  'Who is the actor known for playing the Tenth Doctor?',
                choices: [
                  'David Tennant',
                  'Matt Smith',
                  'Peter Capaldi',
                  'Jodie Whittaker',
                ],
                correctAnswer: 'David Tennant',
              },
            ],
            result: [
              {
                minScore: 0,
                maxScore: 1,
                title: 'Time Lord Apprentice',
                description:
                  'Keep exploring the adventures of Doctor Who to improve your knowledge!',
              },
              {
                minScore: 2,
                maxScore: 3,
                title: 'Companion in Training',
                description:
                  "Well done! You're on your way to becoming a skilled companion of the Doctor!",
              },
              {
                minScore: 4,
                maxScore: 5,
                title: 'Doctor Who Enthusiast',
                description:
                  "Excellent job! You're a true Doctor Who enthusiast with a deep understanding of the series!",
              },
            ],
          },
        },
        {
          level: 'medium',
          title: 'Medium',
          quiz: {
            title: 'Doctor Who Fanatic',
            description:
              'Take your knowledge of Doctor Who to the next level with this medium-level quiz. Answer the following questions and prove your expertise!',
            totalQuestions: 5,
            scorePerQuestion: 1,
            questions: [
              {
                question:
                  'Which actor portrayed the First Doctor in the original series?',
                choices: [
                  'William Hartnell',
                  'Tom Baker',
                  'Jon Pertwee',
                  'Patrick Troughton',
                ],
                correctAnswer: 'William Hartnell',
              },
              {
                question: "What is the Doctor's home planet called?",
                choices: ['Gallifrey', 'Skaro', 'Karn', 'Mondas'],
                correctAnswer: 'Gallifrey',
              },
              {
                question:
                  "Who is the Doctor's arch-nemesis and fellow Time Lord?",
                choices: [
                  'The Master',
                  'The Rani',
                  'The Corsair',
                  'The Valeyard',
                ],
                correctAnswer: 'The Master',
              },
              {
                question: "What is the Doctor's catchphrase?",
                choices: [
                  'Allons-y!',
                  'Geronimo!',
                  'Fantastic!',
                  'Bowties are cool!',
                ],
                correctAnswer: 'Geronimo!',
              },
              {
                question: 'Which actress portrayed the Thirteenth Doctor?',
                choices: [
                  'Jodie Whittaker',
                  'Peter Capaldi',
                  'Matt Smith',
                  'David Tennant',
                ],
                correctAnswer: 'Jodie Whittaker',
              },
            ],
            result: [
              {
                minScore: 0,
                maxScore: 1,
                title: 'Temporal Tourist',
                description:
                  'Keep exploring the vast universe of Doctor Who to uncover more hidden knowledge!',
              },
              {
                minScore: 2,
                maxScore: 3,
                title: 'Whovian in Training',
                description:
                  "Great job! You're on your way to becoming a dedicated Whovian!",
              },
              {
                minScore: 4,
                maxScore: 5,
                title: 'Doctor Who Expert',
                description:
                  "Congratulations! You've achieved the highest level of Doctor Who knowledge. You are a true expert!",
              },
            ],
          },
        },
        {
          level: 'hard',
          title: 'Hard',
          quiz: {
            title: 'Time Lord Master',
            description:
              'Only the true masters of Doctor Who can conquer this hard-level quiz. Test your knowledge and prove yourself!',
            totalQuestions: 5,
            scorePerQuestion: 1,
            questions: [
              {
                question:
                  'Who was the first actor to portray the Doctor in the revived series?',
                choices: [
                  'Christopher Eccleston',
                  'David Tennant',
                  'Matt Smith',
                  'Peter Capaldi',
                ],
                correctAnswer: 'Christopher Eccleston',
              },
              {
                question: "What is the Doctor's real name?",
                choices: [
                  'Unknown',
                  'The Doctor',
                  'Theta Sigma',
                  'The Oncoming Storm',
                ],
                correctAnswer: 'Unknown',
              },
              {
                question:
                  "Which Doctor's incarnation was known for wearing a long scarf?",
                choices: [
                  'The Fourth Doctor',
                  'The Second Doctor',
                  'The Eleventh Doctor',
                  'The Eighth Doctor',
                ],
                correctAnswer: 'The Fourth Doctor',
              },
              {
                question:
                  'Which enemy race shares a symbiotic relationship with the Time Lords?',
                choices: [
                  'Daleks',
                  'Cybermen',
                  'Sontarans',
                  'Time Lords have no allies',
                ],
                correctAnswer: 'Daleks',
              },
              {
                question: 'Who is the actress known for playing River Song?',
                choices: [
                  'Alex Kingston',
                  'Karen Gillan',
                  'Freema Agyeman',
                  'Billie Piper',
                ],
                correctAnswer: 'Alex Kingston',
              },
            ],
            result: [
              {
                minScore: 0,
                maxScore: 1,
                title: 'Time Vortex Explorer',
                description:
                  'Keep delving into the adventures of Doctor Who to uncover more hidden knowledge!',
              },
              {
                minScore: 2,
                maxScore: 3,
                itle: 'Companion Scholar',
                description:
                  'Well done! Your mastery of Doctor Who is impressive!',
              },
              {
                minScore: 4,
                maxScore: 5,
                title: 'Time Lord Extraordinaire',
                description:
                  'Congratulations! You are a true Time Lord Extraordinaire with unmatched knowledge of Doctor Who!',
              },
            ],
          },
        },
      ],
    },
  ],
};

export default quizData;
