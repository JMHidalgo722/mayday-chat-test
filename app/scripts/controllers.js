maydayChat
.controller('ChatController', function($scope, urlService, httpService) {

    $scope.start = (chat)=> {
        httpService.post((urlService.apiURL + 'message/login'), angular.toJson(chat))
        .then((res) => {
            $scope.chats = JSON.parse(res);
        });
    };

    $scope.send = (chat, channelID)=> {
        $scope.chats.messages.push(chat);
        chat.channelID = channelID;
        
        httpService.post((urlService.apiURL + 'message/send'), angular.toJson(chat))
        .then((res) => {
            $res = JSON.parse(res);

            if($res.status) {
                
            }
        });
    };

});