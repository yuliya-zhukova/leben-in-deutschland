interface Answer {
  id: string; // E.g.: '001-2'
  text: string;
}

interface Question {
  id: string; // E.g.: '001'
  text: string;
  answers: Answer[];
  correctAnswerId: string;
}

export const questions: Question[] = [
  {
    id: '001',
    text:
      'In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil…',
    answers: [
      {
        id: '001-1',
        text: 'hier Religionsfreiheit gilt.'
      },
      {
        id: '001-2',
        text: 'die Menschen Steuern zahlen.'
      },
      {
        id: '001-3',
        text: 'die Menschen das Wahlrecht haben.'
      },
      {
        id: '001-4',
        text: 'hier Meinungsfreiheit gilt.'
      }
    ],
    correctAnswerId: '001-4'
  },
  {
    id: '002',
    text:
      'In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am…',
    answers: [
      {
        id: '002-1',
        text: 'Geschichtsunterricht teilnimmt.'
      },
      {
        id: '002-2',
        text: 'Religionsunterricht teilnimmt.'
      },
      {
        id: '002-3',
        text: 'Politikunterricht teilnimmt.'
      },
      {
        id: '002-4',
        text: 'Sprachunterricht teilnimmt.'
      }
    ],
    correctAnswerId: '002-2'
  },
  {
    id: '003',
    text: 'Wie heißt die deutsche Verfassung?',
    answers: [
      {
        id: '003-1',
        text: 'Volksgesetz'
      },
      {
        id: '003-2',
        text: 'Bundesgesetz'
      },
      {
        id: '003-3',
        text: 'Deutsches Gesetz'
      },
      {
        id: '003-4',
        text: 'Grundgesetz'
      }
    ],
    correctAnswerId: '003-4'
  },
  {
    id: '004',
    text: 'Was verbietet das deutsche Grundgesetz?',
    answers: [
      {
        id: '004-1',
        text: 'Militärdienst'
      },
      {
        id: '004-2',
        text: 'Zwangsarbeit'
      },
      {
        id: '004-3',
        text: 'freie Berufswahl'
      },
      {
        id: '004-4',
        text: 'Arbeit im Ausland'
      }
    ],
    correctAnswerId: '004-2'
  },
  {
    id: '005',
    text: 'Ab welchem Alter darf man in Bayern bei Kommunalwahlen wählen?',
    answers: [
      {
        id: '005-1',
        text: '14'
      },
      {
        id: '005-2',
        text: '16'
      },
      {
        id: '005-3',
        text: '18'
      },
      {
        id: '005-4',
        text: '20'
      }
    ],
    correctAnswerId: '005-3'
  }
];
