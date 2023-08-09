declare module '*.module.css' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.module.scss' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.module.sass' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.module.less' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.module.styl' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;
