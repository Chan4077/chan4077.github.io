var app = angular.module('testApp', ['ngMaterial']);
// Config
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('purple');
});
app.controller('MainController', function ($scope, $mdSidenav, $mdDialog, $mdToast) {
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
    $scope.oriFeedback = {
        name: "",
        email: "",
        sendFeedback: ""
    };
    // Declare a variable called oriFeedback
    var oriFeedback = angular.copy($scope.oriFeedback);

    // On initial, set feedback to original
    $scope.feedback = angular.copy(oriFeedback);

    // Reset form
    $scope.reset = function () {
        $scope.feedback = angular.copy(oriFeedback);
        // Reset form
        $scope.feedbackbeta.$setPristine();
        // Reset validation errors
        $scope.feedbackbeta.$setUntouched();
    };
    // Feedback Form ($mdToast)
    var last = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };
    $scope.toastPosition = angular.extend({}, last);

    $scope.getToastPosition = function () {
        sanitizePosition();

        return Object.keys($scope.toastPosition)
            .filter(function (pos) { return $scope.toastPosition[pos]; })
            .join(' ');
    };

    $scope.formSubmit = function () {
        var pinTo = $scope.getToastPosition();
 $mdToast.show(
     $mdToast.simple()
            .textContent('Form was submitted!')
            .hideDelay(3000)
            .position(pinTo)
)
        $mdToast.show(toast).then(function (response) {
            if (response == 'ok') {
                alert('You clicked the \'UNDO\' action.');
            }
        });

        // More menu
        var originatorEv;

        $scope.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };

        // Initialize switches
        $scope.switch = {
            form_debug: false,
        };
        // $mdDialog (start)
        $scope.whats_new = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'whats_new_tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
            });
        };
        $scope.settings = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                teplateUrl: 'settings_tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
            });
        };

        // $mdDialog (end)

        $scope.about_site = function () {
            window.location.href = "https://chan4077.github.io/about#angular";
        };
        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
        };

    });

app.controller('SideNavController', function ($scope) {
    $scope.top = [
        { url: 'https://chan4077.github.io', title: 'Main', icon: 'home', class: 'material-icons' },
        { url: 'https://chan4077.github.io/about', title: 'About Me', icon: 'account_box', class: 'material-icons' },
        { url: 'https://chan4077.github.io/blog', title: 'Blog', icon: '', class: '' },
        { url: 'https://chan4077.github.io/media', title: 'Social Media', icon: 'group', class: 'material-icons' },
        { url: 'https://chan4077.github.io/angular', title: 'Angular', icon: '' },
    ];
    $scope.other = [
        { url: 'https://github.com/Chan4077/chan4077.github.io', title: 'Project Page', icon: '' },
        { url: 'https://chan4077.github.io/preferences', title: 'Preferences', icon: 'settings', class: 'material-icons' },
        { url: '', title: 'Submit Feedback', icon: 'feedback' },
        { url: '', title: 'Get Help', icon: 'help' }

    ]
});