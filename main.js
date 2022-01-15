$(document).ready(function(){
	$('#action_menu_btn').click(function(){
		$('.action_menu').toggle();
	});
});

Pusher.logToConsole = false;

var pusher = new Pusher('6d46e3b1e87d7976bb9c', {
  cluster: 'ap2'
});

var app = angular.module("discord", []);
app.controller("discordCtrl", function($scope) {
    $scope.getDp=(discordId)=>{
    	$scope.Chats.forEach((item)=>{
    		if(item.discordId==discordId){
    			return item.dp;
    		}
    	});
    }
    $scope.Chats = [
	    	{
	    		discordId:123,
	    		name:'Axie Group',
	    		userType:'group',
	    		dp:'',
	    		onlineStatus:true,
	    		lastMsgTimeStamp:0
	    	},{
	    		discordId:124,
	    		name:'PV',
	    		userType:'dm',
	    		dp:'',
	    		onlineStatus:true,
	    		lastMsgTimeStamp:0
	    	},{
	    		discordId:125,
	    		name:'Vin',
	    		userType:'dm',
	    		dp:"",
	    		lastMsgTimeStamp:0
	    	}
    	];
	$scope.chat
	$scope.openChat=(chat)=>{
		$scope.chat=chat;
		alert(JSON.stringify($scope.chat))
		// $scope.chat.messages=$scope.channelMap[chat.discordId];
	}
	$scope.channelMap={123:[{
				self: false,
				discordId:124,
				message:"hello boss",
				timestamp:0
			},{
				self: true,
				discordId:123,
				message:"hi vin",
				timestamp:0
			}],124:[],125:[]};

	$scope.channel = pusher.subscribe('comm-deep-chat');
	$scope.channel.bind('my-event', function(data) {
	  console.log(data);
	  $scope.channelMap[data.discordId].push(data.data);
	});
});






