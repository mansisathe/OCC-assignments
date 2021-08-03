function CreateAccountViewModel() {
   var self = this;

   self.firstName = ko.observable("").extend({
      required: true,
      minLength: 2,
      validation: {
         message: "Please enter at least 2 characters",
         validator: function (value) {
            return value.length >= 2;
         }
      }
   });
   self.LastName = ko.observable("").extend({
      required: true,
      minLength: 2,
      validation: {
         message: "Please enter at least 2 characters",
         validator: function (value) {
            return value.length >= 2;
         }
      }
   });
   self.checkGender = ko.observable("").extend({
      required: true

   });

   self.emailAddress = ko.observable("").extend({
      required: true,
      email: true
   });

   self.checkCourse = ko.observable("").extend({
      required: true
   });
   self.hasBeenSubmitted = ko.observable(false);
   self.handleSubmit = function () {
      //Check for errors      
      var errors = ko.validation.group(self);
      if (errors().length > 0) {
         errors.showAllMessages();
         return;
      }
      self.hasBeenSubmitted(true);
      console.log('submit the form!')
      console.log({
         firstName: self.firstName(),
         LastName: self.LastName(),
         emailAddress: self.emailAddress(),
         Gender: self.checkGender(),
         course: self.checkCourse()
      })
   }
};
const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new CreateAccountViewModel(), knockoutApp);