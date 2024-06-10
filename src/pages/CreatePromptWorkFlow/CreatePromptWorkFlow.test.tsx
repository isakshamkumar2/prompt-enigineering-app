import React from 'react';
import { render, screen } from '@testing-library/react';
import CreatePromptWorkFlow from './index';
import PromptWorkflow from '../../constants/data';
describe('CreatePromptWorkFlow Component', () => {
  test('renders component without crashing', () => {
    render(<CreatePromptWorkFlow />);
  });

  test('displays correct number of prompt workflows', () => {
    render(<CreatePromptWorkFlow />);
    const workflowCards = screen.getAllByTestId('workflow-card');
    expect(workflowCards.length).toBe(PromptWorkflow.length);
  });

  test('displays workflow titles and descriptions correctly', () => {
    render(<CreatePromptWorkFlow />);
    PromptWorkflow.forEach((workflow) => {
      const titleElements = screen.getAllByText(workflow.title);
      const descriptionElements = screen.getAllByText(workflow.description);
      expect(titleElements.length).toBeGreaterThan(0);
      expect(descriptionElements.length).toBeGreaterThan(0);
    });
  });
});
