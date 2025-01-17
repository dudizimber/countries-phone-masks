declare module "countries-phone-masks" {
  const countries: {
    name: string;
    code: string;
    mask: string | string[];
    flag: string;
    iso: string;
  }[];
  export default countries;
}
