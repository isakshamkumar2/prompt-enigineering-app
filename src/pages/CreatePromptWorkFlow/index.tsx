import React from 'react';
import Styles from './CreatePromptWorkFlow.module.css';
import {
  Card,
  CardHeight,
  CardWidth,
  ProgressMeter,
} from '@genflowly/react-assets/dist';
import PromptWorkflow from '../../constants/data';
import { useTranslation } from 'react-i18next';

const CreatePromptWorkFlow = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className={Styles.heading}>{t('Create New Prompt Workflow')}</h2>
      <div className={Styles.workFlowOuterContainer}>
        {PromptWorkflow.map((workFlow, index) => (
          <Card
            key={index}
            width={CardWidth.Default}
            height={CardHeight.FitContent}
          >
            <div className={Styles.workFlowInnerContainer}>
              <div className={Styles.workFlowTextContainer}>
                <h2 className={Styles.workFlowTextContainerTitle}>
                  {t(workFlow.title)}
                </h2>
                <p className={Styles.workFlowTextContainerDescription}>
                  {t(workFlow.description)}
                </p>
              </div>
              <div className={Styles.workFlowInnerContainerProgress}>
                <ProgressMeter
                  progress={workFlow.progressMeterOneDetails.progress}
                  progressSubtitles={
                    workFlow.progressMeterOneDetails
                      .progressMeterOneSubtitles as [string, string]
                  }
                />
                <ProgressMeter
                  isNegative={workFlow.progressMeterTwoDetails.isNegative}
                  progress={workFlow.progressMeterTwoDetails.progress}
                  progressSubtitles={
                    workFlow.progressMeterTwoDetails
                      .progressMeterTwoSubtitles as [string, string]
                  }
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CreatePromptWorkFlow;
