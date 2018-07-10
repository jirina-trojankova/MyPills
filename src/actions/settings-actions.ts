export const UPDATE_VIEW_TYPE = 'UPDATE_VIEW_TYPE';

export interface UpdateViewSizeAction {
  type: string;
  isMobile: boolean;
}

export const updateViewSizeAction = (isMobile: boolean): UpdateViewSizeAction => ({
  type: UPDATE_VIEW_TYPE,
  isMobile,
});