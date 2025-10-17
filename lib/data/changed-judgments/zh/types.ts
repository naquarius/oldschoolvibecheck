export interface ChangedJudgment {
  changedToId: number;
  interpretation: string;
}

export type ChangedJudgments = ChangedJudgment[];

export type ChangedJudgmentsMap = {
  [fromId: number]: ChangedJudgments;
};
