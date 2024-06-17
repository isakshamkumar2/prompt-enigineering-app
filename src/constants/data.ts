const PromptWorkflow = [
  {
    title: 'Zero Shot Prompting',
    description: 'Use AI without any context, the most common approach.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ['None', 'Result Improvement'],
      progress: 0,
      isNegative: false,
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ['None', 'Time Effort Required'],
      progress: 0,
      isNegative: false,
    },
  },
  {
    title: 'Few Shot Prompting',
    description: 'Give AI some examples for before asking your question.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ['None', 'Result Improvement'],
      progress: 25,
      isNegative: true,
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ['None', 'Time Effort Required'],
      progress: 18,
      isNegative: true,
    },
  },
  {
    title: 'Chain Of Thought',
    description:
      'Give AI thought processes for 1 or more examples before asking your question.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ['None', 'Result Improvement'],
      progress: 90,
      isNegative: false,
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ['None', 'Time Effort Required'],
      progress: 48,
      isNegative: true,
    },
  },
  {
    title: 'Automatic Chain Of Thought',
    description:
      'Automate giving AI thought processes for 1 or more examples before asking your question.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ['None', 'Result Improvement'],
      progress: 90,
      isNegative: false,
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ['None', 'Time Effort Required'],
      progress: 22,
      isNegative: true,
    },
  },
  {
    title: 'Tree Of Thought',
    description: 'Give AI branched logic examples before asking your question.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ['None', 'Result Improvement'],
      progress: 30,
      isNegative: true,
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ['None', 'Time Effort Required'],
      progress: 68,
      isNegative: true,
    },
  },
  {
    title: 'Directional Stimulus',
    description:
      'Give AI thought processes for 1 or more examples before asking your question.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ['None', 'Result Improvement'],
      progress: 50,
      isNegative: true,
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ['None', 'Time Effort Required'],
      progress: 8,
      isNegative: true,
    },
  },
];
export default PromptWorkflow;
