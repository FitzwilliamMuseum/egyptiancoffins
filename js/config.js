
// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
// You can also disable auto-loading of the consent notice by adding
// data-no-auto-load=true to the script tag.
var klaroConfig = {

    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'klaro',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 365,

    // You can customize the name of the cookie that Klaro will use to
    // store user consent. If undefined, Klaro will use 'klaro'.
 
    // Put a link to your privacy policy here (relative or absolute).
    privacyPolicy: 'https://www.fitzmuseum.cam.ac.uk/website/cookiepolicy',
    
    // Defines the default state for applications (true=enabled by default).
    default: true,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party apps.
    mustConsent: false,

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    //lang: 'en',

    // You can overwrite existing translations and add translations for your
    // app descriptions and purposes. See `src/translations.yml` for a full
    // list of translations that can be overwritten:
    // https://github.com/DPKit/klaro/blob/master/src/translations.yml

    // Example config that shows how to overwrite translations:
    // https://github.com/DPKit/klaro/blob/master/src/configs/i18n.js
    translations: {
        // If you erase the "consentModal" translations, Klaro will use the
        // defaults as defined in translations.yml
        en: {
            consentModal: {
                description: 'Here you can see and customize the information that we collect about you. Entries marked as "Example" are just for demonstration purposes and are not really used on this website.',
            },
            googleAnalytics: {
                description: 'Collecting of visitor statistics',
            },
            bootstrap: {
                description: 'External style sheets for site aesthetics',
            },
            cloudflare: {
                description: 'Protection against DDoS attacks',
            },
            googleFonts: {
                description: 'Web fonts hosted by Google',
            },
            vimeo: {
                description: 'Hosting of our video content',
            },
            youtube: {
                description: 'Hosting of our video content',
            },
            doubleclick: {
                description: 'Hosting of our video content',
            },
            purposes: {
                analytics: 'Analytics',
                security: 'Security',
                livechat: 'Livechat',
                advertising: 'Advertising',
                styling: 'Styling',
            }
        },
    },

    // This is a list of third-party apps that Klaro will manage for you.
    apps : [
        {
            // Each app should have a unique (and short) name.
            name : 'googleAnalytics',

            // If "default" is set to true, the app will be enabled by default
            // Overwrites global "default" setting.
            // We recommend leaving this to "false" for apps that collect
            // personal information.
            default: true,

            // The title of you app as listed in the consent modal.
            title : 'Google Analytics',

            // The purpose(s) of this app. Will be listed on the consent notice.
            // Do not forget to add translations for all purposes you list here.
            purposes : ['analytics'],
            
            // A list of regex expressions or strings giving the names of
            // cookies set by this app. If the user withdraws consent for a
            // given app, Klaro will then automatically delete all matching
            // cookies.
            cookies : [/^ga/i],

            // An optional callback function that will be called each time
            // the consent state for the app changes (true=consented). Passes
            // the `app` config as the second parameter as well.
            callback : function(consent, app){
                // This is an example callback function.
                console.log("User consent for app "+app.name+": consent="+consent)
            },

            // If "required" is set to true, Klaro will not allow this app to
            // be disabled by the user.
            required : false,

            // If "optOut" is set to true, Klaro will load this app even before
            // the user gave explicit consent.
            // We recommend always leaving this "false".
            optOut : false,

            // If "onlyOnce" is set to true, the app will only be executed
            // once regardless how often the user toggles it on and off.
            onlyOnce: true,
        },
        {
            name : 'bootstrap',
            title : 'Bootstrap CDN',
            purposes : ['styling']
        },

        {
            name : 'googleFonts',
            title : 'Google Fonts',
            purposes : ['styling']
        },
        {
            name : 'cloudflare',
            title : 'Cloudflare',
            purposes : ['security'],
            required: true,
        },
        {
            name : 'vimeo',
            title : 'Vimeo',
            purposes : ['analytics'],
        },
        {
            name : 'youtube',
            title : 'YouTube',
            purposes : ['advertising'],
        },
        {
            name : 'doubleclick',
            title : 'DoubleClick',
            purposes : ['advertising'],
        },
    ],
}