// Page address , scroll from top
export type ScrollPositionsSchema = Record<string, number>;

export interface ScrollHandlerSchema {
    scrollPositions: ScrollPositionsSchema;
}
