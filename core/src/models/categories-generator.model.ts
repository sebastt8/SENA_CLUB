import { CATEGORIAS } from '../constants';

export class CategoriesGenerator {
  static getCategory(birthDate: Date) {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    switch (true) {
      case age <= 8:
        return CATEGORIAS.SUB_8;
      case age > 8 && age <= 9:
        return CATEGORIAS.SUB_9;
      case age > 9 && age <= 11:
        return CATEGORIAS.SUB_11;
      case age > 11 && age <= 13:
        return CATEGORIAS.SUB_13;
      case age > 13 && age <= 15:
        return CATEGORIAS.SUB_15;
      case age > 15 && age <= 19:
        return CATEGORIAS.SUB_19;
      case age > 19 && age <= 21:
        return CATEGORIAS.SUB_21;
      case age > 21 && age <= 30:
        return CATEGORIAS.SENIOR_30;
      case age > 30 && age <= 40:
        return CATEGORIAS.SENIOR_40;
      case age > 40 && age <= 60:
        return CATEGORIAS.SENIOR_60;
      case age > 60 && age <= 70:
        return CATEGORIAS.SENIOR_70;
      default:
        return null;
    }
  }
}
