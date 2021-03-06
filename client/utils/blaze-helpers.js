var DateFormats = {
    short: "DD MMMM YYYY",
    long: "dddd DD.MM.YYYY HH:mm"
};

UI.registerHelper("formatDate", function(datetime, format) {
    if (moment && datetime) {
        //debugger;
        f = DateFormats[format];
        var dt = new Date(datetime).toISOString();
        return moment(dt).format(f);
    }
    else {
        return "[No Date]";
    }
});

UI.registerHelper("formatDollars", function(amount) {
    return amount.formatMoney(0);
});

UI.registerHelper("fromNow", function(datetime) {
    if (moment && datetime) {
        //debugger;
        var dt = new Date(datetime).toISOString();
        return moment(dt).fromNow();
    }
    else {
        return "[No Date]";
    }
});

UI.registerHelper("selectedMatching", function(str1, str1) {
    if (str1 == str2)
        return "selected"
    else
        return "";

});

UI.registerHelper("sessionMatching", function(sessionName, str1) {
    if (Session.get(sessionName) == str1)
        return true
    else
        return false;

});

UI.registerHelper("formType", function(sessionName){
    if (Session.get(sessionName))
        return "edit"
    else
        return "insert";
});

UI.registerHelper('emptyCollection', function(collection) {
    if(collection){
        return (collection.count() == 0);
    }
});

UI.registerHelper('collectionCount', function(collection) {
    if(collection){
        return collection.count();
    }
});

UI.registerHelper('collectionCountBelow', function(collection, count) {
    if(collection){
        return collection.count() < count;
    } else
        return false;
});





UI.registerHelper('logThis', function() {
    console.log('Logging from the logThis template helper...');
    console.log(this);
});

UI.registerHelper('queryParamExists', function(param) {
    return (FlowRouter.getQueryParam(param));
});

UI.registerHelper('queryParam', function(param) {
    return (FlowRouter.getQueryParam(param));
});

UI.registerHelper('equals', function (a, b) {
    return a === b;
});

UI.registerHelper('hasType', function (typeName) {
    if(this.type)
        return (this.type.indexOf(typeName) > -1)
    else
        return false;

});

UI.registerHelper('statusIs', function (status) {
    return (this.status == status)
});



//
//UI.registerHelper('activityIcon', function (activity) {
//    if(activity.status == 'Outstanding')
//        return Spacebars.SafeString("<span>" + activity.text + "</span>")
//    if(activity.status == 'Not Applicable')
//        return Spacebars.SafeString('<span class="color-grey strikethrough">' + activity.text + '</span>')
//    if(activity.status == 'Completed')
//        return Spacebars.SafeString('<span class="color-grey">' + activity.text + '</span>')
//});

UI.registerHelper('activityText', function (activity) {

    if(activity.status == 'Completed')
        return Spacebars.SafeString('<span class="color-grey">' + activity.text + '</span>')
    if(activity.status == 'Not Applicable')
        return Spacebars.SafeString('<span class="color-grey strikethrough">' + activity.text + '</span>')


    return Spacebars.SafeString("<span>" + activity.text + "</span>")
});

UI.registerHelper('activeIf', function (field, value) {
    return (field == value ? "active" : "")
});

UI.registerHelper('abbreviateNumber', function(value) {
    return (value / 1000).toString() + 'k';
});

UI.registerHelper('formatPercent', function(value) {
    return Math.round(value,2).toString() + '%';
});


