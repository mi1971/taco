
//Router.route('/', {
//    waitOn: function() {
//        return Meteor.subscribe('contactSearch', Session.get("searchText"));
//    },
//    data: function () {
//        templateData = { contacts: Contacts.find() };
//        return templateData;
//    }
//});

Router.route('/', {
    template: "home",

    subscriptions: function() {
        return Meteor.subscribe('contactSearch', Session.get("searchText"));
    },

    data: function () {
        templateData = {contacts: Contacts.find()};
        return templateData;
    }
});


//Router.route('/', function () {
//    this.render('home');
//});

Router.route('/application', function () {
    this.render('application');
});

Router.route('/scenario', function () {
    this.render('scenarioForm');
});