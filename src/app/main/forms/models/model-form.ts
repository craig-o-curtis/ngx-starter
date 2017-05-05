// model for form
export class ModelForm {
  constructor(
    public food: string,
    public tel: string|number,
    public address: string,
    public zip: string|number,
    public selectedFood: string,
    public selectedCar: string,
    public selectedConsole: string,
    public beer: boolean,
    public buffaloes: boolean,
    public sprockets: boolean,
    public tortoises: boolean,
    public favoriteSeason: string,
    public dateModel1: Date|any,
    public dateModel2: Date|any,
    public mydaterangeModel: Date|any,
    public toggle1: boolean,
    public toggle2: boolean,
    public toggle3: boolean,
    public toggle4: boolean,
    public toggle5: boolean
  ) { }
}
