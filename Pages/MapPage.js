var MapPage = function () {

    this.title = $("app-hero .title");
    this.subTitle = $("app-hero .subtitle");
    this.schedule = element(by.linkText("schedule"));
    this.map = element(by.linkText("map"));
    this.my = element(by.linkText("my"));
    this.general = element(by.linkText("general"));
    this.hunt = element(by.linkText("hunt"));
    this.self = element(by.linkText("self"));
    this.team = element(by.linkText("team"));
    this.signOut = element(by.linkText("sign out"));
}
module.exports = new MapPage();