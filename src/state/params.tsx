// I think a separate context to prevent drilling this state through components
// makes sense. Since it doesn't change at runtime, it felt useful to keep this
// code separate from the runtime state.

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export type ControlsOrientationValue = 'bottom' | 'right';
export type AnimationLocationValue = string;
const defaultState = {
  animationLocation: '',
  controlsOrientation: 'bottom' as ControlsOrientationValue,
  // The app will be used multiple times on a page, and sometimes we need to
  // avoid them interacting with a randomly-generated ID. `react-tooltip` was
  // producing double-tooltips.
  appId: uuidv4(),
};

interface IParamsContext {
  animationLocation: AnimationLocationValue;
  controlsOrientation: ControlsOrientationValue;
  appId: string;
}

export const ParamsContext = React.createContext<IParamsContext>(defaultState);

export const useParams = (): IParamsContext =>
  React.useContext(ParamsContext);
