import React from 'react';
import Styles from './CreatePromptWorkFlow.module.scss';
import {
  Card,
  CardHeight,
  CardWidth,
  ProgressMeter,
  ThemeType,
} from '@genflowly/react-assets/dist';
import PromptWorkflow from '../../constants/data';
import { useTranslation } from 'react-i18next';
import { TEXTS } from '../../config';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
const CreatePromptWorkFlow = () => {
  const { t } = useTranslation();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      <h2 className={Styles.heading}>
        {t(TEXTS.CREATE_PROMPT_WORKFLOW_TITLE)}
      </h2>
      <div className={Styles.workFlowOuterContainer}>
        {PromptWorkflow.map((workFlow, index) => (
          <Card
            data-testid="workflow-card"
            key={index}
            width={CardWidth.Default}
            height={CardHeight.FitContent}
            theme={mode === 'dark' ? ThemeType.DARK : ThemeType.LIGHT}
          >
            <div
              data-testid="workflow-card"
              className={Styles.workFlowInnerContainer}
            >
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
