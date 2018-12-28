// Pages
var Base = require('../Utilities/Base.js');
var SignInPage = require('../Pages/SignInPage.js');
var MapPage = require("../Pages/MapPage.js");

// TestData 
var CybertekData = require("../TestData/CybertekData.json");

// Database connection
const pgp = require('pg-promise')( /*options*/ );
const connectionString = require("../TestData/Queries.js");

describe('SignIn Page', () => {

    const db = pgp(connectionString);
    var arr = [];
    var username = "";
    var password = "";

    beforeEach(() => {
        Base.navigateToSignIn();
    });

    it('Should verify the url and title of the page', () => {
        
        expect(browser.getCurrentUrl()).toEqual(CybertekData.signIn.url);
        expect(browser.getTitle()).toEqual(CybertekData.signIn.titlePage);

    });

    it('should verify the welcome text of signin page', () => {
        expect(SignInPage.title.getText()).toEqual(CybertekData.signIn.welcomeText1);
        expect(SignInPage.subtitle.getText()).toEqual(CybertekData.signIn.welcomeText2);
    });

});