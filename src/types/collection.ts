type NameType = "Feminina" | "Masculina" | "Infantil";
type IdType = "feminina" | "masculino" | "infantil";
type BannerType = "feminino" | "masculino" | "infantil";

export interface CollectionItem {
  id: IdType;
  name: NameType;
  message: string;
  banner: BannerType;
  reverse: boolean;
}
