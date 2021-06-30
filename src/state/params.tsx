// I think a separate context to prevent drilling this state through components
// makes sense. Since it doesn't change at runtime, it felt useful to keep this
// code separate from the runtime state.
import React from 'react';

export type ControlsOrientationValue = 'bottom' | 'right';
export type AnimationLocationValue = string;
const defaultState = {
  animationLocation: '',
  controlsOrientation: 'bottom' as ControlsOrientationValue,
};

interface IParamsContext {
  animationLocation: AnimationLocationValue;
  controlsOrientation: ControlsOrientationValue;
}

export const ParamsContext = React.createContext<IParamsContext>(defaultState);

export const useParams = (): IParamsContext =>
  React.useContext(ParamsContext);
