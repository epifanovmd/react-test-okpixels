// @ts-ignore
declare const IS_DEVELOPMENT: boolean;
declare const IS_PRODUCTION: boolean;
declare module "*.png";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
