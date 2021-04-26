export interface MenuParamsModel {
  key: string,
  slug: string,
  hasChildren: boolean,
  children?: MenuParamsModel[]
}
